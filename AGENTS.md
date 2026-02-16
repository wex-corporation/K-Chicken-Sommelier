Agents Operating Rules (K-Chicken-Sommelier)

Goal
- Keep shipping small improvements 2 times per week.
- One PR = one purpose.
- Every change must be verifiable on deployed site.

Roles

Agent A (Product/QA)
- Creates 3 issues per cycle: 1 bug, 1 feature, 1 growth.
- Defines acceptance criteria (checklist).
- Reviews PRs and verifies on deployed site before closing issues.
- Writes short release notes in the merged issue.

Agent B (Frontend)
- Owns: index.html, styles.css, app.js
- Implements issues by creating a branch and a PR.
- Must include test steps and (if UI changed) a screenshot.

Agent C (Data/Content)
- Owns: data.js (and copy text if needed)
- Adds/adjusts brand/menu data without breaking schema.
- Checks that results do not bias extremely to one outcome.

Workflow

Cycle (twice a week)
1) Agent A creates 3 issues and puts them into Backlog.
2) Agent B/C pick issues, move to In Progress.
3) Agent B/C open PRs, move to In Review.
4) Agent A reviews using checklist and merges.
5) Agent A verifies on deployed site, closes issues, moves to Done.

Branch Naming
- fix/short-desc
- feat/short-desc
- data/short-desc

Commit Message
- fix: ...
- feat: ...
- data: ...
