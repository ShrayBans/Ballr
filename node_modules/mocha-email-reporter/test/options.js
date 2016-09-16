const EmailReporter = require('..');
const Mocha = require('mocha');
const expect = require('expect');
const hookStdOut = require('../util/hookStdOut');

describe('Email reporter', () => {
  var unhook;
  var output;
  var mocha;
  
  const header = 'this is a header';
  const footer = 'this is a footer';
  
  before(() => {
    unhook = hookStdOut((string, encoding, fd) => {
      output += string;
    });
    
    mocha = new Mocha({
      timeout: 5000
    });

    mocha.addFile(`${__dirname}/mock/mockTest.js`);
  });
  
  after(() => {
    unhook();
  });
  
  beforeEach(() => {
    output = '';
  });
  
  it('writes header and footer if options provided', (done) => {
    
    mocha.reporter(EmailReporter, { header: header, footer: footer }).run((failures) => {
      expect(failures).toEqual(1);
      expect(output).toBeA('string');
      expect(output.length).toBeGreaterThan(1);
      expect(output).toInclude(header);
      expect(output).toInclude(footer);
      done();
    });
  });
});
