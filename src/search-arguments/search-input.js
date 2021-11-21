const customStreams = require('../streams/index');
const { stdin } = require('process');


const searchInput = (arrArguments) => {
  return arrArguments.indexOf('-i') + 1 || arrArguments.indexOf('--input') + 1 ? customStreams.readStream : stdin;
};


module.exports = searchInput;