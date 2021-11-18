const cipherAtbash = (data) => {
  const arrChars = [];
  const arrayUnicodeLowerChars = [];
  const arrayUnicodeUpperChars = [];

  for (let i = 97; i <= 122; i++) {
    arrayUnicodeLowerChars.push(i);
  }
  for (let i = 65; i <= 90; i++) {
    arrayUnicodeUpperChars.push(i);
  }

  data.split('').forEach(char => {
    if(char.match(/[A-Za-z]/)) {
      if(char.charCodeAt(0) > 90) {
        arrChars.push(String.fromCharCode(arrayUnicodeLowerChars[arrayUnicodeLowerChars.length - 1 - arrayUnicodeLowerChars.indexOf(char.charCodeAt(0))]));
      } else {
        arrChars.push(String.fromCharCode(arrayUnicodeUpperChars[arrayUnicodeUpperChars.length - 1 - arrayUnicodeUpperChars.indexOf(char.charCodeAt(0))]));
      }
    } else {
      arrChars.push(char);
    }
  });
  return arrChars.join('');
};


module.exports = cipherAtbash;