# wdio-allure-screenshot
This repository contains some example code for testing why `runner:result` doesn't attach screenshot

## Set up
Clone the repository and run `npm install`
To the test, use command `npm test`

## Test the screenshot feature
In order to disable the `runner:screenshot`, this part of the code in `./node_modules/wdio-allure-reporter/build/reporter.js` has to be commented
```
_this.on('runner:screenshot', function (command) {
        var allure = _this.getAllure(command.cid);

        allure.addAttachment('screenshot-' + command.filename, Buffer.from(command.data, 'base64'));
});
```
