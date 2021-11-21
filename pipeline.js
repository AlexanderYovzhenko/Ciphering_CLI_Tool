const { pipeline }  = require('stream');
const errors = require('./errors');
const errorHandler = require('./error-handler');


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