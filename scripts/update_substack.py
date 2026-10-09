#!/usr/bin/env python3
"""Save the latest Substack posts to data/substack.json for the Media page.

Substack doesn't allow browsers on other sites to read its feed (no CORS), so the
site can't fetch posts live. This script runs daily in .github/workflows/substack.yml
and can also be run by hand:  python3 scripts/update_substack.py
"""
import json
import pathlib
import sys
import urllib.request

PUBLICATION = "https://christianwaugh.substack.com"
LIMIT = 3
OUT = pathlib.Path(__file__).resolve().parent.parent / "data" / "substack.json"


def main():
    req = urllib.request.Request(
        f"{PUBLICATION}/api/v1/posts?limit={LIMIT}",
        headers={"User-Agent": "Mozilla/5.0 (Emolab website updater)", "Accept": "application/json"},
    )
    with urllib.request.urlopen(req, timeout=30) as res:
        posts = json.load(res)

    latest = [
        {
            "title": p.get("title", "").strip(),
            "subtitle": (p.get("subtitle") or "").strip(),
            "date": (p.get("post_date") or "")[:10],
            "url": p.get("canonical_url"),
            "cover": p.get("cover_image") or "",
        }
        for p in posts[:LIMIT]
        if p.get("title") and p.get("canonical_url")
    ]
    if not latest:
        sys.exit("No posts returned; keeping the existing file.")

    OUT.write_text(json.dumps({"source": PUBLICATION, "posts": latest}, indent=2, ensure_ascii=False) + "\n")
    print(f"Wrote {len(latest)} posts to {OUT.relative_to(OUT.parent.parent)}")


if __name__ == "__main__":
    main()
