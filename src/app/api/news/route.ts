import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const apiKey = process.env.NEWSAPI_KEY;
  if (!apiKey) {
    return NextResponse.json({ articles: [] }, { status: 200 });
  }

  const q = req.nextUrl.searchParams.get("q") || "executive search leadership";

  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&language=en&sortBy=publishedAt&pageSize=9&apiKey=${apiKey}`,
      { next: { revalidate: 3600 } } // cache for 1 hour
    );

    if (!res.ok) {
      return NextResponse.json({ articles: [] });
    }

    const data = await res.json();

    // Filter out articles with missing/placeholder content
    const articles = (data.articles || []).filter(
      (a: { title?: string; description?: string; url?: string }) =>
        a.title &&
        a.title !== "[Removed]" &&
        a.description &&
        a.description !== "[Removed]" &&
        a.url
    );

    return NextResponse.json({ articles });
  } catch {
    return NextResponse.json({ articles: [] });
  }
}
