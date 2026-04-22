import { Octokit } from "octokit";

type RepoAccessErrorCode =
  | "AUTH_REQUIRED"
  | "NOT_FOUND"
  | "FORBIDDEN"
  | "UNKNOWN";

export class RepoAccessError extends Error {
  constructor(
    message: string,
    public status: number,
    public code: RepoAccessErrorCode,
  ) {
    super(message);
    this.name = "RepoAccessError";
  }
}

function createOctokit(accessToken?: string): Octokit {
  const auth = accessToken || process.env.GITHUB_TOKEN;

  return new Octokit({
    auth: auth || undefined,
    request: {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
  });
}

function toRepoAccessError(
  error: unknown,
  hasUserAccessToken: boolean,
): RepoAccessError {
  const status =
    typeof error === "object" &&
    error !== null &&
    "status" in error &&
    typeof error.status === "number"
      ? error.status
      : 500;

  if ((status === 403 || status === 404) && !hasUserAccessToken) {
    return new RepoAccessError(
      "This repository is private. Please log in with GitHub to continue.",
      401,
      "AUTH_REQUIRED",
    );
  }

  if (status === 404) {
    return new RepoAccessError(
      "Repository not found or you do not have access to it.",
      404,
      "NOT_FOUND",
    );
  }

  if (status === 403) {
    return new RepoAccessError(
      "GitHub denied access to this repository.",
      403,
      "FORBIDDEN",
    );
  }

  const message =
    error instanceof Error ? error.message : "Could not fetch repository data";

  return new RepoAccessError(message, status, "UNKNOWN");
}

export async function getRepoSnapshot(
  owner: string,
  repo: string,
  accessToken?: string,
) {
  const client = createOctokit(accessToken);

  try {
    const { data: repoInfo } = await client.rest.repos.get({
      owner,
      repo,
    });

    const { data: repoTree } = await client.rest.git.getTree({
      owner,
      repo,
      tree_sha: repoInfo.default_branch,
    });

    const repoContents = repoTree.tree.filter(
      (item) => item.path && !item.path.includes("/"),
    );

    return {
      repoInfo,
      repoContents,
    };
  } catch (error: unknown) {
    throw toRepoAccessError(error, Boolean(accessToken));
  }
}
