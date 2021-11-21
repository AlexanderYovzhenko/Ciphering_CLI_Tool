const customStreams = require('../streams/index');
const { stdout } = require('process');


const searchOutput = (arrArguments) => {
  return arrArguments.indexOf('-o') + 1 || arrArguments.indexOf('--output') + 1 ? customStreams.writeStream : stdout;
};


module.exports = searchOutput;