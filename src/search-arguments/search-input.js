const customStreams = require('../streams/index');
const arrArguments = process.argv.slice(2);
const { stdin } = require('process');


const searchInput = () => {
  return arrArguments.indexOf('-i') + 1 || arrArguments.indexOf('--input') + 1 ? customStreams.readStream : stdin;
};


module.exports = searchInput;