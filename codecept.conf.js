const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './tests/output',
  helpers: {
    Protractor: {
      url: 'http://localhost:8100',
      driver: 'hosted',
      browser: 'chrome',
      rootElement: 'body',
      angular: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'PelisDB2',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: false
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  }
};