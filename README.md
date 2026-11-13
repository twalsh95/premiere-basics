# Premiere Basics Missions

The step-by-step version of Mr. Walsh's Videography "Premiere Basics" mission guide (Missions 0 to 9, plus the Remix Challenge). It will live at `walshclassroom.com/premiere-basics/`.

Students keep it open in a half-width window next to Premiere Pro and work one step at a time: **Read it, Do it, Check it.**

## What it is, and what it is not

- It is a companion to the Google Doc mission cards and the Google Classroom assignments. It does not replace them.
- **Mr. Walsh's initials on the mission card are the official record.** The app is the student's own tracker. It is not a grade, a submission, or proof of completion.
- No sign-in, no server, no analytics, no cookies. Progress is saved only in the student's own browser (`localStorage`, key `wc.premiere-basics.v1`).
- The only requests that leave the site are the three Google Fonts the hub uses, and the Walsh Classroom bar from the hub.

## Files

```
index.html                   The whole app: HTML, CSS and JavaScript in one file
missions.js                  The content (derived from the mission guide, see SYNC.md)
walshclassroom.json          How the hub lists the app, plus the teacher explainer and student help
assets/videos/*.mp4          The ten how-to videos (animated, captions burned in, no sound)
SYNC.md                      How the app stays in step with the mission guide
publish-premiere-basics.bat  Double-click to publish
```

There is no build step. Open `index.html` from disk, or serve the folder with any static server.

## Changing the wording

**The paper guide (the Google Doc) is the master.** The Classroom cards are copies of it. `missions.js` is derived from the guide, so wording is changed in the guide first and then carried into `missions.js`. See [SYNC.md](SYNC.md) for the steps.

**Right now `missions.js` is ahead of the guide** for Missions 0 to 9. The 11/9 rewrite (M3 to M9) and the 11/12 rewrite (M0 to M2) are in the app but have not been pasted into the master guide yet. That is expected.

## Links for Google Classroom

| Link | Opens |
| --- | --- |
| `#/` | My Missions |
| `#/m/5` | Mission 5 |
| `#/m/5/s/7` | Mission 5, Step 7 |
| `#/m/5/show-me` | The Show Me check for Mission 5 |
| `#/m/remix` | The Remix Challenge |
| `#/back-on-track` | Back on Track |
| `#/launch` | The Launch check |
| `#/print/5` and `#/print/all` | Paper versions |
| `#/teachers` | For teachers |
| `#/settings` | Save or load progress, last name, text size, reset |

Add `?debug=1` before the `#` to see each mission's wording status. Students never see it.

## Publish

Published on 2026-11-13. To publish changes, double-click `publish-premiere-basics.bat`. The first-time setup was:

1. On github.com, make a new **public** repo named `premiere-basics` under `twalsh95`. Do not add a README or license.
2. Double-click `publish-premiere-basics.bat`. Sign in if a window asks.
3. In the repo, go to **Settings > Pages**. Under "Build and deployment", choose **Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
4. On the repo's main page, click the gear next to **About** and add the topic `walshclassroom`.
5. Wait a minute or two, then open `walshclassroom.com/premiere-basics/`.

**The app is live on the hub** (made live 2026-11-13, before the MacBook test). Its card appears the next time the hub's app list rebuilds (daily, or run **Update app list** in the hub repo's Actions tab). To hide it again, add `"hidden": true` to `walshclassroom.json` and publish.

`missions.json` and `BUILD_INSTRUCTIONS.md` stay on this laptop. `.gitignore` keeps them out of the published site, so `missions.js` is the only copy of the content in the app.

## Known issues

- Loading from disk (`file://`) shows no Walsh Classroom bar, and the browser console logs one failed request for `/platform/wc.js`. That is expected. The bar appears on the real site.
- A missing video hides its player. The browser still logs one 404 line for that file.
- The app header wraps to two rows only when the text size is turned up in a narrow window.
- Nothing here has been tried on a school MacBook with Premiere open.

