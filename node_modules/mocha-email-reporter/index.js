const Base = require('mocha').reporters.Base;
const fs = require('fs');
const ejs = require('ejs');

const outputFile = './output.json';
const emailTemplate = ejs.compile(fs.readFileSync(`${__dirname}/lib/layout.ejs`, 'utf8'));

/**
* @param runner
* @param options (Object) - available options:
*   json: (Boolean [false]) - write json file, will be called output.json
*/
function EmailReporter(runner, options) {
  var self = this;
  Base.call(self, runner);

  self.reporterOptions = options && options.reporterOptions ? options.reporterOptions : {};

  self.result = {
    suites: {},
    totalPasses: 0,
    totalFailures: 0
  };

  runner.on('suite', (suite) => {
    var title = suite.title;
    if (!title) title = 'blankTitle';

    self.result.suites[title] = {
      file: suite.file,
      tests: {}
    };
  });

  runner.on('test', (test) => {
    self.result.suites[test.parent.title].tests[test.title] = {
      start: Date.now()
    };
    // self.result.suites[test.parent.title][tests][test.title].start = Date.now();
    // self.result.suites[test.parent.title][test.title].file = test.file;
  });

  runner.on('test end', (test) => {
    var start = self.result.suites[test.parent.title].tests[test.title].start;
    self.result.suites[test.parent.title].tests[test.title].duration = Date.now() - start;
    if (test.err) self.result.suites[test.parent.title].tests[test.title].err = test.err;
  });

  runner.on('pass', (test) => {
    self.result.suites[test.parent.title].tests[test.title].pass = true;
    self.result.totalPasses += 1;
  });

  runner.on('fail', (test, err) => {
    const suite = self.result.suites[test.parent.title];
    if (suite.tests[test.title]) {
      suite.tests[test.title].pass = false;
    } else {
      // failed early
      suite.tests.beforeHook = {};
      suite.tests.beforeHook.pass = false;
    }

    self.result.totalFailures += 1;
  });

  runner.on('end', () => {
    if (self.reporterOptions.json) fs.writeFileSync(self.reporterOptions.json, JSON.stringify(self.result, null, 2));

    process.stdout.write(emailTemplate({
      results: self.result,
      headerContent: self.reporterOptions.header || '',
      footerContent: self.reporterOptions.footer || ''
    }));
  });
}

module.exports = EmailReporter;
