const EmailReporter = require('..');
const Mocha = require('mocha');
const expect = require('expect');
const hookStdOut = require('../util/hookStdOut');
const fs = require('fs');

const jsonFilePath = `${__dirname}/output.json`;

describe('Email reporter', () => {
  var unhook;
  var output;
  var mocha;
  
  before(() => {
    unhook = hookStdOut((string, encoding, fd) => {
      output += string;
    });
        
    try { fs.unlinkSync(jsonFilePath); } catch (e) {  }
    
    mocha = new Mocha({
      timeout: 5000
    });

    mocha.addFile(`${__dirname}/mock/mockTest.js`);
  });
  
  after(() => {
    unhook();
    
    try {
      fs.unlinkSync(jsonFilePath);      
    } catch (err) {
      console.log('file did not exist');
    }
  });
  
  beforeEach(() => {
    output = '';
  });
  
  afterEach(() => {
    mocha = undefined;
  });
  
  // it('generates a string', (done) => {
  //   
  //   mocha.reporter(EmailReporter).run((failures) => {
  //     // expect(failures).toEqual(1);
  //     console.log(failures);
  //     expect(output).toBeA('string');
  //     // expect(output.length).toBeGreaterThan(1);
  //     
  //     done();
  //   });
  // });
  
  it('writes a file if json option is true', (done) => {
    
    mocha.reporter(EmailReporter, { json: jsonFilePath }).run((failures) => {
      expect(failures).toEqual(1);
      expect(output).toBeA('string');
      expect(output.length).toBeGreaterThan(1);
      
      fs.stat(jsonFilePath, (err, stat) => {
        expect(err).toNotExist();
        
        expect(stat.isFile()).toEqual(true);
        
        var json = require(jsonFilePath);
        
        expect(json.suites['a test suite']['should pass this test'].pass).toEqual(true);
        expect(json.suites['a test suite']['should fail this test'].pass).toEqual(false);
        
        done();
      });
      
    });
  });
});
