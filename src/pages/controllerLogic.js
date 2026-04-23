// Controller Builder Logic - Pure JavaScript (no DOM manipulation)

export const partDefinitions = {
  "grey-stick": {
    shape: "poly",
    coords:
      "152,191,198,186,238,192,265,200,287,213,303,227,315,242,325,258,330,277,330,302,324,324,317,336,304,350,289,363,264,377,246,385,217,391,195,393,170,392,147,387,130,382,113,376,100,367,87,356,77,346,67,330,58,313,53,291,57,269,64,254,76,236,90,222,104,212,118,202,130,196,142,193",
  },
  "face-buttons": {
    shape: "poly",
    coords:
      "703,282,704,313,708,348,722,377,747,390,778,402,817,413,853,419,909,421,953,412,987,397,1016,375,1030,354,1048,326,1053,303,1051,266,1034,231,1009,207,984,187,953,172,915,162,870,156,836,162,800,168,767,184,747,201,733,215,719,230,710,249,703,267",
  },
  "c-stick": {
    shape: "poly",
    coords: "646,420,615,476,643,528,720,555,791,529,821,475,791,420,717,398",
  },
  paracord: { shape: "rect", coords: "501,0,567,88" },
  "left-trigger": {
    shape: "poly",
    coords:
      "103,158,119,129,132,117,148,108,170,102,193,102,206,102,226,106,247,115",
  },
  "z-button": {
    shape: "poly",
    coords: "825,119,968,159,959,147,939,133,911,124,889,119,859,113,842,113",
  },
  "right-trigger": {
    shape: "poly",
    coords: "835,114,873,106,902,108,921,112,944,124,957,135,961,151,900,126",
  },
};

export const partToCategory = {
  paracord: "Cable",
  "left-trigger": "Left Trigger",
  "right-trigger": "Right Trigger",
  "z-button": "z-button",
  "face-buttons": "Face Buttons",
  "grey-stick": "Grey Stick",
  "c-stick": "C Stick",
};

