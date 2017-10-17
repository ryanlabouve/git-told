#!/usr/bin/env node
const argv = require('yargs')
  .option('voice', {
    alias: 'v',
    describe: 'Choose reader voice'
  })
  .help('help')
  .argv

if (argv.help) {
  return;
}

let gitTold = require('../index.js');
let params = {};

if (argv.voice) {
  params.voice = argv.voice
}

gitTold(params);
