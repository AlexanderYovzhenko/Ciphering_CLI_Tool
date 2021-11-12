const errorHandler = (err) => {
  const { isUserError } = err;
  if(isUserError) {
    process.stderr.write('Error: ' + err.message);
    process.exit(err.code); 
  } else if(err.code === 'ENOENT' || err.code === 'EPERM') {
    const file = err.message.split(' ')[err.message.split(' ').length - 1];
    err.message.includes('such') ? process.stderr.write(`Error: File not found, check file: ${file}`) : process.stderr.write(`Error: File access denied, check file: ${file}`);
    process.exit(4);
  } else {
    throw err;
  }
};

module.exports = errorHandler;