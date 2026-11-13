# Keeping the app in sync with Tom's documents

**The master is Tom's paper guide** (the Google Doc). The per-mission Classroom cards are copies of it.
`missions.js` in this app is derived from the guide. Tom does not edit `missions.js` by hand.

## Right now
`missions.js` is AHEAD of the guide. The 11/9 rewrite (M3 to M9) and the 11/12 rewrite (M0 to M2) are in the app,
but Tom has not pasted them into the master guide yet. Until he does, the guide and the app will not match.
The paste-ready text is in the Claude doc "Premiere Missions 0-2: Card Text Rewrite" and the doc of M3 to M9 rewrites.

## When Tom changes the guide or a card
1. Tom says what changed, or pastes the new text.
2. A Claude session compares the new text with `missions.js` and changes only the strings that differ.
   Do not reword anything. Keep step numbers, `ways`, `writeIn` ids, and Check lines exactly as Tom wrote them.
3. If a step was added, removed or split, update the step count in the mission's `sections`, and check
   the saved-progress warning ("This mission was updated...") still triggers.
4. Update `meta.syncedWithDocs` with the date and what was compared.
5. If a step that a how-to video shows has changed, regenerate that mission's video from the updated step data.
   The videos are in `Premiere How-To Videos v2\` and are built from the same step data.
