const arrArguments = process.argv.slice(2);
const validationArguments = require('./validation-arguments');
const streamsPoolingPattern = require('./streams-pooling-pattern');
const pipeline = require('./pipeline');
const errorHandler = require('./error-handler');


const searchConfig = () => {
  const configFlag = arrArguments[arrArguments.indexOf('-c')] || arrArguments[arrArguments.indexOf('--config')];
  return arrArguments[arrArguments.indexOf('-c')] || arrArguments[arrArguments.indexOf('--config')] ? arrArguments[arrArguments.indexOf(configFlag) + 1] : false;
};

const startValidation = () => {
  try {
    validationArguments.validationRepeatedArguments(arrArguments); 
    validationArguments.validationConfig(searchConfig());
    if(arrArguments.indexOf('-i') + 1 || arrArguments.indexOf('--input') + 1) validationArguments.validationInput();
    if(arrArguments.indexOf('-o') + 1 || arrArguments.indexOf('--output') + 1) validationArguments.validationOutput();
    const pipelineArguments = streamsPoolingPattern(searchConfig()); 
    pipeline.pipeStreams(pipelineArguments);  
  } catch (err) {
    errorHandler(err);
  }
};

startValidation();