var exec = require('child_process').exec;

let defaultParams = {
  voice: 'Zarvox',
  operation: null,
  content: null
};

let getSentance = (params = { content: null, operation: null}) => {
  const { content, operation } = params;

  switch (operation) {
    case 'branch':
      return `Switched to branch ${content}`;
      break;
    default:
      return content;
  };
}

let say = (params = {}) => {
  console.log(params.content);
  params = Object.assign({}, defaultParams, params);

  const {
    content,
    voice,
    operation
  } = params;

  let sentance = getSentance({content, operation});

  exec(`say -v ${voice} "${sentance}"`);
};

module.exports = (params) => say(params);
