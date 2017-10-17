'use strict'
const fs = require('fs');
const path = require('path');
const { log } = console;

let head = path.join(__dirname, '.git', 'HEAD');

fs.watch(head, () => log('Git happened!'));
log(`Starting to watch ${head} for changes`);
