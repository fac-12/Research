# Continuous Integration

## What is it?
Continuous Integration (CI) is a development practice that requires developers to integrate code into a shared repository several times a day. Each check-in is then verified by an automated build, allowing teams to detect problems early. 

For example, CI can automatically run tests whenever a new pull request is made on GitHub (Travis CI can be used for this). A team can setup their project so PRs cannot be merged without 100% test passing.    

## How do you do it?
* Developers `checkout` code into their private workspaces
* When done, commit the changes to the repository
* The CI server monitors the repository and checks out changes when they occur
* The CI server builds the system and runs unit and integration tests
* The CI server releases deployable artefacts for testing
* The CI server assigns a build label to the version of the code it just built
* The CI server informs the team of the successful build
* If the build or tests fail, the CI server alerts the team
* The team fixes the issue at the earliest opportunity
* Continue to continually integrate and test throughout the project

## What assurances can it provide?
Because you’re integrating so frequently, there is significantly less back-tracking to discover where things went wrong, so you can spend more time building features.
- You don't need to run your own tests everytime you want to make a commit.


## Steps for setting up Travis CI with Github
Based on [DWYL tutorial](https://github.com/dwyl/learn-travis) (which is probably much better to use!).

1. Create an account on [Travis website](https://travis-ci.org/) (you should create login with your github acount).

![](https://files.gitter.im/sophielevens/Xqyr/1-sign-up.gif)

2. Create a new github repo and pull it down.
![](https://files.gitter.im/sophielevens/jYob/2-githubrepo.gif)

3. In the accounts section, choose one of your github repos to connect with Travis
![](https://files.gitter.im/sophielevens/jYob/3-repolink2.gif)

4. In your repo, create a .travis.yml file with the following code (for Node only):
![](https://files.gitter.im/sophielevens/hfTq/5-filestructure.gif)

```
language: node_js
node_js:
    - "node"
```
5. Create a simple project with some tests, using an npm package like Tape or JShint. Initially, leave a mistake in - like a missing semicolon. Make sure to create a package.json! In your package.json, add a test script. eg:
```
"scripts": {
    "test": "./node_modules/jshint/bin/jshint hello.js"
}
```
![](https://files.gitter.im/sophielevens/IH1n/6-newbranch_jshint_package.json.gif)

6. Commit these files and push them up to Github. Create a pull request - Travis should then automatically run your test scripts. They should initially fail!
![](https://files.gitter.im/sophielevens/IH1n/7-githubPR2.gif)
 
7. Fix your missing semicolon, commit and push up
![](https://files.gitter.im/sophielevens/J2mz/8-workingtest.gif)
8. Your tests should now pass!
![](https://files.gitter.im/sophielevens/J2mz/9-adding-status-image-travis.gif)


avoid annoying email by adding to you!
https://docs.travis-ci.com/user/notifications/#Configuring-email-notifications



## Useful links
https://medium.com/@flow.ci/what-is-continuous-integration-27666c51f477