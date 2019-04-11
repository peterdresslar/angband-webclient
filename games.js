var games = [ 
  { name: 'angband',
    longname: 'Angband 4.1.3',
    desc: 'The latest release of the classic dungeon exploration game inspired by the work of JRR Tolkien. Descended from Moria.',
    restrict_paths: false,
    data_paths: [],
    args: [] },
  { name: 'angband-master',
    longname: 'Angband class/magic feature branch',
    desc: 'Development version of angband, featuring a large overhaul of classes and monsters.',
    restrict_paths: false,
    data_paths: [],
    args: [],
	owner: 'Nick'},
  { name: 'coffeeband',
    longname: 'Coffeeband 1.0.1',
    desc: 'New variant built over angband-master.',
    restrict_paths: false,
    data_paths: [],
    args: [],
	owner: 'wobbly' },
  { name: 'composband',
    longname: 'Composband 7.1.0',
    desc: 'Composite *bands. Site authors attempts to reintroduce lost content into PosChengband from previous versions and variants.',
    restrict_paths: false,
    data_paths: [],
    args: [],
	owner: 'Gwarl' },
  { name: 'faangband',
    longname: 'FAangband 1.4.4',
    desc: 'Redesigned gameplay mechanics, full of new features and new content, including wilderness levels. Faithful to Tolkien. Descended from Oangband',
    restrict_paths: false,
    data_paths: [],
    args: [] },
  { name: 'frogcomposband',
    longname: 'FrogComposband 7.0.toffee',
    desc: 'Further development of ComPosband, fixes bugs, adds new classes, towns, quests and alters some game mechanics.',
    restrict_paths: false,
    data_paths: [],
    args: [],
	owner: 'rodent'},
  { name: 'hellband',
    longname: 'Hellband 0.8.7',
    desc: 'Dante-inspired angband variant.',
    restrict_paths: false,
    data_paths: [],
    args: [] },
  { name: 'hengband',
    longname: 'Hengband 1.6.2',
    desc: 'Japanese Zangband variant, progenitor of ComPosband. Older version - get in touch if you can help me compile and run the 2.2.0 source code.',
    restrict_paths: false,
    data_paths: [],
    args: [] },
  { name: 'kangband',
    longname: 'Kangband 2.9.3',
    desc: 'Early variant, very influential. Introduced wilderness. New races and classes. Features quests and a choice of plotlines.',
    restrict_paths: false,
    data_paths: [],
    args: [] },
  { name: 'multiband',
    longname: 'Multiband 1.1.2',
    desc: 'Multiclassing angband. Lots of new classes to multiclass between. Older variant.',
    restrict_paths: false,
    data_paths: [],
    args: [] },
  { name: 'nppangband',
    longname: 'NPPAngband 7.1.0',
    desc: 'Attempts to preserve classic angband gameplay but with various improvements.',
    restrict_paths: true,
    data_paths: [],
    args: [ 'sang' ] },
  { name: 'nppmoria',
    longname: 'NPPMoria 7.1.0',
    desc: 'A recreation of Moria using the NPPAngband engine.',
    restrict_paths: true,
    data_paths: [],
    args: [ 'smor' ] },
  { name: 'oangband',
    longname: 'Oangband 1.1.0u',
    desc: 'Opinion angband. Redesigned gameplay mechanics and extra content. Very influential',
    restrict_paths: false,
    data_paths: [],
    args: [] },
  { name: 'rocketband',
    longname: 'Rocketband 0.0.1',
    desc: 'Rockets.',
    restrict_paths: false,
    data_paths: [],
    args: [] },
  { name: 'poschengband',
    longname: 'PosChengband 7.0.2b',
    desc: 'One of the most popular variants, bursting with new content. Includes wilderness. Descended from Zangband.',
    restrict_paths: false,
    data_paths: [],
    args: [] },
  { name: 'elliposchengband',
    longname: 'elliPosChengband',
    desc: 'A fork of PosChengbandband with various tweaks for ease of playing',
    restrict_paths: false,
    data_paths: [],
    args: [] },
  { name: 'reposband',
    longname: 'RePosBand 0.6.4',
    desc: 'One of the inspirations for PosChengband. Play as a monster! Posband reimplemented over angband 3.2',
    restrict_paths: false,
    data_paths: [],
    args: [] },
  { name: 'sangband',
    longname: 'Sangband 1.0.0',
    desc: 'Skills Angband.',
    restrict_paths: false,
    data_paths: [],
    args: [] },
  { name: 'steamband',
    longname: 'Steamband 0.4.1f',
    desc: 'Steampunk Angband. Please use your site username for your character name if playing, or else progress will be lost.',
    restrict_paths: false,
    data_paths: [],
    args: [] },
  { name: 'tome',
    longname: 'ToME 2.3.11-ah',
    desc: 'Full of new content, quests and a large open world. Descended from Zangband.',
    restrict_paths: false,
    data_paths: [],
    args: [] },
  { name: 'umoria',
    longname: 'UMoria 5.6',
    desc: 'A restoration of the original Moria game.',
    restrict_paths: true,
    data_paths: [],
    args: [] },
  { name: 'unangband',
    longname: 'UnAngband 6.5.0a',
    desc: 'Influential variant full of new content with new quests, classes and locations.',
    restrict_paths: false,
    data_paths: [],
    args: [] },
  { name: 'zangband',
    longname: 'ZAngband 2.7.5pre1',
    desc: 'Massively influential variant. New races, classes, and an overworld.',
    restrict_paths: false,
    data_paths: [],
    args: [] },
  { name: 'sil',
    longname: 'Sil 1.3.0',
    desc: 'Heavily redesigned gameplay mechanics to be a shorter but more tactically intricate game. Very faithful to Tolkein. Descended from NPPAngband',
	restrict_paths: false,
    data_paths: ['save','apex'],
    args: [] },
  { name: 'silq',
    longname: 'Sil-Quirk 1.4.1',
    desc: 'New Sil fork designed to adress imbalances in the parent game',
	restrict_paths: false,
    data_paths: ['save','apex'],
    args: [] },
  { name: 'silq-dev',
    longname: 'Sil-Quirk 1.4.2-dev',
    desc: 'Development branch of Sil-Quirk',
	restrict_paths: false,
    data_paths: ['save','apex'],
    args: [],
	owner: 'Quirk'	},
  { name: 'quickband',
    longname: 'Quickband 2.0.6',
    desc: 'Designed to be a shorter game. Descended from NPPAngband',
	restrict_paths: true,
    data_paths: [],
    args: [] },
  { name: 'ironband',
    longname: 'Ironband',
    desc: 'Variant designed with Ironman play in mind. Descended from NPPAngband', 
	restrict_paths: false,
    data_paths: [],
    args: [] } ];
module.exports=games;
