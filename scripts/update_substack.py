#!/usr/bin/env python3
"""Save the latest Substack posts to data/substack.json for the Media page.

Substack doesn't allow browsers on other sites to read its feed (no CORS), so the
site can't fetch posts live. This script runs daily in .github/workflows/substack.yml
and can also be run by hand:  python3 scripts/update_substack.py

Sources, in order:
  1. The RSS feed (/feed) — meant for automated readers, so it is the most reliable
     from GitHub's servers.
  2. The JSON API (/api/v1/posts) — richer, but bot-protected and often answers
     403 to data-centre addresses such as GitHub Actions runners.
If both fail, the existing file is kept and a warning is logged, so a temporary block
doesn't fail the workflow.
"""
import email.utils
import html
import json
import os
import pathlib
import sys
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET

PUBLICATION = "https://christianwaugh.substack.com"
LIMIT = 3
OUT = pathlib.Path(__file__).resolve().parent.parent / "data" / "substack.json"

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/130.0 Safari/537.36"
    ),
    "Accept-Language": "en-US,en;q=0.9",
}


def fetch(url, accept):
    req = urllib.request.Request(url, headers={**HEADERS, "Accept": accept})
    with urllib.request.urlopen(req, timeout=30) as res:
        return res.read()


def from_rss():
    root = ET.fromstring(fetch(f"{PUBLICATION}/feed", "application/rss+xml, application/xml;q=0.9, */*;q=0.8"))
    posts = []
    for item in root.iter("item"):
        pub = item.findtext("pubDate") or ""
        try:
            date = email.utils.parsedate_to_datetime(pub).date().isoformat()
        except (TypeError, ValueError):
            date = ""
        enclosure = item.find("enclosure")
        posts.append({
            # The feed HTML-encodes some characters (e.g. &#8217; for ’).
            "title": html.unescape(item.findtext("title") or "").strip(),
            "subtitle": html.unescape(item.findtext("description") or "").strip(),
            "date": date,
            "url": (item.findtext("link") or "").strip(),
            "cover": enclosure.get("url", "") if enclosure is not None else "",
        })
    return posts


def from_api():
    data = json.loads(fetch(f"{PUBLICATION}/api/v1/posts?limit={LIMIT}", "application/json"))
    return [
        {
            "title": (p.get("title") or "").strip(),
            "subtitle": (p.get("subtitle") or "").strip(),
            "date": (p.get("post_date") or "")[:10],
            "url": p.get("canonical_url") or "",
            "cover": p.get("cover_image") or "",
        }
        for p in data
    ]


def warn(message):
    # Shows as a yellow annotation on the workflow run; plain text when run locally.
    prefix = "::warning::" if os.environ.get("GITHUB_ACTIONS") else "Warning: "
    print(prefix + message)


def main():
    errors = []
    for name, source in (("RSS feed", from_rss), ("JSON API", from_api)):
        try:
            posts = [p for p in source() if p["title"] and p["url"]]
        except (urllib.error.URLError, ET.ParseError, ValueError, TimeoutError) as err:
            errors.append(f"{name}: {err}")
            continue
        if posts:
            posts.sort(key=lambda p: p["date"], reverse=True)
            OUT.write_text(
                json.dumps({"source": PUBLICATION, "posts": posts[:LIMIT]}, indent=2, ensure_ascii=False) + "\n"
            )
            print(f"Wrote {len(posts[:LIMIT])} posts from the {name} to data/substack.json")
            return
        errors.append(f"{name}: no posts returned")

    warn("Could not fetch Substack posts; keeping the existing data/substack.json. " + " | ".join(errors))


if __name__ == "__main__":
    sys.exit(main())
