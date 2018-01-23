const socialScanner = require('../lib/index');

socialScanner('codekraft-studio', {
  restrict: ['github'],
  capture: true,
  screenshotOptions: {
    onlySuccess: false
  }
}, (err, response) => {
  if (err) {
    console.log('Error:', JSON.stringify(err, null, 2));
    return;
  }
  console.log('Response:', JSON.stringify(response, null, 2));
});
