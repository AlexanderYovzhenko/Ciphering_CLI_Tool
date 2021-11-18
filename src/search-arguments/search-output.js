const customStreams = require('../streams/index');
const arrArguments = process.argv.slice(2);
const { stdout } = require('process');


const searchOutput = () => {
  return arrArguments.indexOf('-o') + 1 || arrArguments.indexOf('--output') + 1 ? customStreams.writeStream : stdout;
};


module.exports = searchOutput;