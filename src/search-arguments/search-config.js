const searchConfig = (arrArguments) => {
  const configFlag = arrArguments[arrArguments.indexOf('-c')] || arrArguments[arrArguments.indexOf('--config')];
  return arrArguments[arrArguments.indexOf('-c')] || arrArguments[arrArguments.indexOf('--config')] ? arrArguments[arrArguments.indexOf(configFlag) + 1] : false;
};


module.exports = searchConfig;