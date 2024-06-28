  'use strict'

  const changeString = (line) => {
    let invertedString = '';
    for (let x = line.length - 1; x >= 0; x--) {
      invertedString = invertedString + line[x];
    }
    return invertedString;
  }

  const invertedString = changeString('Привет мир');
  console.log('перевернутая строка:' , invertedString)