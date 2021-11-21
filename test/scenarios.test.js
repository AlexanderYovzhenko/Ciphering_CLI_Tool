const { execFile } = require('child_process');

describe('Success scenarios', () => {
  const resultOne = 'Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!';
  const resultTwo = 'Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!';
  const resultThree = 'Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!';
  const resultFour = 'This is secret. Message about "_" symbol!';
  
  test('should work properly if the config is correct', () => {
    execFile('node', ['my_ciphering_cli', '--config', 'C1-C1-R0-A-C1-C0-A-R1-R0-A-R0-R0-C1-A-A-A-A-R1-R0-R0-R0-C1-C1-A', '-i', './input.txt'], (error, stdout, stderr) => {
      if(error) {}
      else {
        expect(stdout).toEqual('Qefp fp pbzobq. Jbppxdb xylrq "_" pvjyli!');
      }    
    });
  });

  test('should be equal to result one', () => {
    execFile('node', ['my_ciphering_cli', '-c', 'C1-C1-R0-A', '-i', './input.txt'], (error, stdout, stderr) => {
      if(error) {}
      else {
        expect(stdout).toEqual(resultOne);
      }    
    });
  });

  test('should be equal to result two', () => {
    execFile('node', ['my_ciphering_cli', '-c', 'C1-C0-A-R1-R0-A-R0-R0-C1-A', '-i', './input.txt'], (error, stdout, stderr) => {
      if(error) {}
      else {
        expect(stdout).toEqual(resultTwo);
      }
    });
  });

  test('should be equal to result three', () => {
    execFile('node', ['my_ciphering_cli', '-c', 'A-A-A-R1-R0-R0-R0-C1-C1-A', '-i', './input.txt'], (error, stdout, stderr) => {
      if(error) {}
      else {
        expect(stdout).toEqual(resultThree);
      }
    });
  });

  test('should be equal to result four', () => {
    execFile('node', ['my_ciphering_cli', '-c', 'C1-R1-C0-C0-A-R0-R1-R1-A-C1', '-i', './input.txt'], (error, stdout, stderr) => {
      if(error) {}
      else {
        expect(stdout).toEqual(resultFour);
      }
    });
  });
});

describe('Error scenarios', () => {
  const resultErrorOne = "Error: Don't duplicate arguments!";
  const resultErrorTwo = "Error: Missing Config!";
  const resultErrorThree = "Error: File not found, check file:";
  const resultErrorAccessThree = "Error: File access denied, check file:";
  const resultErrorFour = "Error: File not found, check file:";
  const resultErrorAccessFour = "Error: File access denied, check file:";
  const resultErrorFive = "Error: Config is not correct!";
  

  test('should be equal to result error one', () => {
    execFile('node', ['my_ciphering_cli', '-c', 'C1-C1-R0-A', '-i', './input.txt', '-c', 'C1'], (error, stdout, stderr) => {
      expect(stderr).toEqual(resultErrorOne);
    });
  });

  test('should be equal to result error two', () => {
    execFile('node', ['my_ciphering_cli', '-i', './input.txt'], (error, stdout, stderr) => {
      expect(stderr).toEqual(resultErrorTwo);
    });
  });

  test('should be equal to result error three', () => {
    execFile('node', ['my_ciphering_cli', '-c', 'C1-C1-R0-A', '-i', './inpt.txt'], (error, stdout, stderr) => {
      expect(stderr).toMatch(`${resultErrorThree} ${error.message.split(' ')[error.message.split(' ').length - 1]}`);
    });
  });

  test('should be equal to result error access three', () => {
    execFile('node', ['my_ciphering_cli', '-c', 'C1-C1-R0-A', '-i', './input.txt'], (error, stdout, stderr) => {
      if(error) expect(stderr).toMatch(`${resultErrorAccessThree} ${error.message.split(' ')[error.message.split(' ').length - 1]}`);
    });
  });

  test('should be equal to result error four', () => {
    execFile('node', ['my_ciphering_cli', '-c', 'C1-C1-R0-A', '-o', './outpu.txt'], (error, stdout, stderr) => {
      expect(stderr).toMatch(`${resultErrorFour} ${error.message.split(' ')[error.message.split(' ').length - 1]}`);
    });
  });

  test('should be equal to result error access four', () => {
    execFile('node', ['my_ciphering_cli', '-c', 'C1-C1-R0-A', '-i', './input.txt', '-o', './output.txt'], (error, stdout, stderr) => {
      if(error) expect(stderr).toMatch(`${resultErrorAccessFour} ${error.message.split(' ')[error.message.split(' ').length - 1]}`);
    });
  });

  test('should be equal to result error five', () => {
    execFile('node', ['my_ciphering_cli', '-c', 'C3-C1-R-A1', '-i', './input.txt'], (error, stdout, stderr) => {
      expect(stderr).toEqual(resultErrorFive);
    });
  });
});