## Questions for Tom

Nothing below was changed. The text in `missions.js` matches `missions.json` exactly.

**Untested steps**

- The M3 to M9 rewritten steps are untested on a school MacBook. The likeliest to differ by Premiere version: M3 fade squares and the empty audio track in step 17; M4 renaming and duplicating sequences; M6 step 17 (clicking the ruler); M7 Unlink and Rolling Edit (N); M8 steps 3 to 8 (a changed order) and Command + D for a dip or fade; M9 Type tool, Properties panel, and Command + D on a text clip.
- **M0 to M2 were rewritten on 11/12 and are untested.** Every new Check line is untested. In M1, Way A (drag the clip's left edge) may leave an empty gap in front of the clip, which would conflict with the Check line "no empty space before or after it." In M2, the step that types 200 into the time number and Command + K, and Shift + Command + V (Paste Insert), should be tried on a real MacBook. The M1 and M2 videos show these steps as written.

**Things found while building**

- **Step counts for M0 to M2.** The build brief lists M0 6, M1 6, M2 11 steps. `missions.json` has M0 8, M1 7, M2 12. The app uses what is in the file. M3 to M9 and the Remix match the brief. Which is right?
- **Video length.** "How this works" says each video "is about 35 to 55 seconds." The v2 videos run from about 1:05 (Mission 0) to 2:42 (Mission 6). The sentence is shown as written.
- **Mission 6 Cut Card.** No step points to the Cut Card, but the Show Me list asks for it. The app shows it under the steps and on the Show Me screen. Should a step say "Fill in the Cut Card"?
- **Mission 0 step numbers.** The mission has 8 steps. The M0 video captions should be checked against that.
- **Remix placeholder.** The Remix uses `[LastName]`, while the missions use `[YourLastName]`. The app fills in the student's last name for both.
- **Files line.** "Download these from the Google Classroom assignment into your Premiere Basics folder." is shown for Missions 3 to 9. It is left off Mission 0 (the folder comes from the class Google Drive) and Missions 1 and 2 (they show the hint about the Mission 0 folder instead).
- **Launch check and Remix order.** On the home screen the Launch check comes right after Mission 9, and the Remix Challenge comes last.

**Wording written by Claude, for Tom to confirm**

- The Remix Show Me items (the paper guide has none).
- The generic Check prompt, shown when a step has no Check line: "Look at your screen. Does it match the step?"
- The "screen does not match" hint, which uses the Back on Track deck's wording: "Press Command + Z to undo, then read the step again."
- All app chrome: button labels, the Save and load screen, the For teachers page, and the teacher explainer and student help in `walshclassroom.json`.

**Other notes**

- Doc 5 ("Premiere Missions 0-2: Card Text Rewrite") holds the paste-ready M0 to M2 card text. Tom pastes it into the master guide and the Classroom cards himself.
- The how-to videos in `v2` were built from the current wording. If a step changes after the MacBook test, regenerate that mission's video from the updated step data.
- The Fix-It "media offline" row uses the safer wording from the Back on Track deck, not the "Link Media" fix from the paper guide.
- The Launch check no longer names a next project (the paper guide named a project that Tom replaced).
- Source of truth (decided): the paper guide is the master, the Classroom cards are copies, and `missions.js` is derived. Until Tom pastes the rewrites into the guide, `missions.js` is ahead of it. See `SYNC.md`.
- The amber `#F2A93B` passes contrast on the hub card: the hub puts near-black text on the color block, which is about 9.9 to 1.
- No line is shown under the videos (Tom's choice, 11/12).

## Choices from the build brief (section 12)

All defaults, confirmed by Tom on 2026-11-12: the name and URL, amber `#F2A93B`, publish hidden first, the optional last-name field (local only), the Save and Load progress code, no line under the videos, and Claude's Remix Show Me items (marked above for review).
