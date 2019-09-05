# Nightwatch.js End-to-End Browser Automation

[Nightwatch](http://nightwatchjs.org/) is an automated testing framework for web applications and websites, written in [Node.js](https://nodejs.org/en/) and using the [W3C WebDriver API](https://www.w3.org/TR/webdriver/) (formerly [Selenium WebDriver](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol)) to perform browser automation related tasks, like opening windows and clicking links for instance.

WebDriver is now a W3C specification, which aims to standardize browser automation. WebDriver is a remote control interface that enables introspection and control of user agents. It provides a platform and a restful HTTP API as a way for web browsers to be remotely controlled.

## 1. Getting Started

This document assumes you've already cloned the infusionsoft-core-automation repo, and ran a `yarn` or `yarn install` to download all necessary dependencies.

If you are running into an 'Unauthorized' error when running `yarn` or `yarn install` it is likely you need to complete your authetication with JFrog.

**This only needs to be done once.**

1. Run `npm config set registry https://infusionsoft.jfrog.io/infusionsoft/api/npm/npm/`
2. Run `npm config set email <KEAP_EMAIL>`
3. Login to JFrog through Okta
4. Go to your [profile](https://infusionsoft.jfrog.io/infusionsoft/webapp/#/profile)
5. Copy your API Key
6. Run the following with your API key and username (that's just your `firstName.lastName` probably):
    * ```curl -u <USER_NAME>:<API_KEY> https://infusionsoft.jfrog.io/infusionsoft/api/npm/auth >> ~/.npmrc```
7. The resulting ~/.npmrc file should look similar to this:

```
registry = https://infusionsoft.jfrog.io/infusionsoft/api/npm/npm/
email = your.email@keap.com
_auth = your_auth_token
always-auth = true
```

## 2. Running Tests

```
Please note: Nightwatch will automatically take care of spinning up
the WebDriver for you, as well as tear it down after the run(s) complete.
No additional configuration for that service should be required.
```

Running all tests, using the default config is as simple as running the corresponding `nightwatch` command from the root directory of infusionsoft-core-automation. This document provides all commands using the project's version of nightwatch i.e. `node_modules/.bin/nightwatch`:
``` bash
# The below command will run all tests using the default configuration,
# and using the project's version of nightwatch
npx nightwatch
```

If you have the correct version of nightwatch installed globally, then you can run all your commands from the root using just `nightwatch`:
``` bash
# The below command will run all tests using the default configuration,
# using the globally installed version of nightwatch
nightwatch
```

Running individual tests is as simple as passing the path (starting from the project root directory) of the test file to the nightwatch runner:
``` bash
# The below command will run the LoginTest only
yarn test src/tests/smoke/LoginTest.e2e.js

# You can run multiple individual tests by passing additional test file paths as
# additional parameters with a space between them
npx nightwatch src/tests/smoke/LoginTest.e2e.js src/tests/smoke/SomeOtherTest.e2e.js

# You can run individual tests using the -g (group) flag as well, but keep in mind
# that means the path(s) will need to start relative to the root of the 'src/tests' folder
npx nightwatch -g smoke/LoginTest.e2e.js
npx nightwatch -g regression/SomeRegressionTest.e2e.js

# To run all tests within a given folder, use the -g (group) flag passing just the path
# (again relative to the 'src/tests' folder) of the folder you want to run
npx nightwatch -g smoke
npx nightwatch -g regression/tasks
```

Additionally, you can use the prebuilt scripts in the package.json to run tests as well:
``` bash
# The below command will run all tests using the default configuration
yarn test

# The below command will run all tests using the CI configuration
yarn test:ci
```

## 3. Adding or Updating Tests

If you would like to add or update any tests, please follow our e2e guidelines for Nightwatch located here: [End-To-End Testing with Nightwatch.js](https://github.com/infusionsoft/engineering-handbook/blob/master/coding-guidelines/front-end-web/e2e-testing-with-nightwatch.md)

## 4. Advanced Info & Commands

### Nightwatch Configuration

The test runner expects a configuration file to be passed, using (by default) a `nightwatch.json` file from the current directory, if present. A `nightwatch.conf.js` file will also be loaded by default, if found. Using both configuration files is also possible, with `nightwatch.conf.js` always taking precedence if both are found.

```
Default configuration is the nightwatch.json file in the project root directory.
```

CircleCI requires some additional & separate configuration so we use an additional config file for that:

```
CircleCI configuration is the nightwatch.ci.js file in the project root directory.
```

### Global Installation of Nightwatch

In order to be able to run nightwatch commands from any directory, install nightwatch 'globally' using the following command:

``` bash
# This command installs nightwatch 'globally' so the nightwatch commands can be ran from any directory.
npm install -g nightwatch
```
