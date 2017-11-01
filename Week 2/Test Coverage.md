# Test Coverage

## What is test coverage?

Test coverage is a measure used to describe the degree to which the source code of a program is executed when a particular test suite runs.

Test coverage tells you when code you have written is being executed so you can decide if un-covered lines are superfluous (and can be removed) or require additional testing.

>### Basic coverage criteria
>* _Function coverage_ – Has each function been called?
>* _Statement coverage_ – Has each statement been executed?
>* _Branch coverage_ – Has each branch been executed? For example, given an if statement, have both the true and false branches been executed?
>* _Condition coverage_ – Has each Boolean sub-expression evaluated both to true and false?

## Why is test coverage useful?

A program with high code coverage, measured as a percentage, has had more of its source code executed during testing which suggests it has a lower chance of containing undetected software bugs compared to a program with low code coverage.

* if un-tested code remains in the codebase it can contain unknown behaviour e.g. bugs
* untested features are more difficult to maintain without introducing breaking changes
* It creates additional test cases to increase coverage
* Identifying meaningless test cases that do not increase coverage
* It helps in determining a quantitative measure of code coverage, which indirectly measure the quality of the application or product. However, 100% doesn't always mean quality code.
* Finding area of a requirement not implemented by a set of test cases
* Code coverage: un-tested code can clutter a project and accumulates technical debt that wastes time


## What are Istanbul and nyc?

### Istanbul
* Istanbul is a code coverage tool which you run locally when executing your unit tests
* It's a node module which you install as a dev dependency: ```npm install istanbul --save-dev```
* It's simple and prints out nice html reports


Supports all JS coverage use cases including unit tests, server side functional tests and browser tests. Built for scale. Is is a useful tool for finding untested parts of a codebase.

### NYC
NYC is the Istanbul command line interface

Nyc adds code coverage metrics into test run output without adding complexity to your test code or build.

## How would you use them to improve your testing?

### Istanbul

Run the following command (in your terminal) to get a coverage report:

`node ./node_modules/.bin/istanbul cover <path to test.js file>`

Open the html file (inside coverage/Icov-report) in your browser for a visual coverage report.

Istanbul gives us four code coverage metrics:

* Statements: How many of the statements in you code are executed.

* Branches: Conditional statements create branches of code which may not be executed (e.g. if/else). This metric tells you how many of your branches have been executed.

* Functions: The proportion of the functions you have defined which have been called.

* Lines: The proportion of lines of code which have been executed.

![](https://i.imgur.com/J2KucsO.png =500x)
![](https://i.imgur.com/ZLbunbj.png =500x)

### NYC

To install globally:

`npm i nyc -g`

Then add the files you wish to include in the report within the package.json file

`"nyc": {
    "include": [
      "**/fizzbuzz.js"
    ]}`

Then:

`nyc npm test`


Below is an example of a simple report which shows various statistics:
![](https://i.imgur.com/Wvc1nSv.png)

It's possible to customise these reports to include different files and set different limits for when nyc considers that a test is 'passed'.

![](https://i.imgur.com/L4xG8x2.png)





This could be useful as this can be run in the command line and allows for more customisation within the code testing report.










## Tracking Coverage as-a-Service
Istanbul and NYC help track our code coverage locally. As we will be working in teams it is also useful to know we can track our coverage over time using an independent service. Codecov is a useful service https://codecov.io/. You can use it with a continuous intergration service, e.g. Travis. When you create a pull request your CI will send a coverage report to Codecov and Codecov will leave a comment on the pull request.


## Useful links:

* Istanbul: https://github.com/gotwarlost/istanbul/
* NYC: https://github.com/istanbuljs/nyc
* Does 100% code coverge mean full coverage? https://martinfowler.com/bliki/TestCoverage.html
* On continuous integration: https://www.martinfowler.com/articles/continuousIntegration.html
* Travis: https://github.com/dwyl/learn-travis
