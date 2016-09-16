var expect = require('expect');

describe('a test suite', () => {
  
  it('should pass this test', () => {
    expect(true).toEqual(true);
  });
  
  it('should fail this test', () => {
    expect(false).toEqual(true);
  });
  
});
