const encryptСaesar = (data) => {
  const arrChars = [];
  const shift = 1;

  data.split('').forEach(char => {
    if(char.match(/[A-Za-z]/)) {
      switch (char.charCodeAt(0)) {
        case 90:
          arrChars.push(String.fromCharCode(64 + shift));
          break;
        case 122:
          arrChars.push(String.fromCharCode(96 + shift));
          break;
        default:
          arrChars.push(String.fromCharCode(char.charCodeAt(0) + shift));
          break;
      }
    } else {
      arrChars.push(char);
    }
  });
  return arrChars.join('');
};


module.exports = encryptСaesar;