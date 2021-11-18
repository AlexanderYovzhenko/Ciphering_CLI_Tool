const { pipeline }  = require('stream');
const errors = require('../errors/errors');
const errorHandler = require('../errors/error-handler');


const pipeStreams = (argStreams) => {  
  pipeline(
    ...argStreams,
    err => {
      if(err)  errorHandler(new errors.PipelineStreamsError('Pipeline streams error!', 5));
    } 
  );
};


module.exports = {
  pipeStreams,
};