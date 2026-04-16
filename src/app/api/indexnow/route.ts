import { NextResponse } from "next/server";

const SITE_URL =
  process.env.SITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://readmegen-ai.vercel.app";

// IndexNow key matches the file in /public/85f2c293fce3483d896a5d9dc98974e5.txt
const INDEXNOW_KEY = "85f2c293fce3483d896a5d9dc98974e5";

const URLS_TO_INDEX = [
  `${SITE_URL}/`,
  `${SITE_URL}/features`,
  `${SITE_URL}/examples`,
  `${SITE_URL}/docs`,
  `${SITE_URL}/generate`,
];

/**
 * POST /api/indexnow
 * Notifies Bing IndexNow of updated URLs for timely crawling and indexing.
 * Call this endpoint after deploying significant content changes.
 */
export async function POST() {
  const host = new URL(SITE_URL).hostname;

  const payload = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: URLS_TO_INDEX,
  };

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });

    if (response.ok || response.status === 202) {
      return NextResponse.json(
        { success: true, submitted: URLS_TO_INDEX.length },
        { status: 200 },
      );
    }

    return NextResponse.json(
      { success: false, status: response.status },
      { status: 502 },
    );
  } catch (error) {
    console.error("IndexNow submission failed:", error);
    return NextResponse.json(
      { success: false, error: "Network error during IndexNow submission" },
      { status: 502 },
    );
  }
}
