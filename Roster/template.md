---
# ------------------------------------------------------------------
# ROSTER TEMPLATE — copy this file to Roster/firstname-lastname.md
# (current members) or Roster/Alumni/firstname-lastname.md (former members).
# This template itself is never shown on the site.
# Only `title` (the person's name) and `role` are required; delete any line you don't need.
# Note: `name`, `path`, `url`, `dir` and `content` are reserved by Jekyll and can't be used.
# ------------------------------------------------------------------

# The person's full name (Jekyll calls this field `title`).
title: Jane Doe

# One of: PI | Postdoc | PhD | Master | Staff | Undergrad
#         Former Postdoc | Former PhD | Former Master | Former Staff | Former Undergrad
# Moving someone to Alumni = move their file into Roster/Alumni/ (their role is then shown as
# "Former …" automatically) and add end_year / current_position.
role: PhD

# Optional line under the name. Defaults to a label based on `role` (e.g. "PhD Student").
position: PhD Student, Psychology
pronouns: she/her

# Photo path relative to the Roster/ folder, also for files in Roster/Alumni/ (square-ish, ~600×600 JPG/PNG/WebP).
# Missing or broken photos fall back to coloured initials.
photo: photos/jane-doe.jpg

email: doej@wfu.edu

# One or two sentences shown on the card.
summary: Studies how positive emotions shape recovery from everyday stressors.

# Any of these keys are shown as icons; leave out the ones you don't use.
links:
  scholar: https://scholar.google.com/citations?user=XXXXXXX
  website: https://example.com
  orcid: https://orcid.org/0000-0000-0000-0000
  researchgate: https://www.researchgate.net/profile/Name
  youtube: https://www.youtube.com/@channel
  substack: https://name.substack.com
  twitter: https://x.com/username
  bluesky: https://bsky.app/profile/username
  linkedin: https://www.linkedin.com/in/username
  github: https://github.com/username

# Other spellings used in author lists, so publications bold this person correctly.
# ("Jane Doe" already matches "Doe, J.", "Doe, J. A.", "J. Doe".)
aliases: ["Smith, J."]

# Lower numbers appear first within a group (default: alphabetical by last name).
order: 10

# Alumni only.
start_year: 2021
end_year: 2026
current_position: Postdoctoral Fellow, Example University

# Set to true to hide someone without deleting their file.
hidden: false
---
The text below the front matter is the full bio, written in Markdown. It opens in a
"Full bio" pop-up on the People page (for the PI it is shown directly on the page).

You can use **bold**, *italics*, [links](https://example.com), and lists.
