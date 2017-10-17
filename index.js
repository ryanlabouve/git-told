'use strict'
const gaze = require('gaze');
const path = require('path');
const { log } = console;

let head = path.join(__dirname, '.git', 'HEAD');

gaze(head, function(err, watcher) {
  this.on('changed', function(filepath) {
    console.log(filepath + ' was changed');
  });
});

log(`Starting to watch ${head} for changes`);
