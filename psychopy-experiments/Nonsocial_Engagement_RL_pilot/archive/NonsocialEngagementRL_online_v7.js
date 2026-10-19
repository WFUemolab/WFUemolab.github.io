/************************************** 
 * Nonsocial Engagement Rl Pilot *
 **************************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Nonsocial Engagement RL Pilot';  // from the Builder filename that created this script
let expInfo = {
    'Prolific ID*': '',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const intro_text_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(intro_text_loopLoopBegin(intro_text_loopLoopScheduler));
flowScheduler.add(intro_text_loopLoopScheduler);
flowScheduler.add(intro_text_loopLoopEnd);


const questions_beforeLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(questions_beforeLoopBegin(questions_beforeLoopScheduler));
flowScheduler.add(questions_beforeLoopScheduler);
flowScheduler.add(questions_beforeLoopEnd);



const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);







const question_afterLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(question_afterLoopBegin(question_afterLoopScheduler));
flowScheduler.add(question_afterLoopScheduler);
flowScheduler.add(question_afterLoopEnd);



flowScheduler.add(FinalDisplayRoutineBegin());
flowScheduler.add(FinalDisplayRoutineEachFrame());
flowScheduler.add(FinalDisplayRoutineEnd());
flowScheduler.add(WrittingTaskRoutineBegin());
flowScheduler.add(WrittingTaskRoutineEachFrame());
flowScheduler.add(WrittingTaskRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'instruction.csv', 'path': 'instruction.csv'},
    {'name': 'questionnaires.csv', 'path': 'questionnaires.csv'},
    {'name': 'conditions_v7_80_trials_6_chunks.csv', 'path': 'conditions_v7_80_trials_6_chunks.csv'},
    {'name': 'fractals/7.jpg', 'path': 'fractals/7.jpg'},
    {'name': 'fractals/6.jpg', 'path': 'fractals/6.jpg'},
    {'name': 'questionnaires.csv', 'path': 'questionnaires.csv'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'Timeout.png', 'path': 'Timeout.png'},
    {'name': 'conditions_v7_80_trials_6_chunks.csv', 'path': 'conditions_v7_80_trials_6_chunks.csv'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.com/submissions/complete?cc=C18U7IZS', '');


  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["Prolific ID*"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var introClock;
var description_text1;
var intro_continue_text;
var ready_button;
var excitement_question1Clock;
var excitement_question1_desc;
var question1_text_12345;
var excitement_q1_slider;
var excitement_q1_label_text;
var fixation_questionClock;
var fixation_q_text;
var main_fractalClock;
var cue_left;
var cue_right;
var choice_resp;
var trial_outcomes;
var choice_displayClock;
var choice_image;
var jitter1Clock;
var jitter1_fixation_text;
var outcome_page_barClock;
var outcome_bar_headline;
var outcome_percent_bar;
var label0;
var label50;
var label100;
var outcome_percent;
var outcome_arrow;
var trial_explicit_questionClock;
var trial_explitic_q_desc;
var trial_explitic_q_slider;
var trial_explitic_q_label_text;
var jitter2Clock;
var jitter2_text;
var excitement_question2Clock;
var excitement_question2_desc;
var question2_text_12345;
var excitement_q2_slider;
var excitement_q2_label_text;
var FinalDisplayClock;
var waiting_text;
var task_text;
var FinalDisplay_continue_text;
var FinalDisplay_continue_resp;
var WrittingTaskClock;
var mouse;
var final_task_input_box;
var submit_button;
var timer_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  description_text1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'description_text1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  intro_continue_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_continue_text',
    text: 'Press SPACE when you are ready to begin.',
    font: 'Arial Rounded MT Bold',
    units: 'height', 
    pos: [0, (- 0.3)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: undefined,
    depth: -1.0 
  });
  
  ready_button = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "excitement_question1"
  excitement_question1Clock = new util.Clock();
  excitement_question1_desc = new visual.TextStim({
    win: psychoJS.window,
    name: 'excitement_question1_desc',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  question1_text_12345 = new visual.TextStim({
    win: psychoJS.window,
    name: 'question1_text_12345',
    text: 'Press 1, 2, 3, 4, or 5 on your keyboard to make a selection.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  excitement_q1_slider = new visual.Slider({
    win: psychoJS.window, name: 'excitement_q1_slider',
    startValue: undefined,
    size: [0.8, 0.05], pos: [0, (- 0.3)], ori: 0.0, units: 'height',
    labels: ["1", "2", "3", "4", "5"], fontSize: 0.05, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  excitement_q1_label_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'excitement_q1_label_text',
    text: 'Not at all     Slightly     Neutral     Moderately     Very',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Declare current_rating at routine scope
  var current_rating = null;
  var rating_selected = false;
  // Initialize components for Routine "fixation_question"
  fixation_questionClock = new util.Clock();
  fixation_q_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_q_text',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "main_fractal"
  main_fractalClock = new util.Clock();
  cue_left = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cue_left', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.3), 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  cue_right = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cue_right', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.3, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  choice_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from choice_to_outcome
  trial_outcomes = [];
  var choice_page_duration = 1.0; // Default fallback duration
  var choice_timeout = false;
  
  // Initialize components for Routine "choice_display"
  choice_displayClock = new util.Clock();
  choice_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'choice_image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "jitter1"
  jitter1Clock = new util.Clock();
  jitter1_fixation_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'jitter1_fixation_text',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "outcome_page_bar"
  outcome_page_barClock = new util.Clock();
  outcome_bar_headline = new visual.TextStim({
    win: psychoJS.window,
    name: 'outcome_bar_headline',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  outcome_percent_bar = new visual.Rect ({
    win: psychoJS.window, name: 'outcome_percent_bar', 
    width: [0.8, 0.02][0], height: [0.8, 0.02][1],
    ori: 0.0, 
    pos: [0, (- 0.15)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  label0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'label0',
    text: '0%',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), (- 0.22)], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  label50 = new visual.TextStim({
    win: psychoJS.window,
    name: 'label50',
    text: '50%',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.22)], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  label100 = new visual.TextStim({
    win: psychoJS.window,
    name: 'label100',
    text: '100%',
    font: 'Arial',
    units: undefined, 
    pos: [0.4, (- 0.22)], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  outcome_percent = new visual.TextStim({
    win: psychoJS.window,
    name: 'outcome_percent',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -6.0 
  });
  
  outcome_arrow = new visual.ShapeStim ({
    win: psychoJS.window, name: 'outcome_arrow', units : 'height', 
    vertices: 'arrow', size:[0.03, 0.07],
    ori: 180.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('red'), 
    fillColor: new util.Color('red'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -7, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "trial_explicit_question"
  trial_explicit_questionClock = new util.Clock();
  trial_explitic_q_desc = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_explitic_q_desc',
    text: 'How happy are you to get that percentage outcome?\n\nPress 1, 2, 3, 4, or 5 on your keyboard to make a selection.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  trial_explitic_q_slider = new visual.Slider({
    win: psychoJS.window, name: 'trial_explitic_q_slider',
    startValue: undefined,
    size: [0.8, 0.05], pos: [0, (- 0.3)], ori: 0.0, units: 'height',
    labels: ["1", "2", "3", "4", "5"], fontSize: 0.05, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  trial_explitic_q_label_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_explitic_q_label_text',
    text: 'Not at all     Slightly     Neutral     Moderately     Very',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Declare current_rating at routine scope
  
  var current_rating = null;
  
  var rating_selected = false;
  // Initialize components for Routine "jitter2"
  jitter2Clock = new util.Clock();
  jitter2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'jitter2_text',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "excitement_question2"
  excitement_question2Clock = new util.Clock();
  excitement_question2_desc = new visual.TextStim({
    win: psychoJS.window,
    name: 'excitement_question2_desc',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  question2_text_12345 = new visual.TextStim({
    win: psychoJS.window,
    name: 'question2_text_12345',
    text: 'Press 1, 2, 3, 4, or 5 on your keyboard to make a selection.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  excitement_q2_slider = new visual.Slider({
    win: psychoJS.window, name: 'excitement_q2_slider',
    startValue: undefined,
    size: [0.8, 0.05], pos: [0, (- 0.3)], ori: 0.0, units: 'height',
    labels: ["1", "2", "3", "4", "5"], fontSize: 0.05, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  excitement_q2_label_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'excitement_q2_label_text',
    text: 'Not at all     Slightly     Neutral     Moderately     Very',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Declare current_rating at routine scope
  
  var current_rating = null;
  
  var rating_selected = false;
  // Initialize components for Routine "FinalDisplay"
  FinalDisplayClock = new util.Clock();
  waiting_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'waiting_text',
    text: 'Your completed all choice tasks. The computer is working on picking a writing task for you...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  task_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'task_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  FinalDisplay_continue_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'FinalDisplay_continue_text',
    text: 'If you are ready, press SPACE to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: undefined,
    depth: -3.0 
  });
  
  FinalDisplay_continue_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "WrittingTask"
  WrittingTaskClock = new util.Clock();
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  final_task_input_box = new visual.TextBox({
    win: psychoJS.window,
    name: 'final_task_input_box',
    text: '',
    placeholder: 'Type something here ...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  submit_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'submit_button',
    text: 'Submit',
    font: 'Arvo',
    pos: [0.2, (- 0.3)],
    size: [0.3, 0.1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  submit_button.clock = new util.Clock();
  
  timer_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'timer_text',
    text: 'Time remaining: 5 minutes',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.2), (- 0.3)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var intro_text_loop;
function intro_text_loopLoopBegin(intro_text_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    intro_text_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'instruction.csv',
      seed: undefined, name: 'intro_text_loop'
    });
    psychoJS.experiment.addLoop(intro_text_loop); // add the loop to the experiment
    currentLoop = intro_text_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisIntro_text_loop of intro_text_loop) {
      snapshot = intro_text_loop.getSnapshot();
      intro_text_loopLoopScheduler.add(importConditions(snapshot));
      intro_text_loopLoopScheduler.add(introRoutineBegin(snapshot));
      intro_text_loopLoopScheduler.add(introRoutineEachFrame());
      intro_text_loopLoopScheduler.add(introRoutineEnd(snapshot));
      intro_text_loopLoopScheduler.add(intro_text_loopLoopEndIteration(intro_text_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function intro_text_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(intro_text_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function intro_text_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var questions_before;
function questions_beforeLoopBegin(questions_beforeLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    questions_before = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'questionnaires.csv',
      seed: undefined, name: 'questions_before'
    });
    psychoJS.experiment.addLoop(questions_before); // add the loop to the experiment
    currentLoop = questions_before;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisQuestions_before of questions_before) {
      snapshot = questions_before.getSnapshot();
      questions_beforeLoopScheduler.add(importConditions(snapshot));
      questions_beforeLoopScheduler.add(excitement_question1RoutineBegin(snapshot));
      questions_beforeLoopScheduler.add(excitement_question1RoutineEachFrame());
      questions_beforeLoopScheduler.add(excitement_question1RoutineEnd(snapshot));
      questions_beforeLoopScheduler.add(fixation_questionRoutineBegin(snapshot));
      questions_beforeLoopScheduler.add(fixation_questionRoutineEachFrame());
      questions_beforeLoopScheduler.add(fixation_questionRoutineEnd(snapshot));
      questions_beforeLoopScheduler.add(questions_beforeLoopEndIteration(questions_beforeLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function questions_beforeLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(questions_before);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function questions_beforeLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions_v7_80_trials_6_chunks.csv',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(main_fractalRoutineBegin(snapshot));
      trialsLoopScheduler.add(main_fractalRoutineEachFrame());
      trialsLoopScheduler.add(main_fractalRoutineEnd(snapshot));
      trialsLoopScheduler.add(choice_displayRoutineBegin(snapshot));
      trialsLoopScheduler.add(choice_displayRoutineEachFrame());
      trialsLoopScheduler.add(choice_displayRoutineEnd(snapshot));
      trialsLoopScheduler.add(jitter1RoutineBegin(snapshot));
      trialsLoopScheduler.add(jitter1RoutineEachFrame());
      trialsLoopScheduler.add(jitter1RoutineEnd(snapshot));
      trialsLoopScheduler.add(outcome_page_barRoutineBegin(snapshot));
      trialsLoopScheduler.add(outcome_page_barRoutineEachFrame());
      trialsLoopScheduler.add(outcome_page_barRoutineEnd(snapshot));
      trialsLoopScheduler.add(trial_explicit_questionRoutineBegin(snapshot));
      trialsLoopScheduler.add(trial_explicit_questionRoutineEachFrame());
      trialsLoopScheduler.add(trial_explicit_questionRoutineEnd(snapshot));
      trialsLoopScheduler.add(jitter2RoutineBegin(snapshot));
      trialsLoopScheduler.add(jitter2RoutineEachFrame());
      trialsLoopScheduler.add(jitter2RoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var question_after;
function question_afterLoopBegin(question_afterLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    question_after = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'questionnaires.csv',
      seed: undefined, name: 'question_after'
    });
    psychoJS.experiment.addLoop(question_after); // add the loop to the experiment
    currentLoop = question_after;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisQuestion_after of question_after) {
      snapshot = question_after.getSnapshot();
      question_afterLoopScheduler.add(importConditions(snapshot));
      question_afterLoopScheduler.add(excitement_question2RoutineBegin(snapshot));
      question_afterLoopScheduler.add(excitement_question2RoutineEachFrame());
      question_afterLoopScheduler.add(excitement_question2RoutineEnd(snapshot));
      question_afterLoopScheduler.add(fixation_questionRoutineBegin(snapshot));
      question_afterLoopScheduler.add(fixation_questionRoutineEachFrame());
      question_afterLoopScheduler.add(fixation_questionRoutineEnd(snapshot));
      question_afterLoopScheduler.add(question_afterLoopEndIteration(question_afterLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function question_afterLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(question_after);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function question_afterLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var introMaxDurationReached;
var _ready_button_allKeys;
var introMaxDuration;
var introComponents;
function introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    introClock.reset();
    routineTimer.reset();
    introMaxDurationReached = false;
    // update component parameters for each repeat
    description_text1.setText(intro_text);
    ready_button.keys = undefined;
    ready_button.rt = undefined;
    _ready_button_allKeys = [];
    psychoJS.experiment.addData('intro.started', globalClock.getTime());
    introMaxDuration = null
    // keep track of which components have finished
    introComponents = [];
    introComponents.push(description_text1);
    introComponents.push(intro_continue_text);
    introComponents.push(ready_button);
    
    for (const thisComponent of introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro' ---
    // get current time
    t = introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *description_text1* updates
    if (t >= 0 && description_text1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      description_text1.tStart = t;  // (not accounting for frame time here)
      description_text1.frameNStart = frameN;  // exact frame index
      
      description_text1.setAutoDraw(true);
    }
    
    
    // if description_text1 is active this frame...
    if (description_text1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *intro_continue_text* updates
    if (t >= 0 && intro_continue_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_continue_text.tStart = t;  // (not accounting for frame time here)
      intro_continue_text.frameNStart = frameN;  // exact frame index
      
      intro_continue_text.setAutoDraw(true);
    }
    
    
    // if intro_continue_text is active this frame...
    if (intro_continue_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ready_button* updates
    if (t >= 0 && ready_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ready_button.tStart = t;  // (not accounting for frame time here)
      ready_button.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ready_button.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ready_button.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ready_button.clearEvents(); });
    }
    
    // if ready_button is active this frame...
    if (ready_button.status === PsychoJS.Status.STARTED) {
      let theseKeys = ready_button.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _ready_button_allKeys = _ready_button_allKeys.concat(theseKeys);
      if (_ready_button_allKeys.length > 0) {
        ready_button.keys = _ready_button_allKeys[_ready_button_allKeys.length - 1].name;  // just the last key pressed
        ready_button.rt = _ready_button_allKeys[_ready_button_allKeys.length - 1].rt;
        ready_button.duration = _ready_button_allKeys[_ready_button_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro' ---
    for (const thisComponent of introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(ready_button.corr, level);
    }
    psychoJS.experiment.addData('ready_button.keys', ready_button.keys);
    if (typeof ready_button.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('ready_button.rt', ready_button.rt);
        psychoJS.experiment.addData('ready_button.duration', ready_button.duration);
        routineTimer.reset();
        }
    
    ready_button.stop();
    // the Routine "intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var excitement_question1MaxDurationReached;
var current_rating;
var rating_selected;
var kb;
var excitement_question1MaxDuration;
var excitement_question1Components;
function excitement_question1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'excitement_question1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    excitement_question1Clock.reset();
    routineTimer.reset();
    excitement_question1MaxDurationReached = false;
    // update component parameters for each repeat
    excitement_question1_desc.setText(question_text);
    excitement_q1_slider.reset()
    // Run 'Begin Routine' code from excitement_q1_code
    // Reset values for this specific routine (DO NOT use 'var' or 'let' here)
    current_rating = null;
    rating_selected = false;
    
    // Initialize keyboard listener (equivalent to kb = keyboard.Keyboard())
    kb = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
    
    // Reset the keyboard clock and clear prior key events (equivalent to kb.clearEvents())
    kb.clock.reset();
    kb.start();
    kb.clearEvents();
    
    excitement_q1_slider.markerPos = null;
    excitement_q1_slider.rating = null;
    
    psychoJS.experiment.addData('excitement_question1.started', globalClock.getTime());
    excitement_question1MaxDuration = 10
    // keep track of which components have finished
    excitement_question1Components = [];
    excitement_question1Components.push(excitement_question1_desc);
    excitement_question1Components.push(question1_text_12345);
    excitement_question1Components.push(excitement_q1_slider);
    excitement_question1Components.push(excitement_q1_label_text);
    
    for (const thisComponent of excitement_question1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var keyName;
function excitement_question1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'excitement_question1' ---
    // get current time
    t = excitement_question1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > excitement_question1MaxDuration) {
        excitement_question1MaxDurationReached = true
        continueRoutine = false
    }
    
    // *excitement_question1_desc* updates
    if (t >= 0 && excitement_question1_desc.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      excitement_question1_desc.tStart = t;  // (not accounting for frame time here)
      excitement_question1_desc.frameNStart = frameN;  // exact frame index
      
      excitement_question1_desc.setAutoDraw(true);
    }
    
    
    // if excitement_question1_desc is active this frame...
    if (excitement_question1_desc.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *question1_text_12345* updates
    if (t >= 0 && question1_text_12345.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question1_text_12345.tStart = t;  // (not accounting for frame time here)
      question1_text_12345.frameNStart = frameN;  // exact frame index
      
      question1_text_12345.setAutoDraw(true);
    }
    
    
    // if question1_text_12345 is active this frame...
    if (question1_text_12345.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *excitement_q1_slider* updates
    if (t >= 0.0 && excitement_q1_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      excitement_q1_slider.tStart = t;  // (not accounting for frame time here)
      excitement_q1_slider.frameNStart = frameN;  // exact frame index
      
      excitement_q1_slider.setAutoDraw(true);
    }
    
    
    // if excitement_q1_slider is active this frame...
    if (excitement_q1_slider.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *excitement_q1_label_text* updates
    if (t >= 0 && excitement_q1_label_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      excitement_q1_label_text.tStart = t;  // (not accounting for frame time here)
      excitement_q1_label_text.frameNStart = frameN;  // exact frame index
      
      excitement_q1_label_text.setAutoDraw(true);
    }
    
    
    // if excitement_q1_label_text is active this frame...
    if (excitement_q1_label_text.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from excitement_q1_code
    // ONLY check keys if a selection hasn't been locked yet
    if (!rating_selected) {
        let keys = kb.getKeys({keyList: ['1', '2', '3', '4', '5', 'num_1', 'num_2', 'num_3', 'num_4', 'num_5'], waitRelease: false});
    
        if (keys.length > 0) {
            let keyObj = keys[0];
            let keyName = (typeof keyObj === 'object' && keyObj !== null) ? keyObj.name : keyObj;
    
            // Convert Numpad key names (e.g. 'num_1' -> '1')
            if (typeof keyName === 'string' && keyName.startsWith('num_')) {
                keyName = keyName.replace('num_', '');
            }
    
            // Step 1: Update slider visual marker if 1-5 is pressed
            if (['1', '2', '3', '4', '5'].includes(keyName)) {
                current_rating = parseInt(keyName, 10);
                
                // recordRating() sets value AND forces visual redrawing of marker
                excitement_q1_slider.recordRating(current_rating);
    
                rating_selected = true;
                psychoJS.experiment.addData('excitement_q1_rating', current_rating);
                psychoJS.experiment.addData('excitement_q1_rt', keyObj.rt);
                continueRoutine = false;
            }
        }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of excitement_question1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function excitement_question1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'excitement_question1' ---
    for (const thisComponent of excitement_question1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('excitement_question1.stopped', globalClock.getTime());
    psychoJS.experiment.addData('excitement_q1_slider.response', excitement_q1_slider.getRating());
    psychoJS.experiment.addData('excitement_q1_slider.rt', excitement_q1_slider.getRT());
    // the Routine "excitement_question1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fixation_questionMaxDurationReached;
var fixation_questionMaxDuration;
var fixation_questionComponents;
function fixation_questionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fixation_question' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    fixation_questionClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    fixation_questionMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('fixation_question.started', globalClock.getTime());
    fixation_questionMaxDuration = null
    // keep track of which components have finished
    fixation_questionComponents = [];
    fixation_questionComponents.push(fixation_q_text);
    
    for (const thisComponent of fixation_questionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fixation_questionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fixation_question' ---
    // get current time
    t = fixation_questionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_q_text* updates
    if (t >= 0 && fixation_q_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_q_text.tStart = t;  // (not accounting for frame time here)
      fixation_q_text.frameNStart = frameN;  // exact frame index
      
      fixation_q_text.setAutoDraw(true);
    }
    
    
    // if fixation_q_text is active this frame...
    if (fixation_q_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation_q_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fixation_q_text.tStop = t;  // not accounting for scr refresh
      fixation_q_text.frameNStop = frameN;  // exact frame index
      // update status
      fixation_q_text.status = PsychoJS.Status.FINISHED;
      fixation_q_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixation_questionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixation_questionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fixation_question' ---
    for (const thisComponent of fixation_questionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('fixation_question.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (fixation_questionMaxDurationReached) {
        fixation_questionClock.add(fixation_questionMaxDuration);
    } else {
        fixation_questionClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var main_fractalMaxDurationReached;
var _choice_resp_allKeys;
var main_fractalMaxDuration;
var main_fractalComponents;
function main_fractalRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_fractal' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    main_fractalClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    main_fractalMaxDurationReached = false;
    // update component parameters for each repeat
    cue_left.setImage(fractal_left);
    cue_right.setImage(fractal_right);
    choice_resp.keys = undefined;
    choice_resp.rt = undefined;
    _choice_resp_allKeys = [];
    psychoJS.experiment.addData('main_fractal.started', globalClock.getTime());
    main_fractalMaxDuration = 3
    // keep track of which components have finished
    main_fractalComponents = [];
    main_fractalComponents.push(cue_left);
    main_fractalComponents.push(cue_right);
    main_fractalComponents.push(choice_resp);
    
    for (const thisComponent of main_fractalComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function main_fractalRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_fractal' ---
    // get current time
    t = main_fractalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > main_fractalMaxDuration) {
        main_fractalMaxDurationReached = true
        continueRoutine = false
    }
    
    // *cue_left* updates
    if (t >= 0 && cue_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_left.tStart = t;  // (not accounting for frame time here)
      cue_left.frameNStart = frameN;  // exact frame index
      
      cue_left.setAutoDraw(true);
    }
    
    
    // if cue_left is active this frame...
    if (cue_left.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (cue_left.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      cue_left.tStop = t;  // not accounting for scr refresh
      cue_left.frameNStop = frameN;  // exact frame index
      // update status
      cue_left.status = PsychoJS.Status.FINISHED;
      cue_left.setAutoDraw(false);
    }
    
    
    // *cue_right* updates
    if (t >= 0 && cue_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_right.tStart = t;  // (not accounting for frame time here)
      cue_right.frameNStart = frameN;  // exact frame index
      
      cue_right.setAutoDraw(true);
    }
    
    
    // if cue_right is active this frame...
    if (cue_right.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (cue_right.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      cue_right.tStop = t;  // not accounting for scr refresh
      cue_right.frameNStop = frameN;  // exact frame index
      // update status
      cue_right.status = PsychoJS.Status.FINISHED;
      cue_right.setAutoDraw(false);
    }
    
    
    // *choice_resp* updates
    if (t >= 0 && choice_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice_resp.tStart = t;  // (not accounting for frame time here)
      choice_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { choice_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { choice_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { choice_resp.clearEvents(); });
    }
    frameRemains = 0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (choice_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      choice_resp.tStop = t;  // not accounting for scr refresh
      choice_resp.frameNStop = frameN;  // exact frame index
      // update status
      choice_resp.status = PsychoJS.Status.FINISHED;
      frameRemains = 0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (choice_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        choice_resp.tStop = t;  // not accounting for scr refresh
        choice_resp.frameNStop = frameN;  // exact frame index
        // update status
        choice_resp.status = PsychoJS.Status.FINISHED;
        choice_resp.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if choice_resp is active this frame...
      if (choice_resp.status === PsychoJS.Status.STARTED) {
        let theseKeys = choice_resp.getKeys({
          keyList: typeof ['left','right'] === 'string' ? [['left','right']] : ['left','right'], 
          waitRelease: false
        });
        _choice_resp_allKeys = _choice_resp_allKeys.concat(theseKeys);
        if (_choice_resp_allKeys.length > 0) {
          choice_resp.keys = _choice_resp_allKeys[0].name;  // just the first key pressed
          choice_resp.rt = _choice_resp_allKeys[0].rt;
          choice_resp.duration = _choice_resp_allKeys[0].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of main_fractalComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
var outcome_choice;
var choice_img;
var outcome_display;
var choice_page_duration;
var choice_timeout;
function main_fractalRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'main_fractal' ---
      for (const thisComponent of main_fractalComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('main_fractal.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(choice_resp.corr, level);
      }
      psychoJS.experiment.addData('choice_resp.keys', choice_resp.keys);
      if (typeof choice_resp.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('choice_resp.rt', choice_resp.rt);
          psychoJS.experiment.addData('choice_resp.duration', choice_resp.duration);
          routineTimer.reset();
          }
      
      choice_resp.stop();
      // Run 'End Routine' code from choice_to_outcome
      if ((choice_resp.keys === "left")) {
          outcome_choice = outcome_left_probability;
          choice_img = fractal_left;
          outcome_display = `${outcome_choice} %`;
          trial_outcomes.push(outcome_choice);
          let rt = choice_resp.rt;
          choice_page_duration = Math.max(0, 4.0 - rt);
          choice_timeout = false;
      } else {
          if ((choice_resp.keys === "right")) {
              outcome_choice = outcome_right_probability;
              choice_img = fractal_right;
              outcome_display = `${outcome_choice} %`;
              trial_outcomes.push(outcome_choice);
              let rt = choice_resp.rt;
              choice_page_duration = Math.max(0, 4.0 - rt);
              choice_timeout = false;
          } else {
              outcome_choice = "stimuli/Missing_input.png";
              choice_img = "Timeout.png";
              outcome_display = "Timeout";
              choice_page_duration = 1.0;
              choice_timeout = true;
          }
      }
      psychoJS.experiment.addData("choice_img", choice_img);
      psychoJS.experiment.addData("outcome_choice", outcome_choice);
      psychoJS.experiment.addData("outcome_display", outcome_display);
      psychoJS.experiment.addData('choice_timeout', choice_timeout);
      
      if (routineForceEnded) {
          routineTimer.reset();} else if (main_fractalMaxDurationReached) {
          main_fractalClock.add(main_fractalMaxDuration);
      } else {
          main_fractalClock.add(3.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var choice_displayMaxDurationReached;
var choice_displayMaxDuration;
var choice_displayComponents;
function choice_displayRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'choice_display' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      choice_displayClock.reset();
      routineTimer.reset();
      choice_displayMaxDurationReached = false;
      // update component parameters for each repeat
      choice_image.setImage(choice_img);
      psychoJS.experiment.addData('choice_display.started', globalClock.getTime());
      choice_displayMaxDuration = null
      // keep track of which components have finished
      choice_displayComponents = [];
      choice_displayComponents.push(choice_image);
      
      for (const thisComponent of choice_displayComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function choice_displayRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'choice_display' ---
      // get current time
      t = choice_displayClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *choice_image* updates
      if (t >= 0 && choice_image.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        choice_image.tStart = t;  // (not accounting for frame time here)
        choice_image.frameNStart = frameN;  // exact frame index
        
        choice_image.setAutoDraw(true);
      }
      
      
      // if choice_image is active this frame...
      if (choice_image.status === PsychoJS.Status.STARTED) {
      }
      
      // Run 'Each Frame' code from choice_page_code
      if (t >= choice_page_duration) {
          continueRoutine = false;
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of choice_displayComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function choice_displayRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'choice_display' ---
      for (const thisComponent of choice_displayComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('choice_display.stopped', globalClock.getTime());
      // the Routine "choice_display" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var jitter1MaxDurationReached;
var jitter1MaxDuration;
var jitter1Components;
function jitter1RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'jitter1' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      jitter1Clock.reset();
      routineTimer.reset();
      jitter1MaxDurationReached = false;
      // update component parameters for each repeat
      psychoJS.experiment.addData('jitter1.started', globalClock.getTime());
      jitter1MaxDuration = null
      // keep track of which components have finished
      jitter1Components = [];
      jitter1Components.push(jitter1_fixation_text);
      
      for (const thisComponent of jitter1Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function jitter1RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'jitter1' ---
      // get current time
      t = jitter1Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *jitter1_fixation_text* updates
      if (t >= 0 && jitter1_fixation_text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        jitter1_fixation_text.tStart = t;  // (not accounting for frame time here)
        jitter1_fixation_text.frameNStart = frameN;  // exact frame index
        
        jitter1_fixation_text.setAutoDraw(true);
      }
      
      
      // if jitter1_fixation_text is active this frame...
      if (jitter1_fixation_text.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0 + jitter1_time - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (jitter1_fixation_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        jitter1_fixation_text.tStop = t;  // not accounting for scr refresh
        jitter1_fixation_text.frameNStop = frameN;  // exact frame index
        // update status
        jitter1_fixation_text.status = PsychoJS.Status.FINISHED;
        jitter1_fixation_text.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of jitter1Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function jitter1RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'jitter1' ---
      for (const thisComponent of jitter1Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('jitter1.stopped', globalClock.getTime());
      // the Routine "jitter1" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var outcome_page_barMaxDurationReached;
var target_text;
var outcome_page_barMaxDuration;
var outcome_page_barComponents;
function outcome_page_barRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'outcome_page_bar' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      outcome_page_barClock.reset(routineTimer.getTime());
      routineTimer.add(2.000000);
      outcome_page_barMaxDurationReached = false;
      // update component parameters for each repeat
      outcome_bar_headline.setText('');
      // Run 'Begin Routine' code from outcome_page_code_2
      var target_x = 0;
      var target_text = "0%";
      var bar_left = -0.4;
      var bar_width = 0.8;
      outcome_arrow.opacity = 1.0
      outcome_percent.opacity = 1.0
      label50.opacity = 1.0
      
      if (choice_timeout) {
          outcome_bar_headline.setText("No response detected. This trial does not count.");
          target_text = "";
          outcome_arrow.opacity = 0.0;
          outcome_percent.opacity = 0.0;
      } else {
          outcome_bar_headline.setText("The chance you will write about your personal experience:");
          target_x = bar_left + (outcome_choice / 100.0) * bar_width;
          target_text = Math.round(outcome_choice).toString() + " %";
          if (outcome_choice >= 40 && outcome_choice <= 60){
              label50.opacity = 0.0;
          }
      }
      
      outcome_percent.setPos([target_x, (- 0.22)]);
      outcome_percent.setText(target_text);
      outcome_arrow.setPos([target_x, (- 0.07)]);
      psychoJS.experiment.addData('outcome_page_bar.started', globalClock.getTime());
      outcome_page_barMaxDuration = null
      // keep track of which components have finished
      outcome_page_barComponents = [];
      outcome_page_barComponents.push(outcome_bar_headline);
      outcome_page_barComponents.push(outcome_percent_bar);
      outcome_page_barComponents.push(label0);
      outcome_page_barComponents.push(label50);
      outcome_page_barComponents.push(label100);
      outcome_page_barComponents.push(outcome_percent);
      outcome_page_barComponents.push(outcome_arrow);
      
      for (const thisComponent of outcome_page_barComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function outcome_page_barRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'outcome_page_bar' ---
      // get current time
      t = outcome_page_barClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *outcome_bar_headline* updates
      if (t >= 0 && outcome_bar_headline.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        outcome_bar_headline.tStart = t;  // (not accounting for frame time here)
        outcome_bar_headline.frameNStart = frameN;  // exact frame index
        
        outcome_bar_headline.setAutoDraw(true);
      }
      
      
      // if outcome_bar_headline is active this frame...
      if (outcome_bar_headline.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (outcome_bar_headline.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        outcome_bar_headline.tStop = t;  // not accounting for scr refresh
        outcome_bar_headline.frameNStop = frameN;  // exact frame index
        // update status
        outcome_bar_headline.status = PsychoJS.Status.FINISHED;
        outcome_bar_headline.setAutoDraw(false);
      }
      
      
      // *outcome_percent_bar* updates
      if (t >= 0 && outcome_percent_bar.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        outcome_percent_bar.tStart = t;  // (not accounting for frame time here)
        outcome_percent_bar.frameNStart = frameN;  // exact frame index
        
        outcome_percent_bar.setAutoDraw(true);
      }
      
      
      // if outcome_percent_bar is active this frame...
      if (outcome_percent_bar.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (outcome_percent_bar.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        outcome_percent_bar.tStop = t;  // not accounting for scr refresh
        outcome_percent_bar.frameNStop = frameN;  // exact frame index
        // update status
        outcome_percent_bar.status = PsychoJS.Status.FINISHED;
        outcome_percent_bar.setAutoDraw(false);
      }
      
      
      // *label0* updates
      if (t >= 0 && label0.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        label0.tStart = t;  // (not accounting for frame time here)
        label0.frameNStart = frameN;  // exact frame index
        
        label0.setAutoDraw(true);
      }
      
      
      // if label0 is active this frame...
      if (label0.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (label0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        label0.tStop = t;  // not accounting for scr refresh
        label0.frameNStop = frameN;  // exact frame index
        // update status
        label0.status = PsychoJS.Status.FINISHED;
        label0.setAutoDraw(false);
      }
      
      
      // *label50* updates
      if (t >= 0 && label50.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        label50.tStart = t;  // (not accounting for frame time here)
        label50.frameNStart = frameN;  // exact frame index
        
        label50.setAutoDraw(true);
      }
      
      
      // if label50 is active this frame...
      if (label50.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (label50.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        label50.tStop = t;  // not accounting for scr refresh
        label50.frameNStop = frameN;  // exact frame index
        // update status
        label50.status = PsychoJS.Status.FINISHED;
        label50.setAutoDraw(false);
      }
      
      
      // *label100* updates
      if (t >= 0 && label100.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        label100.tStart = t;  // (not accounting for frame time here)
        label100.frameNStart = frameN;  // exact frame index
        
        label100.setAutoDraw(true);
      }
      
      
      // if label100 is active this frame...
      if (label100.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (label100.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        label100.tStop = t;  // not accounting for scr refresh
        label100.frameNStop = frameN;  // exact frame index
        // update status
        label100.status = PsychoJS.Status.FINISHED;
        label100.setAutoDraw(false);
      }
      
      
      // *outcome_percent* updates
      if (t >= 0 && outcome_percent.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        outcome_percent.tStart = t;  // (not accounting for frame time here)
        outcome_percent.frameNStart = frameN;  // exact frame index
        
        outcome_percent.setAutoDraw(true);
      }
      
      
      // if outcome_percent is active this frame...
      if (outcome_percent.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (outcome_percent.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        outcome_percent.tStop = t;  // not accounting for scr refresh
        outcome_percent.frameNStop = frameN;  // exact frame index
        // update status
        outcome_percent.status = PsychoJS.Status.FINISHED;
        outcome_percent.setAutoDraw(false);
      }
      
      
      // *outcome_arrow* updates
      if (t >= 0 && outcome_arrow.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        outcome_arrow.tStart = t;  // (not accounting for frame time here)
        outcome_arrow.frameNStart = frameN;  // exact frame index
        
        outcome_arrow.setAutoDraw(true);
      }
      
      
      // if outcome_arrow is active this frame...
      if (outcome_arrow.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (outcome_arrow.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        outcome_arrow.tStop = t;  // not accounting for scr refresh
        outcome_arrow.frameNStop = frameN;  // exact frame index
        // update status
        outcome_arrow.status = PsychoJS.Status.FINISHED;
        outcome_arrow.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of outcome_page_barComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function outcome_page_barRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'outcome_page_bar' ---
      for (const thisComponent of outcome_page_barComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('outcome_page_bar.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (outcome_page_barMaxDurationReached) {
          outcome_page_barClock.add(outcome_page_barMaxDuration);
      } else {
          outcome_page_barClock.add(2.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var trial_explicit_questionMaxDurationReached;
var maxDurationReached;
var trial_explicit_questionMaxDuration;
var trial_explicit_questionComponents;
function trial_explicit_questionRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'trial_explicit_question' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      trial_explicit_questionClock.reset();
      routineTimer.reset();
      trial_explicit_questionMaxDurationReached = false;
      // update component parameters for each repeat
      trial_explitic_q_slider.reset()
      // Run 'Begin Routine' code from trial_explicit_q_code
      
      
      // Reset values for this specific routine (DO NOT use 'var' or 'let' here)
      
      current_rating = null;
      
      rating_selected = false;
      
        
      
      // Initialize keyboard listener (equivalent to kb = keyboard.Keyboard())
      
      kb = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
      
        
      
      // Reset the keyboard clock and clear prior key events (equivalent to kb.clearEvents())
      
      kb.clock.reset();
      
      kb.start();
      
      kb.clearEvents();
      
      trial_explitic_q_slider.markerPos = null;
      trial_explitic_q_slider.rating = null;
      rating_selected = false;
      
      psychoJS.experiment.addData('trial_explicit_question.started', globalClock.getTime());
      // skip this Routine if its 'Skip if' condition is True
      continueRoutine = continueRoutine && !(((! explicit_prediction_question) || choice_timeout));
      maxDurationReached = false
      trial_explicit_questionMaxDuration = 4
      // keep track of which components have finished
      trial_explicit_questionComponents = [];
      trial_explicit_questionComponents.push(trial_explitic_q_desc);
      trial_explicit_questionComponents.push(trial_explitic_q_slider);
      trial_explicit_questionComponents.push(trial_explitic_q_label_text);
      
      for (const thisComponent of trial_explicit_questionComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function trial_explicit_questionRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'trial_explicit_question' ---
      // get current time
      t = trial_explicit_questionClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      // is it time to end the Routine? (based on local clock)
      if (t > trial_explicit_questionMaxDuration) {
          trial_explicit_questionMaxDurationReached = true
          continueRoutine = false
      }
      
      // *trial_explitic_q_desc* updates
      if (t >= 0 && trial_explitic_q_desc.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        trial_explitic_q_desc.tStart = t;  // (not accounting for frame time here)
        trial_explitic_q_desc.frameNStart = frameN;  // exact frame index
        
        trial_explitic_q_desc.setAutoDraw(true);
      }
      
      
      // if trial_explitic_q_desc is active this frame...
      if (trial_explitic_q_desc.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *trial_explitic_q_slider* updates
      if (t >= 0.0 && trial_explitic_q_slider.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        trial_explitic_q_slider.tStart = t;  // (not accounting for frame time here)
        trial_explitic_q_slider.frameNStart = frameN;  // exact frame index
        
        trial_explitic_q_slider.setAutoDraw(true);
      }
      
      
      // if trial_explitic_q_slider is active this frame...
      if (trial_explitic_q_slider.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *trial_explitic_q_label_text* updates
      if (t >= 0 && trial_explitic_q_label_text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        trial_explitic_q_label_text.tStart = t;  // (not accounting for frame time here)
        trial_explitic_q_label_text.frameNStart = frameN;  // exact frame index
        
        trial_explitic_q_label_text.setAutoDraw(true);
      }
      
      
      // if trial_explitic_q_label_text is active this frame...
      if (trial_explitic_q_label_text.status === PsychoJS.Status.STARTED) {
      }
      
      // Run 'Each Frame' code from trial_explicit_q_code
      // ONLY check keys if a selection hasn't been locked yet
      if (!rating_selected) {
          let keys = kb.getKeys({keyList: ['1', '2', '3', '4', '5', 'num_1', 'num_2', 'num_3', 'num_4', 'num_5'], waitRelease: false});
      
          if (keys.length > 0) {
      
          let keyObj = keys[0];
      
          let keyName = (typeof keyObj === 'object' && keyObj !== null) ? keyObj.name : keyObj;
      
          // Convert Numpad key names (e.g. 'num_1' -> '1')
      
          if (typeof keyName === 'string' && keyName.startsWith('num_')) {
      
          keyName = keyName.replace('num_', '');
      
          }
      
          // Step 1: Update slider visual marker if 1-5 is pressed
      
          if (['1', '2', '3', '4', '5'].includes(keyName)) {
      
          current_rating = parseInt(keyName, 10);
      
          // recordRating() sets value AND forces visual redrawing of marker
      
          trial_explitic_q_slider.recordRating(current_rating);
      
          rating_selected = true;
          
          psychoJS.experiment.addData('explicit_q_rating', current_rating);
          psychoJS.experiment.addData('explicit_q_rt', keyObj.rt);
          }
      
      
          }
      }
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of trial_explicit_questionComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function trial_explicit_questionRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'trial_explicit_question' ---
      for (const thisComponent of trial_explicit_questionComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('trial_explicit_question.stopped', globalClock.getTime());
      psychoJS.experiment.addData('trial_explitic_q_slider.response', trial_explitic_q_slider.getRating());
      psychoJS.experiment.addData('trial_explitic_q_slider.rt', trial_explitic_q_slider.getRT());
      // the Routine "trial_explicit_question" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var jitter2MaxDurationReached;
var jitter2MaxDuration;
var jitter2Components;
function jitter2RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'jitter2' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      jitter2Clock.reset();
      routineTimer.reset();
      jitter2MaxDurationReached = false;
      // update component parameters for each repeat
      psychoJS.experiment.addData('jitter2.started', globalClock.getTime());
      jitter2MaxDuration = null
      // keep track of which components have finished
      jitter2Components = [];
      jitter2Components.push(jitter2_text);
      
      for (const thisComponent of jitter2Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function jitter2RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'jitter2' ---
      // get current time
      t = jitter2Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *jitter2_text* updates
      if (t >= 0 && jitter2_text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        jitter2_text.tStart = t;  // (not accounting for frame time here)
        jitter2_text.frameNStart = frameN;  // exact frame index
        
        jitter2_text.setAutoDraw(true);
      }
      
      
      // if jitter2_text is active this frame...
      if (jitter2_text.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0 + jitter2_time - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (jitter2_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        jitter2_text.tStop = t;  // not accounting for scr refresh
        jitter2_text.frameNStop = frameN;  // exact frame index
        // update status
        jitter2_text.status = PsychoJS.Status.FINISHED;
        jitter2_text.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of jitter2Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function jitter2RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'jitter2' ---
      for (const thisComponent of jitter2Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('jitter2.stopped', globalClock.getTime());
      // the Routine "jitter2" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var excitement_question2MaxDurationReached;
var excitement_question2MaxDuration;
var excitement_question2Components;
function excitement_question2RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'excitement_question2' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      excitement_question2Clock.reset();
      routineTimer.reset();
      excitement_question2MaxDurationReached = false;
      // update component parameters for each repeat
      excitement_question2_desc.setText(question_text);
      excitement_q2_slider.reset()
      // Run 'Begin Routine' code from code
      	    
      
      // Reset values for this specific routine (DO NOT use 'var' or 'let' here)
      
      current_rating = null;
      
      rating_selected = false;
      
        
      
      // Initialize keyboard listener (equivalent to kb = keyboard.Keyboard())
      
      kb = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
      
        
      
      // Reset the keyboard clock and clear prior key events (equivalent to kb.clearEvents())
      
      kb.clock.reset();
      
      kb.start();
      
      kb.clearEvents();
      
      excitement_q2_slider.markerPos = null;
      excitement_q2_slider.rating = null;
      rating_selected = false;
      
      psychoJS.experiment.addData('excitement_question2.started', globalClock.getTime());
      excitement_question2MaxDuration = 10
      // keep track of which components have finished
      excitement_question2Components = [];
      excitement_question2Components.push(excitement_question2_desc);
      excitement_question2Components.push(question2_text_12345);
      excitement_question2Components.push(excitement_q2_slider);
      excitement_question2Components.push(excitement_q2_label_text);
      
      for (const thisComponent of excitement_question2Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function excitement_question2RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'excitement_question2' ---
      // get current time
      t = excitement_question2Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      // is it time to end the Routine? (based on local clock)
      if (t > excitement_question2MaxDuration) {
          excitement_question2MaxDurationReached = true
          continueRoutine = false
      }
      
      // *excitement_question2_desc* updates
      if (t >= 0 && excitement_question2_desc.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        excitement_question2_desc.tStart = t;  // (not accounting for frame time here)
        excitement_question2_desc.frameNStart = frameN;  // exact frame index
        
        excitement_question2_desc.setAutoDraw(true);
      }
      
      
      // if excitement_question2_desc is active this frame...
      if (excitement_question2_desc.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *question2_text_12345* updates
      if (t >= 0 && question2_text_12345.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        question2_text_12345.tStart = t;  // (not accounting for frame time here)
        question2_text_12345.frameNStart = frameN;  // exact frame index
        
        question2_text_12345.setAutoDraw(true);
      }
      
      
      // if question2_text_12345 is active this frame...
      if (question2_text_12345.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *excitement_q2_slider* updates
      if (t >= 0.0 && excitement_q2_slider.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        excitement_q2_slider.tStart = t;  // (not accounting for frame time here)
        excitement_q2_slider.frameNStart = frameN;  // exact frame index
        
        excitement_q2_slider.setAutoDraw(true);
      }
      
      
      // if excitement_q2_slider is active this frame...
      if (excitement_q2_slider.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *excitement_q2_label_text* updates
      if (t >= 0 && excitement_q2_label_text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        excitement_q2_label_text.tStart = t;  // (not accounting for frame time here)
        excitement_q2_label_text.frameNStart = frameN;  // exact frame index
        
        excitement_q2_label_text.setAutoDraw(true);
      }
      
      
      // if excitement_q2_label_text is active this frame...
      if (excitement_q2_label_text.status === PsychoJS.Status.STARTED) {
      }
      
      // Run 'Each Frame' code from code
      // ONLY check keys if a selection hasn't been locked yet
      if (!rating_selected) {
          let keys = kb.getKeys({keyList: ['1', '2', '3', '4', '5', 'num_1', 'num_2', 'num_3', 'num_4', 'num_5'], waitRelease: false});
      
          if (keys.length > 0) {
              let keyObj = keys[0];
              let keyName = (typeof keyObj === 'object' && keyObj !== null) ? keyObj.name : keyObj;
      
              // Convert Numpad key names (e.g. 'num_1' -> '1')
              if (typeof keyName === 'string' && keyName.startsWith('num_')) {
                  keyName = keyName.replace('num_', '');
              }
      
              // Step 1: Update slider visual marker if 1-5 is pressed
              if (['1', '2', '3', '4', '5'].includes(keyName)) {
                  current_rating = parseInt(keyName, 10);
                  
                  // recordRating() sets value AND forces visual redrawing of marker
                  excitement_q2_slider.recordRating(current_rating);
      
                  rating_selected = true;
                  psychoJS.experiment.addData('excitement_q2_rating', current_rating);
                  psychoJS.experiment.addData('excitement_q2_rt', keyObj.rt);
                  continueRoutine = false;
              }
          }
      }
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of excitement_question2Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function excitement_question2RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'excitement_question2' ---
      for (const thisComponent of excitement_question2Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('excitement_question2.stopped', globalClock.getTime());
      psychoJS.experiment.addData('excitement_q2_slider.response', excitement_q2_slider.getRating());
      psychoJS.experiment.addData('excitement_q2_slider.rt', excitement_q2_slider.getRT());
      psychoJS.experiment.addData('excitement_q2_slider.history', excitement_q2_slider.getHistory());
      // the Routine "excitement_question2" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var FinalDisplayMaxDurationReached;
var selected_outcome;
var final_outcome;
var final_task_text;
var _FinalDisplay_continue_resp_allKeys;
var FinalDisplayMaxDuration;
var FinalDisplayComponents;
function FinalDisplayRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'FinalDisplay' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      FinalDisplayClock.reset();
      routineTimer.reset();
      FinalDisplayMaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from FinalDisplay_code
      if (trial_outcomes && trial_outcomes.length > 0) {
          // 1. Randomly select an element from the trial_outcomes array in pure JavaScript
          const randomIndex = Math.floor(Math.random() * trial_outcomes.length);
          selected_outcome = trial_outcomes[randomIndex];
      
          // 2. Log outcome to PsychoJS data file
          psychoJS.experiment.addData("selected_final_outcome", selected_outcome);
      
          // 3. Evaluate selected outcome
          if (selected_outcome >= 50) {
              final_outcome = "self";
              final_task_text = "You are selected to write about a personal travel experience or visit to an unfamiliar place that changed your personal perspective or made you step outside your comfort zone.";
          } else {
              final_outcome = "comment";
              final_task_text = "You are selected to comment on the opinion from a travel writer: 'Tourism ultimately harms local communities and dilutes authentic culture.'";
          }
      } else {
          final_task_text = "No outcome recorded.";
      }
      task_text.setText(final_task_text);
      FinalDisplay_continue_resp.keys = undefined;
      FinalDisplay_continue_resp.rt = undefined;
      _FinalDisplay_continue_resp_allKeys = [];
      psychoJS.experiment.addData('FinalDisplay.started', globalClock.getTime());
      FinalDisplayMaxDuration = null
      // keep track of which components have finished
      FinalDisplayComponents = [];
      FinalDisplayComponents.push(waiting_text);
      FinalDisplayComponents.push(task_text);
      FinalDisplayComponents.push(FinalDisplay_continue_text);
      FinalDisplayComponents.push(FinalDisplay_continue_resp);
      
      for (const thisComponent of FinalDisplayComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function FinalDisplayRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'FinalDisplay' ---
      // get current time
      t = FinalDisplayClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *waiting_text* updates
      if (t >= 0 && waiting_text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        waiting_text.tStart = t;  // (not accounting for frame time here)
        waiting_text.frameNStart = frameN;  // exact frame index
        
        waiting_text.setAutoDraw(true);
      }
      
      
      // if waiting_text is active this frame...
      if (waiting_text.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *task_text* updates
      if (t >= 3.5 && task_text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        task_text.tStart = t;  // (not accounting for frame time here)
        task_text.frameNStart = frameN;  // exact frame index
        
        task_text.setAutoDraw(true);
      }
      
      
      // if task_text is active this frame...
      if (task_text.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *FinalDisplay_continue_text* updates
      if (t >= 6 && FinalDisplay_continue_text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        FinalDisplay_continue_text.tStart = t;  // (not accounting for frame time here)
        FinalDisplay_continue_text.frameNStart = frameN;  // exact frame index
        
        FinalDisplay_continue_text.setAutoDraw(true);
      }
      
      
      // if FinalDisplay_continue_text is active this frame...
      if (FinalDisplay_continue_text.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *FinalDisplay_continue_resp* updates
      if (t >= 6 && FinalDisplay_continue_resp.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        FinalDisplay_continue_resp.tStart = t;  // (not accounting for frame time here)
        FinalDisplay_continue_resp.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { FinalDisplay_continue_resp.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { FinalDisplay_continue_resp.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { FinalDisplay_continue_resp.clearEvents(); });
      }
      
      // if FinalDisplay_continue_resp is active this frame...
      if (FinalDisplay_continue_resp.status === PsychoJS.Status.STARTED) {
        let theseKeys = FinalDisplay_continue_resp.getKeys({
          keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
          waitRelease: false
        });
        _FinalDisplay_continue_resp_allKeys = _FinalDisplay_continue_resp_allKeys.concat(theseKeys);
        if (_FinalDisplay_continue_resp_allKeys.length > 0) {
          FinalDisplay_continue_resp.keys = _FinalDisplay_continue_resp_allKeys[_FinalDisplay_continue_resp_allKeys.length - 1].name;  // just the last key pressed
          FinalDisplay_continue_resp.rt = _FinalDisplay_continue_resp_allKeys[_FinalDisplay_continue_resp_allKeys.length - 1].rt;
          FinalDisplay_continue_resp.duration = _FinalDisplay_continue_resp_allKeys[_FinalDisplay_continue_resp_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of FinalDisplayComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function FinalDisplayRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'FinalDisplay' ---
      for (const thisComponent of FinalDisplayComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('FinalDisplay.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(FinalDisplay_continue_resp.corr, level);
      }
      psychoJS.experiment.addData('FinalDisplay_continue_resp.keys', FinalDisplay_continue_resp.keys);
      if (typeof FinalDisplay_continue_resp.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('FinalDisplay_continue_resp.rt', FinalDisplay_continue_resp.rt);
          psychoJS.experiment.addData('FinalDisplay_continue_resp.duration', FinalDisplay_continue_resp.duration);
          routineTimer.reset();
          }
      
      FinalDisplay_continue_resp.stop();
      // the Routine "FinalDisplay" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var WrittingTaskMaxDurationReached;
var gotValidClick;
var total_duration;
var WrittingTaskMaxDuration;
var WrittingTaskComponents;
function WrittingTaskRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'WrittingTask' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      WrittingTaskClock.reset();
      routineTimer.reset();
      WrittingTaskMaxDurationReached = false;
      // update component parameters for each repeat
      // setup some python lists for storing info about the mouse
      // current position of the mouse:
      mouse.x = [];
      mouse.y = [];
      mouse.leftButton = [];
      mouse.midButton = [];
      mouse.rightButton = [];
      mouse.time = [];
      gotValidClick = false; // until a click is received
      final_task_input_box.setText('');
      final_task_input_box.refresh();
      // reset submit_button to account for continued clicks & clear times on/off
      submit_button.reset()
      // Run 'Begin Routine' code from submit_button_code
      total_duration = 300; // 5 minutes in seconds
      timer_text.setText("Time remaining: 5 minutes");
      
      psychoJS.window.mouseVisible = true;
      
      // Assign button click handler directly to the component
      submit_button.callback = function() {
          let typed_text_response = final_task_input_box.text;
      
          if (typed_text_response && typed_text_response.trim().length > 0) {
              psychoJS.experiment.addData('typed_text_response', typed_text_response);
              continueRoutine = false;
          }
      };
      psychoJS.experiment.addData('WrittingTask.started', globalClock.getTime());
      WrittingTaskMaxDuration = null
      // keep track of which components have finished
      WrittingTaskComponents = [];
      WrittingTaskComponents.push(mouse);
      WrittingTaskComponents.push(final_task_input_box);
      WrittingTaskComponents.push(submit_button);
      WrittingTaskComponents.push(timer_text);
      
      for (const thisComponent of WrittingTaskComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function WrittingTaskRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'WrittingTask' ---
      // get current time
      t = WrittingTaskClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      // *mouse* updates
      if (t >= 60 && mouse.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        mouse.tStart = t;  // (not accounting for frame time here)
        mouse.frameNStart = frameN;  // exact frame index
        
        mouse.status = PsychoJS.Status.STARTED;
        mouse.mouseClock.reset();
        prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
      frameRemains = 60 + 240 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (mouse.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        mouse.tStop = t;  // not accounting for scr refresh
        mouse.frameNStop = frameN;  // exact frame index
        // update status
        mouse.status = PsychoJS.Status.FINISHED;
        mouse.status = PsychoJS.Status.FINISHED;
      }
      
      // if mouse is active this frame...
      if (mouse.status === PsychoJS.Status.STARTED) {
        _mouseButtons = mouse.getPressed();
        if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
          prevButtonState = _mouseButtons;
          if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
            _mouseXYs = mouse.getPos();
            mouse.x.push(_mouseXYs[0]);
            mouse.y.push(_mouseXYs[1]);
            mouse.leftButton.push(_mouseButtons[0]);
            mouse.midButton.push(_mouseButtons[1]);
            mouse.rightButton.push(_mouseButtons[2]);
            mouse.time.push(mouse.mouseClock.getTime());
          }
        }
      }
      
      // *final_task_input_box* updates
      if (t >= 0 && final_task_input_box.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        final_task_input_box.tStart = t;  // (not accounting for frame time here)
        final_task_input_box.frameNStart = frameN;  // exact frame index
        
        final_task_input_box.setAutoDraw(true);
      }
      
      
      // if final_task_input_box is active this frame...
      if (final_task_input_box.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0 + 300 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (final_task_input_box.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        final_task_input_box.tStop = t;  // not accounting for scr refresh
        final_task_input_box.frameNStop = frameN;  // exact frame index
        // update status
        final_task_input_box.status = PsychoJS.Status.FINISHED;
        final_task_input_box.setAutoDraw(false);
      }
      
      
      // *submit_button* updates
      if (t >= 60 && submit_button.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        submit_button.tStart = t;  // (not accounting for frame time here)
        submit_button.frameNStart = frameN;  // exact frame index
        
        submit_button.setAutoDraw(true);
      }
      
      
      // if submit_button is active this frame...
      if (submit_button.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 60 + 240 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (submit_button.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        submit_button.tStop = t;  // not accounting for scr refresh
        submit_button.frameNStop = frameN;  // exact frame index
        // update status
        submit_button.status = PsychoJS.Status.FINISHED;
        submit_button.setAutoDraw(false);
      }
      
      if (submit_button.status === PsychoJS.Status.STARTED) {
        // check whether submit_button has been pressed
        if (submit_button.isClicked) {
          if (!submit_button.wasClicked) {
            // store time of first click
            submit_button.timesOn.push(submit_button.clock.getTime());
            // store time clicked until
            submit_button.timesOff.push(submit_button.clock.getTime());
          } else {
            // update time clicked until;
            submit_button.timesOff[submit_button.timesOff.length - 1] = submit_button.clock.getTime();
          }
          if (!submit_button.wasClicked) {
            // end routine when submit_button is clicked
            continueRoutine = false;
            
          }
          // if submit_button is still clicked next frame, it is not a new click
          submit_button.wasClicked = true;
        } else {
          // if submit_button is clicked next frame, it is a new click
          submit_button.wasClicked = false;
        }
      } else {
        // keep clock at 0 if submit_button hasn't started / has finished
        submit_button.clock.reset();
        // if submit_button is clicked next frame, it is a new click
        submit_button.wasClicked = false;
      }
      // Run 'Each Frame' code from submit_button_code
      let time_remaining = total_duration - t;
      
      // Calculate remaining minutes (rounds up)
      let minutes_left = Math.ceil(time_remaining / 60);
      
      if (time_remaining <= 0) {
          // Save text response and force end of routine when 5 minutes expire
          psychoJS.experiment.addData('textbox_final_text', final_task_input_box.text);
          continueRoutine = false;
      } else {
          // Update visual text
          let unit_label = (minutes_left === 1) ? "minute" : "minutes";
          timer_text.setText(`Time remaining: ${minutes_left} ${unit_label}`);
      }
      
      
      // *timer_text* updates
      if (t >= 0 && timer_text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        timer_text.tStart = t;  // (not accounting for frame time here)
        timer_text.frameNStart = frameN;  // exact frame index
        
        timer_text.setAutoDraw(true);
      }
      
      
      // if timer_text is active this frame...
      if (timer_text.status === PsychoJS.Status.STARTED) {
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of WrittingTaskComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function WrittingTaskRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'WrittingTask' ---
      for (const thisComponent of WrittingTaskComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('WrittingTask.stopped', globalClock.getTime());
      // store data for psychoJS.experiment (ExperimentHandler)
      psychoJS.experiment.addData('mouse.x', mouse.x);
      psychoJS.experiment.addData('mouse.y', mouse.y);
      psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
      psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
      psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
      psychoJS.experiment.addData('mouse.time', mouse.time);
      
      psychoJS.experiment.addData('final_task_input_box.text',final_task_input_box.text)
      psychoJS.experiment.addData('submit_button.numClicks', submit_button.numClicks);
      psychoJS.experiment.addData('submit_button.timesOn', submit_button.timesOn);
      psychoJS.experiment.addData('submit_button.timesOff', submit_button.timesOff);
      // Run 'End Routine' code from submit_button_code
      psychoJS.experiment.addData('typed_text_response', final_task_input_box.text);
      // the Routine "WrittingTask" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
function importConditions(currentLoop) {
    return async function () {
      psychoJS.importAttributes(currentLoop.getCurrentTrial());
      return Scheduler.Event.NEXT;
      };
  }
  
  
async function quitPsychoJS(message, isCompleted) {
    // Check for and save orphaned data
    if (psychoJS.experiment.isEntryEmpty()) {
      psychoJS.experiment.nextEntry();
    }
    psychoJS.window.close();
    psychoJS.quit({message: message, isCompleted: isCompleted});
    
    return Scheduler.Event.QUIT;
  }
