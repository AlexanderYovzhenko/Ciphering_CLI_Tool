const decodeСaesar = (data) => {
  const arrChars = [];
  const shift = -1;

  data.split('').forEach(char => {
    if(char.match(/[A-Za-z]/)) {
      switch (char.charCodeAt(0)) {
        case 65:
          arrChars.push(String.fromCharCode(91 + shift));
          break;
        case 97:
          arrChars.push(String.fromCharCode(123 + shift));
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


module.exports = decodeСaesar;