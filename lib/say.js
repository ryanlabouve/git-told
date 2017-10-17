var exec = require('child_process').exec;

let defaultParams = {
  voice: 'Zarvox',
  content: null
};

let say = (params = {}) => {
  console.log(params.content);
  params = Object.assign({}, defaultParams, params);
  const { content, voice } = params;

  exec(`say -v ${voice} "${content}"`);
}

module.exports = (params) => say(params);
