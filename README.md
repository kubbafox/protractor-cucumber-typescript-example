# protractor-cucumber-typescript-example

> A simple example to use protractor, cucumber.js and typescript to preform E2E testing.
                                                                                       
## Introduction

Hello, this is an end-to-end testing sample project by using protractor (Selenium wrapper) and cucumber.js to test web applications. I am using an Angular 5 SPA as the test target, but you can use it and test any web application. It is not an Angular depended project.

## Requirements

This project needs Node.js and Java to run.

- [Node.js](https://nodejs.org/en/) (8.11)
- [Java 8](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) (8u191)

### File Structures 

`.circleci` Configuration to run E2E as part of CI/CD pipe. Using CircleCi as an example.

`data` Where we load test data, it can (should) be replaced by a API service to get data from DB. For now we use a `test-actors.json` to mock the response.

`features` Cucumber test features are located here.

`pages` Page objects

`step_definitions` The test specs which are invoked by features.

`conf.ts` Configuration for protractor and cucumber

`package.json` Project dependencies

```
+-- .circleci
|   +-- config.yml
+-- data
|   +-- test-actors.json
|   +-- user.data.ts
+-- feature
|   +-- register.feature
+-- pages
|   +-- register-page.po.ts
+-- step_definitions
|   +-- register-step-definitions.ts
+-- package.json
+-- tsconfig.json
+-- conf.ts
```


#### Setup Project in 2 minutes 
Run the following commands to setup project.
```
$ cd /path/to/new-repository
$ git clone https://github.com/kubbafox/protractor-cucumber-typescript-example.git
$ npm install
$ npm run dev
$ npm run pretest
$ npm run startTest 
```

## Contact Us

Free feel to contact [Servicing Platform team](mailto:servicing-platform@bestegg.com) if you have any questions :D
