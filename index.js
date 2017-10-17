'use strict'
const fs = require('fs');
const gaze = require('gaze');
const path = require('path');
const { log } = console;

let head = path.join(__dirname, '.git', 'HEAD');

let readFile = (filename, cb) => {
  fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) throw err;
    cb(data);
  });
}

let branchNameFromHEAD = (ref) => ref.split('/').slice(-1)[0];

gaze(head, function(err, watcher) {
  this.on('changed', function(filepath) {
    readFile(head, (data) => {
      let sayContent = branchNameFromHEAD(data);
      console.log(sayContent);
    });
  });
});

log(`Starting to watch ${head} for changes`);
