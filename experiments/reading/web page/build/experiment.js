"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pushkinJspsych = _interopRequireDefault(require("pushkin-jspsych"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var experimentConfig = require('./config')["default"];

var stimArray = require('./stim')["default"];

var debrief = require('./debrief.js')["default"];

var consent = require('./consent.js')["default"];

require("./jspsych-moving-window.js");

var timeline = [];
var welcome = {
  type: 'html-keyboard-response',
  stimulus: consent + '<p>Press spacebar to continue.</p>',
  choices: [32]
};
var instructions = {
  type: 'html-keyboard-response',
  stimulus: '<div>You will be reading excerpts of text, using the spacebar to move through words.</div><br/><div>Press spacebar to continue.</div>'
};
var trial = {
  timeline: [{
    type: 'html-keyboard-response',
    stimulus: '<div>Press spacebar when you are ready to read some text.</div>'
  }, {
    type: 'moving-window',
    words: _pushkinJspsych["default"].timelineVariable('sentence'),
    rate: experimentConfig.displayType + experimentConfig.displayRate
  }],
  timeline_variables: stimArray
};
var summary = {
  type: 'html-keyboard-response',
  stimulus: debrief,
  choices: _pushkinJspsych["default"].NO_KEYS
};
timeline.push(welcome, instructions, trial, summary);
var _default = timeline;
exports["default"] = _default;