const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
const errorHandler = require('../../src/errors/error-handler');


describe('Check error handler', () => {
  test('should ', () => {
    expect(() => errorHandler(Error)).toThrow(); 
  });
});

mockExit.mockRestore();