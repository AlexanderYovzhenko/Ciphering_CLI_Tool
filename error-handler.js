const errorHandler = (err) => {
  const { isUserError } = err;
  if(isUserError) {
    process.stderr.write('Error: ' + err.message);
    process.exit(err.code); 
  } else if(err.code === 'ENOENT' || err.code === 'EPERM') {
    process.stderr.write('Error: ' + err.message.slice(7));
    process.exit(4);
  } else {
    throw err;
  }
};

module.exports = errorHandler;