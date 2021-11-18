const decodeRot = (data) => {
  const arrChars = [];
  const shift = -8;

  data.split('').forEach(char => {
    if(char.match(/[A-Za-z]/)) {
      if(char.charCodeAt(0) <= 72) {
        arrChars.push(String.fromCharCode(91 - (65 - (char.charCodeAt(0) + shift))));
      } else if(char.charCodeAt(0) <= 104 && char.charCodeAt(0) > 90) {
        arrChars.push(String.fromCharCode(123 - (97 - (char.charCodeAt(0) + shift))));
      } else {
        arrChars.push(String.fromCharCode(char.charCodeAt(0) + shift));
      }
    } else {
      arrChars.push(char);
    }
  });
  return arrChars.join('');
};


module.exports = decodeRot;