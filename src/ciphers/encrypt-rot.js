const encryptRot = (data) => {
  const arrChars = [];
  const shift = 8;

  data.split('').forEach(char => {
    if(char.match(/[A-Za-z]/)) {
      if(char.charCodeAt(0) > 82 && char.charCodeAt(0) < 97) {
        arrChars.push(String.fromCharCode(64 + char.charCodeAt(0) + shift - 90));
      } else if(char.charCodeAt(0) > 114) {
        arrChars.push(String.fromCharCode(96 + char.charCodeAt(0) + shift - 122));
      } else {
        arrChars.push(String.fromCharCode(char.charCodeAt(0) + shift));
      }
    } else {
      arrChars.push(char);
    }
  });
  return arrChars.join('');
};


module.exports = encryptRot;