export const modOptions = {
  Cable: [
    {
      id: "paracord_2m",
      name: "Paracord 2 Metres",
      standard: 55,
      tournament: 55,
      description: "Same as below but 2 metre old controller length.",
    },
    {
      id: "paracord_3m",
      name: "Paracord 3 Metres",
      standard: 65,
      tournament: 65,
      description:
        "Cord hand crimped and paracorded up. Length of new controller cable.",
    },
    {
      id: "oem_3m",
      name: "OEM 3 Metres",
      standard: 10,
      tournament: 10,
      description: "OEM 3 Metres (if applicable).",
    },
    {
      id: "white_oem",
      name: "White OEM",
      standard: 35,
      tournament: 35,
      description: "Subject to stock. OEM white cable.",
    },
  ],
  "z-button": [
    {
      id: "tactile_z",
      name: "Tactile Z",
      standard: 10,
      tournament: 10,
      description:
        "Replace mushy OEM z with tactile clicky z. <strong>Recommend</strong>.",
    },
    {
      id: "bald_z",
      name: "Bald Z",
      standard: 20,
      tournament: 20,
      description: "Rounded out z. Very nice with mouseclick z.",
    },
    {
      id: "mouseclick_z",
      name: "Mouseclick Z (Phob exclusive)",
      standard: 35,
      tournament: 35,
      description:
        "Replace z button with a mouseclick button. Reliable and very nice. <strong>Recommend</strong>.",
    },
  ],
  "Face Buttons": [
    {
      id: "mouseclick_abxy",
      name: "Mouseclick ABXY (Phob exclusive)",
      standard: 60,
      tournament: 60,
      description:
        "Put mouseclick on the abxy. Pairs well with bald buttons. Recommend if you like the feel.",
    },
    {
      id: "perforated_pads",
      name: "Perforated Pads",
      standard: 10,
      tournament: 10,
      description: "OEM pads with lower force press.",
    },
    {
      id: "bald_buttons",
      name: "Bald Buttons",
      standard: 70,
      tournament: 70,
      description:
        "OEM buttons sanded down to be easy to slide on. Good improvement on instant nair etc.",
    },
  ],
  "Left Trigger": [
    {
      id: "ergo_trigger",
      name: "Ergo Trigger",
      standard: 30,
      tournament: 30,
      description:
        "Shaved down triggers, like a modern controller. Controller feels natural.",
    },
    {
      id: "full_plug",
      name: "Full Plug",
      standard: 3,
      tournament: 3,
      description:
        "Full Plug. Select if you want full digital for mouseclick trigger",
    },
    {
      id: "half_plug",
      name: "Half Plug",
      standard: 3,
      tournament: 3,
      description:
        "Half Plug. Select if you want analog (lightshield) for mouseclick trigger",
    },
    {
      id: "low_force",
      name: "Low Force",
      standard: 15,
      tournament: 15,
      description:
        "Custom spring and lube makes the trigger feel weightless. Almost 100g force difference. <strong>Recommend</strong>.",
    },
    {
      id: "mouseclick_trigger",
      name: "Mouseclick",
      standard: 20,
      tournament: 20,
      description:
        "Puts a mouseclick on there. Lowest press force possible. Can keep analog.",
    },
    {
      id: "potentiometer_lt",
      name: "Potentiometer Replacement",
      standard: 20,
      tournament: 20,
      description:
        "Swap the left-trigger slider pot for crisp, reliable analog.",
    },
  ],
  "Right Trigger": [
    {
      id: "ergo_trigger",
      name: "Ergo Trigger",
      standard: 30,
      tournament: 30,
      description:
        "Shaved down triggers, like a modern controller. Controller feels natural.",
    },
    {
      id: "full_plug",
      name: "Full Plug",
      standard: 3,
      tournament: 3,
      description:
        "Full Plug. Select if you want full digital for mouseclick trigger",
    },
    {
      id: "half_plug",
      name: "Half Plug",
      standard: 3,
      tournament: 3,
      description:
        "Half Plug. Select if you want analog (lightshield) for mouseclick trigger",
    },
    {
      id: "low_force",
      name: "Low Force",
      standard: 15,
      tournament: 15,
      description:
        "Custom spring and lube makes the trigger feel weightless. Almost 100g force difference. <strong>Recommend</strong>.",
    },
    {
      id: "mouseclick_trigger",
      name: "Mouseclick",
      standard: 20,
      tournament: 20,
      description:
        "Puts a mouseclick on there. Lowest press force possible. Can keep analog.",
    },
    {
      id: "potentiometer_rt",
      name: "Potentiometer Replacement",
      standard: 20,
      tournament: 20,
      description:
        "Swap the right-trigger slider pot for crisp, reliable analog.",
    },
  ],
  "Grey Stick": [
    {
      id: "slickbox",
      name: "Slickbox",
      standard: 20,
      tournament: 20,
      description:
        "Make the stickbox feel worn in and loose but not wobbly. Free flying.",
    },
    {
      id: "wavespring",
      name: "Wavespring",
      standard: 20,
      tournament: 20,
      description:
        "Normalize the resistance on the X and Y axis of the stick. OEM is tighter on one. <strong>Recommend</strong>.",
    },
    {
      id: "replacement",
      name: "Replacement",
      standard: 20,
      tournament: 20,
      description: "Replacement.",
    },
    {
      id: "lubrication",
      name: "Lubrication",
      standard: 10,
      tournament: 10,
      description: "Lubricate the sticks for longer lifetime.",
    },
    {
      id: "firefox_notches",
      name: "Firefox Notches",
      standard: 100,
      tournament: 100,
      description: "Precise angle notches on the left up and right gates.",
    },
    {
      id: "wavedash_notches",
      name: "Wavedash Notches",
      standard: 45,
      tournament: 45,
      description:
        "Notches for perfect wavedash angle, comes with Firefox notches.",
    },
    {
      id: "bottom_notch",
      name: "Bottom Notch",
      standard: 25,
      tournament: 25,
      description: "Notches for the bottom gate.",
    },
    {
      id: "oem_notches",
      name: "OEM Notches",
      standard: 30,
      tournament: 30,
      description: "OEM Notches.",
    },
    {
      id: "potentiometer_grey",
      name: "Potentiometer Replacement",
      standard: 60,
      tournament: 60,
      description: "Replace both X- and Y-axis pots",
    },
  ],
  "C Stick": [
    {
      id: "slickbox",
      name: "Slickbox",
      standard: 20,
      tournament: 20,
      description:
        "Make the stickbox feel worn in and loose but not wobbly. Free flying.",
    },
    {
      id: "wavespring",
      name: "Wavespring",
      standard: 20,
      tournament: 20,
      description:
        "Normalize the resistance on the X and Y axis of the stick. OEM is tighter on one. <strong>Recommend</strong>.",
    },
    {
      id: "replacement",
      name: "Replacement",
      standard: 20,
      tournament: 20,
      description: "Replacement.",
    },
    {
      id: "lubrication",
      name: "Lubrication",
      standard: 10,
      tournament: 10,
      description: "Lubricate the C Stick for smooth movement.",
    },
    {
      id: "potentiometer_c",
      name: "Potentiometer Replacement",
      standard: 60,
      tournament: 60,
      description: "Renew both C-Stick potentiometers for a like-new feel.",
    },
  ],
  Shell: [
    {
      id: "gccblack",
      name: "Black",
      filename: "/img/gccblack.png",
      standard: 200,
      tournament: 250,
      description: "Black shell",
    },
    {
      id: "gccindigo",
      name: "Indigo",
      filename: "/img/gcc.png",
      standard: 200,
      tournament: 250,
      description: "Indigo shell",
    },
    {
      id: "gccorange",
      name: "Orange",
      filename: "/img/gccorange.png",
      standard: 200,
      tournament: 250,
      description: "Orange shell",
    },
    {
      id: "gccwhite",
      name: "White",
      filename: "/img/gccwhite.png",
      standard: 250,
      tournament: 290,
      description: "White shell",
    },
    {
      id: "gccemerald",
      name: "Emerald",
      filename: "/img/gccemerald.png",
      standard: 250,
      tournament: 290,
      description: "Emerald shell",
    },
  ],
};

export const shellOptions = modOptions["Shell"];

export const MODE_LABEL = {
  Conversion: "Install",
  Motherboard: "Board",
  OEM: "OEM",
};

export const shellNameById = {};
shellOptions.forEach((s) => {
  shellNameById[s.id] = s.name;
});

export const getEffectivePrice = (
  mod,
  category,
  tournamentMode,
  shellIdForChecking = null
) => {
  let basePrice = tournamentMode ? mod.tournament : mod.standard;

  if (
    category === "Grey Stick" &&
    mod.id === "wavedash_notches" &&
    shellIdForChecking === "firefox_notches"
  ) {
    basePrice = 0;
  }

  return basePrice;
};
