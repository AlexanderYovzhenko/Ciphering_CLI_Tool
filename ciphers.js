//Caesar cipher
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


//Atbash cipher
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


//ROT-8
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


module.exports = {
  encryptСaesar,
  decodeСaesar,
  cipherAtbash,
  encryptRot,
  decodeRot
};