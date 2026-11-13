/*
  Premiere Basics Missions: the content for the app.
  This file is DERIVED from the master mission guide (the Google Doc).
  To change wording, change the guide, then follow SYNC.md.
  The app reads window.PB_MISSIONS from here.
*/
window.PB_MISSIONS = {
  "meta": {
    "schema": 1,
    "title": "Premiere Basics: Missions",
    "built": "2026-11-12",
    "class": "Videography (juniors)",
    "syncedWithDocs": "no. This file is AHEAD of the master guide for M0 to M9 until Tom pastes the 11/9 and 11/12 rewrites into it. The guide is the master (Tom, 2026-11-12). See SYNC.md.",
    "sourceNotes": [
      "M0 to M2: rewritten 11/12 in the M3 to M9 style (wordingStatus rewritten-2026-11-12-draft). The Check lines are new and untested. Pending Tom's review and paste into the master guide.",
      "M3 to M9: rewritten text from the 11/9 card rewrite doc (wordingStatus rewritten-2026-11-09). The rewrites changed some Premiere steps (M3 step 17, M4 steps 5 and 10, M6 step 17, M8 steps 3 to 8). They have NOT been tested on a school MacBook.",
      "Teacher-only notes from the rewrite doc are deliberately left out. This file ships to a public site.",
      "Remix Show Me items were written by Claude from the Remix steps."
    ]
  },
  "howToUse": "Do one step at a time. After each step, look at your screen and find the Check line. If your screen does not match, press Command + Z and read the step again. Premiere often lets you do the same job more than one way. When a step says Way A and Way B, pick ONE.",
  "howThisWorks": [
    "Do the missions in order. Missions 0 to 9 are required. The Remix Challenge is for when you finish early.",
    "After each mission, get initials. Raise your hand or put your flag up. Mr. Walsh will check your timeline and initial your mission card. Your initials on the card are the official record.",
    "Missions 0 to 4 use Premiere Practice Clips. Missions 5 to 9 use Premiere Practice Clips 2. Download each mission's files from its Google Classroom assignment. Do not search the internet for clips yet.",
    "Missions 0 to 9 each have a Stuck? Watch this video. It is about 35 to 55 seconds, has captions, and no sound. Pause it any time.",
    "Your way, your choice. Read the steps, watch a quick demo at the front when Mr. Walsh offers one, or ask a partner. Pick whatever works for you."
  ],
  "stuckOrder": [
    "Undo. Press Command + Z.",
    "Reread the step. Look at the tip underneath it.",
    "Check the Quick Fixes list.",
    "Ask a neighbor for 30 seconds. Do not take over their keyboard. Point and explain.",
    "Put your help flag up and move on to a part you can do. Mr. Walsh will come to you."
  ],
  "careerConnection": {
    "text": "Film and video editors in the United States earned a median of about $75,420 per year in May 2025, according to the Bureau of Labor Statistics. Every one of them started by learning these same moves: trim, split, delete, rearrange, and fix the sound.",
    "sourceName": "U.S. Bureau of Labor Statistics, Occupational Outlook Handbook, Film and Video Editors and Camera Operators",
    "sourceUrl": "https://www.bls.gov/ooh/media-and-communication/film-and-video-editors-and-camera-operators.htm"
  },
  "missions": [
    {
      "id": "m0",
      "number": 0,
      "slug": "setup",
      "title": "Setup",
      "minutes": 5,
      "goal": "Get a project ready so your work saves in the right place.",
      "wordingStatus": "rewritten-2026-11-12-draft",
      "vocabulary": [],
      "clipFolder": "Premiere Practice Clips",
      "files": [
        "The whole Premiere Practice Clips folder (from the class Google Drive)"
      ],
      "sections": [
        {
          "heading": null,
          "steps": [
            {
              "text": "On your MacBook desktop, make a new folder. Name it Premiere Basics - [Your Last Name].",
              "check": "The folder is on your desktop.",
              "n": 1
            },
            {
              "text": "Download the Premiere Practice Clips folder from the class Google Drive.",
              "n": 2
            },
            {
              "text": "Open the Premiere Practice Clips folder. Move everything inside it into your new Premiere Basics folder.",
              "check": "The clips are inside your Premiere Basics folder.",
              "n": 3
            },
            {
              "text": "Open Adobe Premiere Pro. Click New Project.",
              "n": 4
            },
            {
              "text": "Name the project Premiere Basics.",
              "n": 5
            },
            {
              "text": "Under Location, click Browse. Pick your Premiere Basics folder. Click Create.",
              "check": "The Premiere title bar says Premiere Basics.",
              "note": "Saving the project inside your folder keeps your clips and project together. This is how editors avoid \"media offline.\"",
              "n": 6
            },
            {
              "text": "At the top, click Window, then Workspaces, then Editing.",
              "check": "You can see the Project panel, Source Monitor, Program Monitor, and Timeline.",
              "note": "If the panels look messy later, go to Window, Workspaces, then Reset to Saved Layout.",
              "n": 7
            },
            {
              "text": "Press Command + S.",
              "check": "Open your Premiere Basics folder in Finder. The project file is in it.",
              "n": 8
            }
          ]
        }
      ],
      "showMe": {
        "intro": "Point to each one on your screen, then get initials.",
        "items": [
          "Your project is saved inside your folder (point to it in Finder).",
          "You can point to the Project panel, Source Monitor, Program Monitor, and Timeline."
        ]
      },
      "video": {
        "file": "Mission0_Setup.mp4",
        "captions": "Burned in. No sound.",
        "note": null
      }
    },
    {
      "id": "m1",
      "number": 1,
      "slug": "import-trim",
      "title": "Import and Trim",
      "minutes": 8,
      "goal": "Pick the best part of a clip and throw away the rest.",
      "wordingStatus": "rewritten-2026-11-12-draft",
      "vocabulary": [
        {
          "term": "Clip",
          "def": "One piece of video."
        },
        {
          "term": "Timeline",
          "def": "Where you put clips in order."
        },
        {
          "term": "Playhead",
          "def": "The line that shows where you are."
        }
      ],
      "clipFolder": "Premiere Practice Clips",
      "files": [
        "01_Countdown_Trim.mp4"
      ],
      "sections": [
        {
          "heading": null,
          "steps": [
            {
              "text": "Open Premiere. Open your Premiere Basics project.",
              "check": "The title bar says Premiere Basics.",
              "n": 1
            },
            {
              "text": "Double-click the empty Project panel. Pick 01_Countdown_Trim.mp4. Click Import.",
              "check": "The clip appears in the Project panel.",
              "note": "This clip came in the Premiere Practice Clips folder you moved in Mission 0.",
              "n": 2
            },
            {
              "text": "Drag the clip down onto the timeline.",
              "check": "The clip is on the timeline.",
              "note": "If Premiere asks about sequence settings, click Keep Existing Settings or Change Sequence Settings. Either is fine for now.",
              "n": 3
            },
            {
              "text": "Press Space to play it.",
              "check": "The clip counts down from 10 to 1.",
              "n": 4
            },
            {
              "text": "Challenge: make the video start on the number 7 and end on the number 3. That is about 5 seconds. Pick ONE way.",
              "ways": [
                {
                  "label": "A",
                  "text": "Drag: drag the left edge of the clip to the right. Drag the right edge to the left. Use the arrow keys to move one frame at a time."
                },
                {
                  "label": "B",
                  "text": "Razor: press C for the Razor. Click on the timeline where 7 starts and where 3 ends. Press V to go back to the arrow. Click the pieces you do not want and press Shift + Delete."
                },
                {
                  "label": "C",
                  "text": "In and Out: double-click the clip to open it in the Source Monitor. Play to the number 7 and press I. Play to the end of number 3 and press O. Drag the clip to the timeline."
                }
              ],
              "n": 5
            },
            {
              "text": "Press \\ (backslash) to make the timeline fit your window.",
              "check": "Your clip is about 5 seconds long, with no empty space before or after it.",
              "n": 6
            },
            {
              "text": "Press Command + S.",
              "n": 7
            }
          ]
        }
      ],
      "showMe": {
        "intro": "Point to each one on your screen, then get initials.",
        "items": [
          "Your clip starts on 7 and ends on 3.",
          "There is no empty space before or after it."
        ]
      },
      "video": {
        "file": "Mission1_Trim.mp4",
        "captions": "Burned in. No sound.",
        "note": null
      },
      "filesHint": "This clip came in the Premiere Practice Clips folder you moved in Mission 0."
    },
    {
      "id": "m2",
      "number": 2,
      "slug": "cut-rearrange",
      "title": "Cut and Rearrange",
      "minutes": 12,
      "goal": "Split a clip into pieces, remove one, close the gap, and change the order.",
      "wordingStatus": "rewritten-2026-11-12-draft",
      "vocabulary": [
        {
          "term": "Ripple delete",
          "def": "Removes a piece and pulls everything after it forward so no gap is left."
        }
      ],
      "clipFolder": "Premiere Practice Clips",
      "files": [
        "02_ColorBlocks_CutDrill.mp4"
      ],
      "sections": [
        {
          "heading": null,
          "steps": [
            {
              "text": "Open Premiere. Open your Premiere Basics project.",
              "check": "The title bar says Premiere Basics.",
              "n": 1
            },
            {
              "text": "Double-click the empty Project panel. Pick 02_ColorBlocks_CutDrill.mp4. Click Import.",
              "note": "It has six color blocks that last 2 seconds each.",
              "n": 2
            },
            {
              "text": "Right-click the clip in the Project panel. Pick New Sequence From Clip.",
              "note": "This makes a timeline that matches the clip.",
              "n": 3
            },
            {
              "text": "Click the time number at the bottom left of the timeline. It says 00:00:00:00. Type 200. Press Enter.",
              "check": "The playhead jumps to 2 seconds.",
              "n": 4
            },
            {
              "text": "Press Command + K.",
              "check": "There is a cut at 2 seconds.",
              "note": "Command + K cuts every clip on the tracks the playhead touches. It does the same thing as the Razor.",
              "n": 5
            },
            {
              "text": "Click the time number again. Type 400. Press Enter. Press Command + K. Do the same for 600, 800, and 1000.",
              "check": "You have six pieces.",
              "n": 6
            },
            {
              "text": "Click the GREEN piece. Press Shift + Delete.",
              "check": "GREEN is gone and the gap closes.",
              "n": 7
            },
            {
              "text": "Click the BLUE piece. Press Command + C.",
              "n": 8
            },
            {
              "text": "Press Shift + Delete.",
              "check": "BLUE is gone and the gap closes.",
              "n": 9
            },
            {
              "text": "Press Home. Press Shift + Command + V.",
              "check": "BLUE is at the start and the other pieces moved over.",
              "note": "Shift + Command + V is Paste Insert. It pushes clips over. Regular paste covers them up. If something got overwritten, press Command + Z and try again.",
              "n": 10
            },
            {
              "text": "Press Space to play it from the start.",
              "check": "The order is Blue, Red, Orange, Yellow, Purple, with no gaps.",
              "n": 11
            },
            {
              "text": "Press Command + S.",
              "n": 12
            }
          ]
        }
      ],
      "showMe": {
        "intro": "Point to each one on your screen, then get initials.",
        "items": [
          "The sequence is about 10 seconds long.",
          "The order is Blue, Red, Orange, Yellow, Purple.",
          "There are no gaps between pieces."
        ]
      },
      "video": {
        "file": "Mission2_CutRearrange.mp4",
        "captions": "Burned in. No sound.",
        "note": null
      },
      "filesHint": "This clip came in the Premiere Practice Clips folder you moved in Mission 0."
    },
    {
      "id": "m3",
      "number": 3,
      "slug": "sound",
      "title": "Sound",
      "minutes": 15,
      "goal": "Make everything in your video the same loudness, then add music and a sound effect.",
      "wordingStatus": "rewritten-2026-11-09",
      "vocabulary": [
        {
          "term": "Gain",
          "def": "How loud a clip is."
        },
        {
          "term": "dB (decibels)",
          "def": "How we measure how loud a sound is."
        },
        {
          "term": "Fade",
          "def": "Makes sound slowly start or stop."
        }
      ],
      "clipFolder": "Premiere Practice Clips",
      "files": [
        "03_AudioLevels_Practice.mp4",
        "Music_Calm_30s.wav",
        "SFX_Whoosh.wav"
      ],
      "sections": [
        {
          "heading": null,
          "steps": [
            {
              "text": "Download the 3 files attached to this assignment: 03_AudioLevels_Practice.mp4, Music_Calm_30s.wav, and SFX_Whoosh.wav. Move them into your Premiere Basics folder.",
              "check": "All 3 files are inside your Premiere Basics folder.",
              "n": 1
            },
            {
              "text": "Open Premiere. Open your Premiere Basics project.",
              "check": "The title bar says Premiere Basics.",
              "n": 2
            },
            {
              "text": "Double-click the empty Project panel. Pick 03_AudioLevels_Practice.mp4. Click Import.",
              "n": 3
            },
            {
              "text": "Right-click the clip in the Project panel. Pick New Sequence From Clip.",
              "n": 4
            },
            {
              "text": "Turn your computer volume down. One part of this clip is loud.",
              "n": 5
            },
            {
              "text": "Press Space to play the clip. Watch the green and yellow audio meters on the right. The video says QUIET, OK, and LOUD.",
              "check": "The meters move while the clip plays.",
              "n": 6
            },
            {
              "text": "Click the time number at the bottom left of the timeline. Type 400. Press Enter. Press Command + K.",
              "check": "The clip is cut at 4 seconds.",
              "n": 7
            },
            {
              "text": "Click the time number again. Type 800. Press Enter. Press Command + K.",
              "check": "You have three pieces.",
              "n": 8
            },
            {
              "text": "Click the QUIET piece. Press G. Pick Adjust Gain by. Type +20. Click OK.",
              "n": 9
            },
            {
              "text": "Click the LOUD piece. Press G. Pick Adjust Gain by. Type -4. Click OK.",
              "n": 10
            },
            {
              "text": "Press Home. Press Space to play it again.",
              "check": "All three parts sound close to the same, and the meters stay in the green and yellow, never red.",
              "note": "These numbers are starting points. If a part is still too quiet or too loud, click it, press G, and try a different number.",
              "n": 11
            },
            {
              "text": "Import Music_Calm_30s.wav the same way you imported the video.",
              "n": 12
            },
            {
              "text": "Drag Music_Calm_30s.wav to Audio track 2, below your video's audio. Line up its start with the start of the video.",
              "n": 13
            },
            {
              "text": "Click the music clip. Press G. Pick Adjust Gain by. Type -18. Click OK.",
              "check": "The music sits quietly under the sound.",
              "n": 14
            },
            {
              "text": "Make the music end when the video ends. Pick ONE way.",
              "ways": [
                {
                  "label": "A",
                  "text": "Drag the right edge of the music clip left until it lines up with the end of your video."
                },
                {
                  "label": "B",
                  "text": "Move the playhead to the end of your video, click the music clip, press Command + K, click the extra piece of music, and press Delete."
                }
              ],
              "n": 15
            },
            {
              "text": "Make the music fade. Drag the little white square at the start of the music up. Do the same with the little white square at the end.",
              "note": "If you cannot find the squares, zoom in on the timeline with the + key, or ask for help.",
              "n": 16
            },
            {
              "text": "Import SFX_Whoosh.wav. Drag it to an empty audio track below your music. Line up its start with the cut between the QUIET piece and the OK piece.",
              "n": 17
            },
            {
              "text": "Press Command + S.",
              "n": 18
            }
          ]
        }
      ],
      "showMe": {
        "intro": "Point to each one on your screen, then get initials.",
        "items": [
          "You play all three parts and they sound close in loudness.",
          "The music plays quietly under the sound and fades out.",
          "The whoosh starts at the cut.",
          "The meters never turn red."
        ]
      },
      "video": {
        "file": "Mission3_Sound.mp4",
        "captions": "Burned in. No sound.",
        "note": null
      }
    },
    {
      "id": "m4",
      "number": 4,
      "slug": "story-cut",
      "title": "Story Cut",
      "minutes": 20,
      "goal": "Use everything you have learned to tell a story, then tell a different one with the same clips.",
      "wordingStatus": "rewritten-2026-11-09",
      "vocabulary": [],
      "clipFolder": "Premiere Practice Clips",
      "files": [
        "SameShots_A_Face.mp4",
        "SameShots_B_Cake.mp4",
        "SameShots_C_BenchRain.mp4",
        "SameShots_D_Keys.mp4",
        "SameShots_E_Phone.mp4",
        "SameShots_F_Door.mp4",
        "Music_Calm_30s.wav",
        "Music_Tense_30s.wav",
        "SFX_Hit.wav",
        "SFX_Knock.wav"
      ],
      "sections": [
        {
          "heading": null,
          "steps": [
            {
              "text": "Download all 10 files attached to this assignment: the six SameShots clips (A to F) and four sounds (Music_Calm_30s.wav, Music_Tense_30s.wav, SFX_Hit.wav, SFX_Knock.wav). Move them into your Premiere Basics folder.",
              "check": "10 files are inside your Premiere Basics folder.",
              "n": 1
            },
            {
              "text": "Open Premiere. Open your Premiere Basics project.",
              "check": "The title bar says Premiere Basics.",
              "n": 2
            },
            {
              "text": "Import all six SameShots clips (A to F).",
              "note": "Each clip is 6 seconds long. You can use them in any order.",
              "n": 3
            },
            {
              "text": "Import the four sound files.",
              "n": 4
            },
            {
              "text": "Right-click the clip you want to use first. Pick New Sequence From Clip.",
              "n": 5
            },
            {
              "text": "Drag more SameShots clips onto the timeline, one after another, until you have 4 to 6 clips.",
              "n": 6
            },
            {
              "text": "Trim each clip to a different length between 1 and 4 seconds. Pick ONE way for each trim. You learned three ways in Mission 1, and you can use a different way on each clip.",
              "check": "There are no gaps between clips. If a trim left a gap, click the gap and press Shift + Delete.",
              "ways": [
                {
                  "label": "A",
                  "text": "Drag the left or right edge of the clip."
                },
                {
                  "label": "B",
                  "text": "Press C for the Razor, click where you want to cut, press V, click the piece you do not want, and press Shift + Delete."
                },
                {
                  "label": "C",
                  "text": "Double-click the clip in the Project panel, press I and O to mark the part you want, and drag it to the timeline."
                }
              ],
              "n": 7
            },
            {
              "text": "Add one sound that helps tell the story: Music_Calm_30s.wav, Music_Tense_30s.wav, SFX_Hit.wav, or SFX_Knock.wav. Drag it to an audio track below your video.",
              "n": 8
            },
            {
              "text": "Move that sound so it lines up with a cut.",
              "n": 9
            },
            {
              "text": "Right-click your sequence in the Project panel. Pick Rename. Type Version A.",
              "n": 10
            },
            {
              "text": "Right-click Version A. Pick Duplicate.",
              "n": 11
            },
            {
              "text": "Right-click the copy. Pick Rename. Type Version B.",
              "n": 12
            },
            {
              "text": "Double-click Version B to open it. Change the order of the clips and change the music or sound so the story is different. Use the same shots.",
              "note": "Hint: the first shot and the last shot change the meaning the most.",
              "n": 13
            },
            {
              "text": "Click Version A in the Project panel. Press Command + M.",
              "n": 14
            },
            {
              "text": "Set Format to H.264. Pick a preset that starts with Match Source.",
              "n": 15
            },
            {
              "text": "Click the file name. Type VersionA_[YourLastName]. Save it in your Premiere Basics folder. Click Export.",
              "check": "After the export finishes, the file is in your Premiere Basics folder.",
              "n": 16
            },
            {
              "text": "Fill in the Story Card below.",
              "writeIn": "storycard",
              "n": 17
            }
          ]
        }
      ],
      "showMe": {
        "intro": "Point to each one on your screen, then get initials.",
        "items": [
          "Version A and Version B use the same shots but tell different stories.",
          "At least one sound lines up with a cut.",
          "Your VersionA file is in your folder (point to it in Finder).",
          "Your Story Card is finished."
        ]
      },
      "video": {
        "file": "Mission4_StoryCut.mp4",
        "captions": "Burned in. No sound.",
        "note": null
      },
      "writeIns": [
        {
          "id": "storycard",
          "kind": "lines",
          "title": "Story Card",
          "prompts": [
            "Version A is a story about:",
            "Version B is a story about:",
            "The one change that mattered most was:"
          ]
        }
      ]
    },
    {
      "id": "m5",
      "number": 5,
      "slug": "settings-export",
      "title": "Settings, Import and Export",
      "minutes": 20,
      "goal": "Learn why project and sequence settings matter, keep your clips organized, and export one video three different ways.",
      "wordingStatus": "rewritten-2026-11-09",
      "vocabulary": [
        {
          "term": "Resolution",
          "def": "How many pixels wide and tall the picture is, like 1920 x 1080."
        },
        {
          "term": "Frame rate",
          "def": "How many pictures per second (fps)."
        },
        {
          "term": "Aspect ratio",
          "def": "The shape of the picture."
        },
        {
          "term": "Bitrate",
          "def": "How much data each second of video gets. More data means a bigger file."
        }
      ],
      "clipFolder": "Premiere Practice Clips 2",
      "files": [
        "Settings_24fps_1920x1080.mp4",
        "Settings_Vertical_1080x1920_30fps.mp4",
        "Settings_60fps_1280x720.mp4"
      ],
      "sections": [
        {
          "heading": null,
          "steps": [
            {
              "text": "Download the 3 files attached to this assignment: Settings_24fps_1920x1080.mp4, Settings_Vertical_1080x1920_30fps.mp4, and Settings_60fps_1280x720.mp4. Move them into your Premiere Basics folder.",
              "n": 1
            },
            {
              "text": "Open Premiere. Open your Premiere Basics project.",
              "n": 2
            },
            {
              "text": "Import the three clips that start with Settings_. Pick ONE way. Pick the three clips and click Open.",
              "ways": [
                {
                  "label": "A",
                  "text": "Press Command + I."
                },
                {
                  "label": "B",
                  "text": "Click File, then Import."
                }
              ],
              "n": 3
            },
            {
              "text": "Right-click Settings_24fps_1920x1080 in the Project panel. Pick Properties. Find the image size and the frame rate. Write them in Table 1. Do the same for the other two clips.",
              "writeIn": "t1",
              "n": 4
            },
            {
              "text": "Right-click Settings_24fps_1920x1080. Pick New Sequence From Clip.",
              "n": 5
            },
            {
              "text": "Click Sequence in the menu at the top. Pick Sequence Settings. Write the frame size and frame rate in Table 2. Click OK.",
              "writeIn": "t2",
              "n": 6
            },
            {
              "text": "Drag Settings_Vertical_1080x1920_30fps onto the timeline, after the first clip. If Premiere asks about a mismatch, click Keep Existing Settings.",
              "n": 7
            },
            {
              "text": "Press Space to play it. Look at the Program Monitor. Write one sentence: what does a tall phone video look like on a wide screen?",
              "writeIn": "s1",
              "n": 8
            },
            {
              "text": "Right-click the vertical clip on the timeline. Pick Set to Frame Size.",
              "check": "The picture changes size. Write down: did it get bigger, smaller, or get black bars?",
              "writeIn": "s2",
              "n": 9
            },
            {
              "text": "Drag Settings_60fps_1280x720 onto the timeline after the other clips. Press Space to play it.",
              "note": "Premiere plays it even though the size and frame rate are different. The timeline settings are the boss, and Premiere converts the clips to match.",
              "n": 10
            },
            {
              "text": "Right-click an empty spot in the Project panel. Pick New Bin. Name it Settings Clips. Drag your three clips into the bin.",
              "note": "Bins keep big projects from turning into a mess.",
              "n": 11
            },
            {
              "text": "Click your timeline. Press Command + M.",
              "n": 12
            },
            {
              "text": "Set Format to H.264. Pick a preset that starts with Match Source.",
              "n": 13
            },
            {
              "text": "Click the file name. Type Export1_MatchSource_[YourLastName]. Save it in your Premiere Basics folder. Click Export. Wait for it to finish.",
              "n": 14
            },
            {
              "text": "Press Command + M again. Pick the preset YouTube 1080p Full HD. Name it Export2_YouTube_[YourLastName]. Save it in your Premiere Basics folder. Click Export.",
              "n": 15
            },
            {
              "text": "Press Command + M again. Go back to the Match Source preset. Click the Video tab. Find Target Bitrate and lower it to about 2. Name it Export3_LowBitrate_[YourLastName]. Save it in your Premiere Basics folder. Click Export.",
              "note": "If Target Bitrate is gray and will not change, ask for help. Mr. Walsh will show you the setting that unlocks it.",
              "n": 16
            },
            {
              "text": "Switch to Finder, not Premiere. Click each export file. Press Command + I to see its file size. Write the sizes in Table 3.",
              "note": "Command + I means Import in Premiere, but it means Get Info in Finder.",
              "writeIn": "t3",
              "n": 17
            },
            {
              "text": "Switch back to Premiere. Press Command + S.",
              "note": "Preset names change a little between Premiere versions. If you cannot find one, pick any H.264 preset and ask for help.",
              "n": 18
            }
          ]
        }
      ],
      "showMe": {
        "intro": "Point to each one on your screen, then get initials.",
        "items": [
          "Table 1 and Table 2 are filled in.",
          "Your three Settings clips are in a bin (point to it).",
          "You exported three files and can point to all three in Finder.",
          "You can say in your own words what resolution and frame rate mean."
        ]
      },
      "video": {
        "file": "Mission5_SettingsExport.mp4",
        "captions": "Burned in. No sound.",
        "note": null
      },
      "writeIns": [
        {
          "id": "t1",
          "kind": "table",
          "title": "Table 1: What are my clips?",
          "columns": [
            "Clip",
            "Image size (pixels)",
            "Frame rate",
            "Wide or tall?"
          ],
          "rows": [
            "Settings_24fps_1920x1080",
            "Settings_Vertical_1080x1920_30fps",
            "Settings_60fps_1280x720"
          ]
        },
        {
          "id": "t2",
          "kind": "table",
          "title": "Table 2: What does my sequence use?",
          "columns": [
            "Sequence",
            "Frame size",
            "Frame rate"
          ],
          "rows": [
            "My sequence (from the 24 fps clip)"
          ]
        },
        {
          "id": "t3",
          "kind": "table",
          "title": "Table 3: Which file is which?",
          "columns": [
            "Export",
            "Preset or setting",
            "File size",
            "Looks OK?"
          ],
          "rows": [
            "Export1_MatchSource",
            "Export2_YouTube",
            "Export3_LowBitrate"
          ]
        },
        {
          "id": "s1",
          "kind": "lines",
          "title": "Tall video on a wide screen",
          "prompts": [
            "What does a tall phone video look like on a wide screen?"
          ]
        },
        {
          "id": "s2",
          "kind": "lines",
          "title": "Set to Frame Size",
          "prompts": [
            "Did the vertical clip get bigger, smaller, or get black bars?"
          ]
        }
      ],
      "career": "Editors get footage from phones, drones, and cameras that all use different settings. Checking the size and frame rate first is one of the first things a good assistant editor does."
    },
    {
      "id": "m6",
      "number": 6,
      "slug": "types-of-cuts",
      "title": "Types of Cuts",
      "minutes": 20,
      "goal": "Name six kinds of cuts, then build four of them from a paper-plane scene.",
      "wordingStatus": "rewritten-2026-11-09",
      "vocabulary": [
        {
          "term": "Straight cut",
          "def": "One shot ends and the next starts, with no effect."
        },
        {
          "term": "Cut-in",
          "def": "A cut from a wide shot to a closer shot of the same thing."
        },
        {
          "term": "Match on action",
          "def": "Cutting in the middle of a movement so it feels smooth."
        },
        {
          "term": "Cutaway",
          "def": "Cutting to something else for a moment, then coming back."
        },
        {
          "term": "Jump cut",
          "def": "A cut inside one long shot that makes the person seem to jump."
        },
        {
          "term": "Match cut",
          "def": "A cut between two different things that have the same shape or movement."
        }
      ],
      "clipFolder": "Premiere Practice Clips 2",
      "files": [
        "CT_01_Wide.mp4",
        "CT_02_Medium.mp4",
        "CT_03_CloseUp_Hands.mp4",
        "CT_04_Face_CloseUp.mp4",
        "CT_05_Throw_Wide.mp4",
        "CT_06_Cutaway_Window.mp4",
        "CT_07_MatchCut_A_Propeller.mp4",
        "CT_08_MatchCut_B_Fan.mp4",
        "CT_09_JumpCut_LongTake.mp4"
      ],
      "sections": [
        {
          "heading": null,
          "steps": [
            {
              "text": "Download the 9 files attached to this assignment (the ones that start with CT_). Move them into your Premiere Basics folder.",
              "n": 1
            },
            {
              "text": "Open Premiere. Open your Premiere Basics project. Import all nine clips that start with CT_.",
              "n": 2
            },
            {
              "text": "Right-click an empty spot in the Project panel. Pick New Bin. Name it Cut Types. Drag the nine clips into the bin.",
              "n": 3
            }
          ]
        },
        {
          "heading": "Part A: Cut-in and match on action",
          "steps": [
            {
              "text": "Double-click CT_01_Wide. Press Space to watch it. Do the same with CT_02_Medium and CT_03_CloseUp_Hands.",
              "note": "They show the same 8 seconds of Sam folding a paper plane from three camera views.",
              "n": 4
            },
            {
              "text": "Right-click CT_01_Wide in the Project panel. Pick New Sequence From Clip.",
              "n": 5
            },
            {
              "text": "Click the time number at the bottom left of the timeline. Type 200. Press Enter. Press Command + K.",
              "n": 6
            },
            {
              "text": "Click the piece to the right of the playhead. Press Shift + Delete.",
              "check": "You have 2 seconds of the wide shot.",
              "n": 7
            },
            {
              "text": "Double-click CT_02_Medium to open it in the Source Monitor. Click its time number. Type 200. Press Enter. Press I. Click the time number again. Type 400. Press Enter. Press O.",
              "n": 8
            },
            {
              "text": "Drag the picture from the Source Monitor to the end of your timeline.",
              "n": 9
            },
            {
              "text": "Double-click CT_03_CloseUp_Hands. Mark In at 400 and Out at 600 the same way. Drag the picture to the end of your timeline.",
              "n": 10
            },
            {
              "text": "Press Home. Press Space to play the whole thing.",
              "check": "The folding never jumps. You just made a cut-in with a match on action. Each clip starts where the last one ended. That is what keeps the action smooth.",
              "n": 11
            }
          ]
        },
        {
          "heading": "Part B: Cutaway",
          "steps": [
            {
              "text": "Double-click CT_06_Cutaway_Window to open it in the Source Monitor. Click the time number. Type 200. Press Enter. Press O.",
              "n": 12
            },
            {
              "text": "Put the cutaway between the medium shot and the close-up. Pick ONE way.",
              "note": "Both ways push the clips over instead of covering them up. If something got covered up, press Command + Z and try again.",
              "ways": [
                {
                  "label": "A",
                  "text": "Hold Command and drag the picture from the Source Monitor onto the edit between the medium shot and the close-up."
                },
                {
                  "label": "B",
                  "text": "Click the timeline, put the playhead on that edit, and press the comma key (insert)."
                }
              ],
              "n": 13
            },
            {
              "text": "Press Space to play it.",
              "check": "Sam disappears for 2 seconds, then comes back with the paper more folded. That is a cutaway.",
              "n": 14
            }
          ]
        },
        {
          "heading": "Part C: Jump cut",
          "steps": [
            {
              "text": "Right-click CT_09_JumpCut_LongTake. Pick New Sequence From Clip. Press Space to play it.",
              "note": "Sam says \"um\" and \"uh\" and pauses a lot.",
              "n": 15
            },
            {
              "text": "Drag the line under the A1 label downward.",
              "check": "The audio track gets taller and you can see the sound wave. The flat spots are silence.",
              "n": 16
            },
            {
              "text": "Cut out each \"um,\" \"uh,\" and long pause. For each one: click the ruler at the start of it, press Command + K, click the ruler at the end of it, press Command + K, click the unwanted piece, and press Shift + Delete.",
              "note": "Keep a tiny pause (about a quarter of a second) between sentences so it still sounds like a person.",
              "n": 17
            },
            {
              "text": "Press Home. Press Space to play it.",
              "check": "Sam seems to jump a little at each cut. That is a jump cut. Editors use them on purpose to cut out dead air. Your finished video should be about 12 to 15 seconds.",
              "n": 18
            }
          ]
        },
        {
          "heading": "Part D: Match cut",
          "steps": [
            {
              "text": "Right-click CT_07_MatchCut_A_Propeller. Pick New Sequence From Clip. Click the time number. Type 200. Press Enter. Press Command + K. Click the right piece and press Shift + Delete.",
              "n": 19
            },
            {
              "text": "Double-click CT_08_MatchCut_B_Fan. Mark In at 200 and Out at 400. Drag the picture to the end of the timeline.",
              "check": "The blades line up and the plane turns into a ceiling fan. That is a match cut. Both clips were made to spin at the same speed from the same starting point, so the same time number lines up.",
              "n": 20
            },
            {
              "text": "Press Command + S.",
              "note": "Everything else you cut today with no effect was a straight cut, the most common cut in movies.",
              "n": 21
            }
          ]
        }
      ],
      "showMe": {
        "intro": "Point to each one on your screen, then get initials.",
        "items": [
          "Wide, medium, and close-up play with no jump in the action.",
          "The window cutaway sits in the middle.",
          "Your jump cut has no \"ums\" and is about 12 to 15 seconds.",
          "The propeller blades line up with the fan blades.",
          "Your Cut Card is finished."
        ]
      },
      "video": {
        "file": "Mission6_CutTypes.mp4",
        "captions": "Burned in. No sound.",
        "note": null
      },
      "intro": "This card teaches two ways to trim. Part A, Step 7 trims with cut and delete (Command + K, then Shift + Delete). Part A, Step 8 trims with In and Out marks in the Source Monitor. Both are real ways to trim. You will use both.",
      "writeIns": [
        {
          "id": "cutcard",
          "kind": "table",
          "title": "Cut Card: finish each sentence",
          "columns": [
            "Cut",
            "An editor would use this when..."
          ],
          "rows": [
            "Straight cut",
            "Cut-in",
            "Cutaway",
            "Jump cut",
            "Match cut"
          ]
        }
      ],
      "career": "Vloggers, YouTubers, and news editors all use jump cuts to cut dead air. Film editors save match cuts for big moments. Knowing the names helps you talk with a team about an edit."
    },
    {
      "id": "m7",
      "number": 7,
      "slug": "j-l-cuts",
      "title": "J-Cuts and L-Cuts",
      "minutes": 25,
      "goal": "Make the sound and the picture change at different times so your edits feel smooth.",
      "wordingStatus": "rewritten-2026-11-09",
      "vocabulary": [
        {
          "term": "A-roll",
          "def": "Your main footage, like a person talking."
        },
        {
          "term": "B-roll",
          "def": "Extra footage you show while the A-roll sound keeps going."
        },
        {
          "term": "L-cut",
          "def": "You see the next shot while you still hear the last one."
        },
        {
          "term": "J-cut",
          "def": "You hear the next shot before you see it. On the timeline, the picture and sound edges make the shape of the letters J and L."
        }
      ],
      "clipFolder": "Premiere Practice Clips 2",
      "files": [
        "JL_ARoll_Interview.mp4",
        "JL_BRoll_Folding.mp4",
        "JL_BRoll_Flight.mp4"
      ],
      "sections": [
        {
          "heading": null,
          "steps": [
            {
              "text": "Download the 3 files attached to this assignment: JL_ARoll_Interview.mp4, JL_BRoll_Folding.mp4, and JL_BRoll_Flight.mp4. Move them into your Premiere Basics folder.",
              "n": 1
            },
            {
              "text": "Open Premiere. Open your Premiere Basics project. Import all three clips.",
              "n": 2
            },
            {
              "text": "Right-click JL_ARoll_Interview. Pick New Sequence From Clip.",
              "n": 3
            },
            {
              "text": "Press Space to play the clip from the start. Sam talks for about 21 seconds. Listen for the line \"The trick is the wings.\"",
              "n": 4
            },
            {
              "text": "Press Home. Press Space to play. Press Space again to stop in the quiet gap right after Sam says \"The trick is the wings.\" That is about 8.5 seconds.",
              "n": 5
            },
            {
              "text": "Press Command + K.",
              "check": "You have two pieces, Sam Part 1 and Sam Part 2.",
              "n": 6
            },
            {
              "text": "Double-click JL_BRoll_Folding to open it in the Source Monitor. Click the time number. Type 200. Press Enter. Press I. Click the time number again. Type 600. Press Enter. Press O.",
              "note": "That marks 4 seconds and leaves extra footage on both sides. You need that extra footage later.",
              "n": 7
            },
            {
              "text": "Click the timeline. Put the playhead on your cut, between Sam Part 1 and Sam Part 2. Add the folding clip. Pick ONE way.",
              "check": "The folding clip lands between the two Sam pieces and pushes Part 2 over.",
              "ways": [
                {
                  "label": "A",
                  "text": "Click the Insert button under the Source Monitor."
                },
                {
                  "label": "B",
                  "text": "Press the comma key."
                }
              ],
              "n": 8
            },
            {
              "text": "Press Space to play it.",
              "note": "It works, but every cut is a straight cut and it feels stiff.",
              "n": 9
            },
            {
              "text": "Click the timeline. Press Command + A to select everything. Right-click one clip. Pick Unlink.",
              "note": "Now the picture and the sound can move separately. If the audio moves when you drag the video later, the clips are still linked. Right-click and pick Unlink.",
              "n": 10
            },
            {
              "text": "L-cut. Press N for the Rolling Edit tool. On the video track (V1), grab the edit between Sam Part 1 and the hands. Drag it left about 1 second. Press Space to play it.",
              "check": "You see the hands while Sam is still finishing his sentence. That is an L-cut.",
              "n": 11
            },
            {
              "text": "J-cut. Keep the Rolling Edit tool. On the video track, grab the edit between the hands and Sam Part 2. Drag it right about 1 second. Press Space to play it.",
              "check": "You hear Sam start talking before you see him again. That is a J-cut.",
              "note": "Rolling edits need extra footage past the edit. That is why you marked 2:00 to 6:00 on the folding clip. If it will not drag, press Command + Z and mark smaller pieces.",
              "n": 12
            },
            {
              "text": "Press V to go back to the arrow. Click the folding clip's audio. Press G. Pick Adjust Gain by. Type -10. Click OK.",
              "check": "Sam stays easy to hear.",
              "n": 13
            },
            {
              "text": "Cutaway. Drag JL_BRoll_Flight onto V2, above Sam, at the spot where he says \"My record is forty feet.\" Drag its right edge so it lasts about 3 seconds.",
              "n": 14
            },
            {
              "text": "Click the M button on A2 to mute the flight sound.",
              "check": "Sam keeps talking while the plane flies.",
              "n": 15
            },
            {
              "text": "Press Home. Press Space to play from the start. Listen for pops or gaps in the sound. Press Command + S.",
              "n": 16
            }
          ]
        }
      ],
      "showMe": {
        "intro": "Point to each one on your screen, then get initials.",
        "items": [
          "You see the hands before Sam finishes his sentence (L-cut).",
          "You hear Sam before you see him again (J-cut).",
          "The flight clip covers Sam while his voice keeps going (cutaway).",
          "There are no pops or gaps in the sound."
        ]
      },
      "video": {
        "file": "Mission7_JandLCuts.mp4",
        "captions": "Burned in. No sound.",
        "note": null
      },
      "career": "Editors use J-cuts and L-cuts in almost every interview, news story, and movie conversation. They are a big reason professional edits feel smooth and student edits feel choppy."
    },
    {
      "id": "m8",
      "number": 8,
      "slug": "transitions-speed",
      "title": "Transitions and Speed",
      "minutes": 20,
      "goal": "Use a dissolve and a dip to black on purpose, and speed up and slow down a clip.",
      "wordingStatus": "rewritten-2026-11-09",
      "vocabulary": [
        {
          "term": "Transition",
          "def": "An effect between two clips."
        },
        {
          "term": "Cross dissolve",
          "def": "Fades one shot into the next."
        },
        {
          "term": "Dip to black",
          "def": "Fades to black and then to the next shot."
        },
        {
          "term": "Speed",
          "def": "How fast a clip plays: 100% is normal, 50% is slow motion, 200% is double speed."
        },
        {
          "term": "Time-lapse",
          "def": "A clip sped up so time seems to rush by."
        }
      ],
      "clipFolder": "Premiere Practice Clips and Premiere Practice Clips 2",
      "files": [
        "SameShots_A_Face.mp4",
        "SameShots_C_BenchRain.mp4",
        "SameShots_F_Door.mp4",
        "CT_03_CloseUp_Hands.mp4",
        "CT_05_Throw_Wide.mp4"
      ],
      "sections": [
        {
          "heading": null,
          "steps": [
            {
              "text": "Download the 5 files attached to this assignment: SameShots_A_Face.mp4, SameShots_C_BenchRain.mp4, SameShots_F_Door.mp4, CT_03_CloseUp_Hands.mp4, and CT_05_Throw_Wide.mp4. Move them into your Premiere Basics folder.",
              "n": 1
            },
            {
              "text": "Open Premiere. Open your Premiere Basics project. Import all five clips.",
              "n": 2
            }
          ]
        },
        {
          "heading": "Part A: Transitions",
          "steps": [
            {
              "text": "Right-click SameShots_A_Face. Pick New Sequence From Clip.",
              "n": 3
            },
            {
              "text": "Keep only seconds 1 to 4 of this clip. Click the time number at the bottom left of the timeline. Type 100. Press Enter. Press Command + K. Click the time number again. Type 400. Press Enter. Press Command + K.",
              "n": 4
            },
            {
              "text": "Click the piece before the 1 second mark. Press Shift + Delete. Click the piece after the 4 second mark. Press Shift + Delete.",
              "check": "SameShots_A_Face is now 3 seconds long. The clip you cut away is still in the file, so you have extra footage on both sides. Transitions need that extra footage.",
              "n": 5
            },
            {
              "text": "Double-click SameShots_C_BenchRain to open it in the Source Monitor. Click the time number. Type 100. Press Enter. Press I. Click the time number again. Type 400. Press Enter. Press O.",
              "n": 6
            },
            {
              "text": "Drag the picture from the Source Monitor to the end of your timeline.",
              "n": 7
            },
            {
              "text": "Do the same with SameShots_F_Door: mark In at 100 and Out at 400, then drag the picture to the end of your timeline.",
              "n": 8
            },
            {
              "text": "Press Home. Press Space to play it.",
              "note": "Every edit is a straight cut. Decide which edit should feel like time passed.",
              "n": 9
            },
            {
              "text": "Add a cross dissolve on that edit. Pick ONE way.",
              "check": "A Cross Dissolve box appears on the edit.",
              "ways": [
                {
                  "label": "A",
                  "text": "Put the playhead on the edit, click the V1 track, and press Command + D."
                },
                {
                  "label": "B",
                  "text": "Click Window, then Effects, search \"cross dissolve,\" and drag it onto the edit."
                }
              ],
              "n": 10
            },
            {
              "text": "Double-click the transition on the timeline. Type 100 (one second). Press Space to play it. Try a shorter one and a longer one.",
              "n": 11
            },
            {
              "text": "Click Window, then Effects. Search \"dip to black.\" Drag it to the very end of the last clip.",
              "check": "The video fades out at the end.",
              "n": 12
            },
            {
              "text": "Write your rule in the box below: when do I use a dissolve, a dip to black, or a straight cut? Then fix any transition that does not follow your rule.",
              "note": "If you see a warning or a half-length transition, your clip is out of footage. Mark a smaller piece.",
              "writeIn": "rule",
              "n": 13
            }
          ]
        },
        {
          "heading": "Part B: Speed",
          "steps": [
            {
              "text": "Right-click CT_03_CloseUp_Hands. Pick New Sequence From Clip.",
              "n": 14
            },
            {
              "text": "Open the speed box for the clip on the timeline. Pick ONE way.",
              "ways": [
                {
                  "label": "A",
                  "text": "Right-click the clip on the timeline and pick Speed/Duration."
                },
                {
                  "label": "B",
                  "text": "Click the clip and press Command + R."
                }
              ],
              "n": 15
            },
            {
              "text": "Type 300. Check Ripple Edit, Shifting Trailing Clips and Maintain Audio Pitch. Click OK. Press Space to play it.",
              "check": "That is a time-lapse of Sam folding.",
              "n": 16
            },
            {
              "text": "Drag CT_05_Throw_Wide onto the end of the timeline. Open the speed box again. Type 40. Click OK. Press Space to play it.",
              "note": "The throw looks dramatic, but it may look a little jumpy. That is normal for slow motion from a normal-speed clip.",
              "n": 17
            },
            {
              "text": "Add a dip to black at the very end, the same way as Step 12. Press Home. Press Space to play the whole thing: time-lapse, slow-mo throw, fade out.",
              "n": 18
            },
            {
              "text": "Press Command + S.",
              "n": 19
            }
          ]
        }
      ],
      "showMe": {
        "intro": "Point to each one on your screen, then get initials.",
        "items": [
          "At least one cross dissolve sits where time passes.",
          "The video ends with a dip to black.",
          "The folding is sped up and the throw is slowed down.",
          "Your transition rule is written down.",
          "There are no black gaps in the timeline."
        ]
      },
      "video": {
        "file": "Mission8_TransitionsSpeed.mp4",
        "captions": "Burned in. No sound.",
        "note": null
      },
      "writeIns": [
        {
          "id": "rule",
          "kind": "lines",
          "title": "My transition rule",
          "prompts": [
            "When do I use a dissolve, a dip to black, or a straight cut?"
          ]
        }
      ],
      "career": "Editors choose transitions carefully. Too many make a video look like a slideshow. News and documentary editors mostly use straight cuts and save a dissolve for a time jump or the end of a story."
    },
    {
      "id": "m9",
      "number": 9,
      "slug": "titles-lower-thirds",
      "title": "Titles and Lower Thirds",
      "minutes": 20,
      "goal": "Add a title at the start and a lower third that names the person who is talking.",
      "wordingStatus": "rewritten-2026-11-09",
      "vocabulary": [
        {
          "term": "Title",
          "def": "The words that name your video."
        },
        {
          "term": "Lower third",
          "def": "The name and job that appear in the lower part of the screen while someone talks."
        },
        {
          "term": "Contrast",
          "def": "How well words stand out from the picture behind them."
        },
        {
          "term": "Safe margin",
          "def": "Keep words inside it, away from the edges of the screen."
        }
      ],
      "clipFolder": "Premiere Practice Clips 2",
      "files": [
        "JL_ARoll_Interview.mp4"
      ],
      "sections": [
        {
          "heading": null,
          "steps": [
            {
              "text": "Download the file attached to this assignment: JL_ARoll_Interview.mp4. Move it into your Premiere Basics folder.",
              "n": 1
            },
            {
              "text": "Open Premiere. Open your Premiere Basics project. If JL_ARoll_Interview is not in the Project panel yet, import it.",
              "n": 2
            },
            {
              "text": "Right-click JL_ARoll_Interview. Pick New Sequence From Clip. Right-click the new sequence in the Project panel. Pick Rename. Type Titles.",
              "n": 3
            }
          ]
        },
        {
          "heading": "Lower third",
          "steps": [
            {
              "text": "Click the time number at the bottom left of the timeline. Type 100. Press Enter.",
              "n": 4
            },
            {
              "text": "Press T for the Type tool. Click in the Program Monitor near the lower left. Type Sam Rivera. Press V to finish.",
              "check": "A text clip appears on V2.",
              "n": 5
            },
            {
              "text": "Click the text clip on V2. Open the Properties panel. Pick ONE way.",
              "ways": [
                {
                  "label": "A",
                  "text": "Click Window, then Properties."
                },
                {
                  "label": "B",
                  "text": "If you do not see Properties, click Window, then Essential Graphics."
                }
              ],
              "n": 6
            },
            {
              "text": "Pick a bold font. Set the size to about 60. Make the color white. Turn on Shadow so it is easy to read.",
              "n": 7
            },
            {
              "text": "Press T again. Click just below the name. Type Paper Plane Builder. Press V. Make this line smaller (about 36). Line it up with the first line. Keep both lines away from the edges of the screen.",
              "n": 8
            },
            {
              "text": "Drag the right edge of each text clip on V2 until it lasts about 4 seconds. Read both lines out loud twice.",
              "check": "If you cannot read both lines out loud twice before they disappear, make them stay longer.",
              "n": 9
            },
            {
              "text": "Click both text clips. Press Command + D.",
              "check": "Each text clip gets a fade in and a fade out.",
              "n": 10
            }
          ]
        },
        {
          "heading": "Title",
          "steps": [
            {
              "text": "Press Home. Press T. Click in the middle of the Program Monitor. Type SATURDAY PLANE CLUB. Press V.",
              "n": 11
            },
            {
              "text": "Make the title big. Place it over a clear part of the picture. Drag its right edge so it lasts about 3 seconds. Press Command + D to add a fade.",
              "n": 12
            },
            {
              "text": "Check three things. Is every word spelled right? Can you read it easily? Does it stay up long enough? Fix anything that is not.",
              "n": 13
            }
          ]
        },
        {
          "heading": "Export",
          "steps": [
            {
              "text": "Press Command + M. Set Format to H.264. Pick a preset that starts with Match Source.",
              "n": 14
            },
            {
              "text": "Click the file name. Type Titles_[YourLastName]. Save it in your Premiere Basics folder. Click Export.",
              "check": "After the export finishes, the file is in your Premiere Basics folder.",
              "n": 15
            },
            {
              "text": "Press Command + S.",
              "note": "If your text disappears, click the text clip on V2 and make sure the playhead is over it. If you cannot find a setting, click the text clip and look in the Properties panel.",
              "n": 16
            }
          ]
        }
      ],
      "showMe": {
        "intro": "Point to each one on your screen, then get initials.",
        "items": [
          "The lower third shows a name and a job and is easy to read.",
          "It stays long enough to read and fades in and out.",
          "You added a title at the start.",
          "Every word is spelled right.",
          "You exported a file and can point to it in your folder."
        ]
      },
      "video": {
        "file": "Mission9_TitlesLowerThirds.mp4",
        "captions": "Burned in. No sound.",
        "note": null
      },
      "career": "Every news show, YouTube channel, and documentary uses lower thirds. Motion graphics designers and editors build them every day, and a typo on screen is one of the most embarrassing mistakes in video."
    }
  ],
  "remix": {
    "id": "remix",
    "number": null,
    "slug": "remix-challenge",
    "title": "Remix Challenge",
    "bonus": true,
    "minutes": null,
    "goal": "Upgrade your Story Cut using the new skills. Pick any three of the four.",
    "wordingStatus": "original-v3",
    "vocabulary": [],
    "clipFolder": null,
    "files": [],
    "noVideoNote": "No video for this one. It uses everything you have learned.",
    "sections": [
      {
        "heading": null,
        "steps": [
          {
            "text": "Open your Mission 4 project. Right-click Version A and pick Duplicate. Name it Remix.",
            "n": 1
          },
          {
            "text": "Pick at least three: (a) add a J-cut or L-cut (try a sound effect that starts before its picture), (b) add a cutaway or match cut, (c) add one transition that has a reason, (d) add a title with the name of your story.",
            "n": 2
          },
          {
            "text": "Export it as Remix_[LastName] with H.264.",
            "n": 3
          },
          {
            "text": "Write one sentence for each choice: what did it do for the story?",
            "writeIn": "remixlines",
            "n": 4
          }
        ]
      }
    ],
    "showMe": {
      "intro": "Point to each one on your screen, then get initials.",
      "items": [
        "You picked at least three upgrades.",
        "You exported Remix_[LastName].",
        "You wrote one sentence for each choice."
      ]
    },
    "writeIns": [
      {
        "id": "remixlines",
        "kind": "lines",
        "title": "What each choice did for my story",
        "prompts": [
          "What each choice did for my story:"
        ]
      }
    ],
    "video": null,
    "showMeNote": "The Remix Show Me items were written by Claude from the Remix steps (the guide has no 'You are done when' box for it). Tom to confirm."
  },
  "launchCheck": {
    "title": "Launch check",
    "intro": "Check each box. If you cannot, you know what to practice.",
    "items": [
      "I can import clips and put them on a timeline.",
      "I can trim a clip so it starts and ends where I want.",
      "I can split a clip, delete a piece, and close the gap.",
      "I can change the order of clips.",
      "I can make loud and quiet parts closer in volume.",
      "I can add music and make it fade.",
      "I can export my video as an H.264 file.",
      "I can check a clip's size and frame rate and set up a sequence that matches.",
      "I can name different types of cuts and use at least three.",
      "I can make a J-cut and an L-cut.",
      "I can use a cross dissolve and a dip to black and explain when to use each.",
      "I can speed up and slow down a clip.",
      "I can add a title and a lower third."
    ]
  },
  "quickFixes": [
    {
      "problem": "My panels are gone or messy.",
      "fix": "Window, then Workspaces, then Reset to Saved Layout."
    },
    {
      "problem": "It says \"media offline\" (red screen with text).",
      "fix": "Stop. Do not delete anything. Check that your clips are still in your Premiere Basics folder, then ask your teacher or a classmate who has fixed it before."
    },
    {
      "problem": "There is a black gap in my timeline.",
      "fix": "Click the gap and press Shift + Delete to ripple delete it."
    },
    {
      "problem": "I hear nothing.",
      "fix": "Check your MacBook volume. Check that the audio track is not muted (the M button on the left of the track)."
    },
    {
      "problem": "I cut the wrong spot.",
      "fix": "Command + Z to undo, as many times as you need."
    },
    {
      "problem": "My clip got covered up when I moved it.",
      "fix": "Undo. Copy the clip (Command + C), ripple delete the original (Shift + Delete), then Paste Insert (Shift + Command + V) at the start."
    },
    {
      "problem": "The video is a different size than the timeline.",
      "fix": "Right-click the clip in the Project panel, New Sequence From Clip, so the timeline matches."
    },
    {
      "problem": "I cannot find my export.",
      "fix": "Look in the location shown in the Export window. Click the blue file path to change it."
    },
    {
      "problem": "A clip looks tiny, has black bars, or is cut off.",
      "fix": "Its size does not match the timeline. Right-click the clip on the timeline and pick Set to Frame Size. Phone videos shot upright will always have bars on a wide timeline."
    },
    {
      "problem": "I dragged the video edit and the sound moved too.",
      "fix": "The clips are still linked. Select them, right-click, and pick Unlink. Then try the Rolling Edit tool (N) again."
    },
    {
      "problem": "My edit will not drag any farther (J-cut or L-cut).",
      "fix": "You are out of extra footage. Mark a smaller piece of the clip in the Source Monitor (use In and Out) so there is footage left on both sides."
    },
    {
      "problem": "My transition is short, has a warning, or looks wrong.",
      "fix": "Transitions need extra footage on both sides of the edit. Trim the clips shorter with In and Out so there is some left over."
    },
    {
      "problem": "Slow motion looks jumpy.",
      "fix": "That is normal. A normal-speed clip has fewer pictures to stretch out. Try 50% instead of 25%, and keep slow shots short."
    },
    {
      "problem": "My text disappeared or will not move.",
      "fix": "Click the text clip on V2 and make sure the playhead is over it. Press V, then drag it in the Program Monitor, or use the Properties panel."
    },
    {
      "problem": "I see a bin full of Adobe stock clips.",
      "fix": "Those are not your clips. Download the mission clips from Google Classroom into your Premiere Basics folder, then import them."
    },
    {
      "problem": "I cannot find my project.",
      "fix": "Open your Premiere Basics folder and double-click the project file."
    }
  ],
  "keys": {
    "title": "Mac Keys Cheat Sheet",
    "rows": [
      {
        "keys": "Space",
        "does": "Play and pause"
      },
      {
        "keys": "V",
        "does": "Arrow tool (select)"
      },
      {
        "keys": "C",
        "does": "Razor tool (cut)"
      },
      {
        "keys": "Command + K",
        "does": "Cut at the playhead"
      },
      {
        "keys": "Shift + Delete",
        "does": "Ripple delete (removes a piece and closes the gap)"
      },
      {
        "keys": "Command + Z",
        "does": "Undo"
      },
      {
        "keys": "Command + S",
        "does": "Save"
      },
      {
        "keys": "I and O",
        "does": "Mark In and Out in the Source Monitor"
      },
      {
        "keys": "\\ (backslash)",
        "does": "Fit the timeline to your window"
      },
      {
        "keys": "+ and -",
        "does": "Zoom the timeline in and out"
      },
      {
        "keys": "Left and right arrow",
        "does": "Move one frame"
      },
      {
        "keys": "G",
        "does": "Audio Gain"
      },
      {
        "keys": "Command + R",
        "does": "Speed / Duration"
      },
      {
        "keys": "Command + C, then Shift + Command + V",
        "does": "Copy a clip, then paste insert"
      },
      {
        "keys": "J, K, L",
        "does": "Play backward, stop, play forward"
      },
      {
        "keys": "Command + M",
        "does": "Export"
      },
      {
        "keys": "Home",
        "does": "Move the playhead to the start"
      },
      {
        "keys": "Command + I",
        "does": "Import files (in Premiere). In Finder it is Get Info."
      },
      {
        "keys": "T",
        "does": "Type tool (add text)"
      },
      {
        "keys": "N",
        "does": "Rolling Edit tool (move an edit point)"
      },
      {
        "keys": "Command + D",
        "does": "Add the default transition (cross dissolve)"
      }
    ],
    "footnote": "Menu names and shortcuts can change a little between Premiere versions. If a key does not work, look in the menu at the top of the screen. The shortcut is shown next to each command."
  },
  "habits": {
    "title": "Back on Track: how to work a mission",
    "fourThings": [
      {
        "title": "Skipping steps",
        "text": "Doing steps out of order, or only some of them."
      },
      {
        "title": "Reading info as a step",
        "text": "Some lines give information. They are not instructions."
      },
      {
        "title": "Doing every way",
        "text": "Premiere often has several ways to do one job. Pick one."
      },
      {
        "title": "Work that is not saved",
        "text": "No saved project, or clips that got moved."
      }
    ],
    "readDoCheck": [
      {
        "word": "Read",
        "text": "Read ONE step. Only one."
      },
      {
        "word": "Do",
        "text": "Do ONLY that step. Then stop."
      },
      {
        "word": "Check",
        "text": "Look at the screen. Did it change the way the step said?"
      }
    ],
    "readDoCheckFallback": "Screen does not match the step? Press Command + Z to undo, then read the step again.",
    "lineTypes": {
      "intro": "Know what a line is asking: Action, Information, or Goal?",
      "types": [
        {
          "letter": "A",
          "name": "Action",
          "text": "Tells you to do something. It starts with a verb. Do it.",
          "example": "Press Command + K to cut the clip at the playhead."
        },
        {
          "letter": "I",
          "name": "Information",
          "text": "Tells you a fact. There is nothing to do yet.",
          "example": "Premiere often has more than one way to do the same thing."
        },
        {
          "letter": "G",
          "name": "Goal",
          "text": "Tells you the result you want, not the steps.",
          "example": "Make the video start on the number 7 and end on the number 3."
        }
      ],
      "watchFor": "Watch for \"you will\" and \"this is.\" Those lines are information. Wait for the line that starts with a verb.",
      "practice": [
        {
          "line": "Press Command + K to cut the clip at the playhead.",
          "answer": "A",
          "why": "Action. It starts with a verb and tells you what to press."
        },
        {
          "line": "The playhead is the blue line that shows where you are in the timeline.",
          "answer": "I",
          "why": "Information. It explains what the playhead is. There is nothing to do yet."
        },
        {
          "line": "Challenge: make the video start on the number 7 and end on the number 3.",
          "answer": "G",
          "why": "Goal. It names the result, not the steps. You work out the steps and pick ONE way."
        },
        {
          "line": "Each mission has its own clips attached to its assignment.",
          "answer": "I",
          "why": "Information. It says where the clips are. The step that tells you to open them will start with a verb."
        }
      ]
    },
    "pickOne": {
      "text": "Premiere often has several ways to do one job. When a card shows Way A and Way B, do ONE and finish it first. Do not do them all in a row.",
      "example": [
        {
          "label": "Way A: drag the clip edge",
          "text": "Best for tiny trims. Click the end of a clip on the timeline and drag it in or out."
        },
        {
          "label": "Way B: Razor tool",
          "text": "Best for cutting in the middle. Press C, click where you want the cut, then press V to go back."
        }
      ]
    },
    "checkScreen": {
      "matches": "Go to the next step.",
      "doesNotMatch": [
        "Press Command + Z to undo.",
        "Read the step again.",
        "Try it one more time.",
        "Still stuck? Ask a neighbor."
      ]
    },
    "saveIt": [
      "Keep your project and your clips together in the Premiere Basics folder you made in Mission 0.",
      "Press Command + S every few steps.",
      "To come back, open your project from the Recent list on the Premiere start screen, or double-click the project file in your folder.",
      "Use the same project each day. Do not start a new one."
    ],
    "mediaOffline": {
      "text": "Premiere cannot find your clips. Most often the clips were moved, renamed, or deleted.",
      "steps": [
        "Stop. Do not delete anything.",
        "Check that your clips are still in your Premiere Basics folder.",
        "Ask your teacher, or a classmate who has fixed it before."
      ]
    },
    "showMeCheck": [
      "Your project is saved in your Premiere Basics folder.",
      "The mission clips are in your Project panel, not the Adobe stock clips.",
      "You can point to every item in the Show Me list on your screen.",
      "A neighbor watches you point to each one."
    ],
    "showMeThen": "Then ask for initials.",
    "stuckInOrder": [
      {
        "title": "Reread",
        "text": "Read the step again. Out loud helps."
      },
      {
        "title": "Watch",
        "text": "Watch the how-to video for your mission."
      },
      {
        "title": "Ask a neighbor",
        "text": "Show them your screen and the step."
      },
      {
        "title": "Ask the teacher",
        "text": "Say which step you are on and what you see."
      }
    ]
  }
};
