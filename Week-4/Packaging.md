# Packaging.md :package: 

![](https://i.imgur.com/siK3l9C.jpg)

### Dependencies
#### What is a dependency?
- "dependencies": These packages are required by your application in production.
- "devDependencies": These packages are only needed for development and testing.

#### Why might you want to use a dependency in your project, rather than writing the code from scratch?
Dependency is reusable and need to be updated regularly. Why write code from scratch when it is already there for you??

#### What have traditionally been some of the issues with managing dependencies?
- Ensuring a package has all of its associated packages.
- This can be an issue in itself as it can lead to a significant increase in code size and impact on performance.


### NPM
What is a package manager?
- a collection of software tools
- automates the process of installing, upgrading, configuring, and removing computer programs for a computer's operating system in a consistent manner
- means you don't have to manually install and update everything in a painstaking process

How does it help with dependencies?
- a package manager manages dependancies
- this means it ensures a package is installed with all packages it requires, thus avoiding "dependency hell"
- "dependency hell" = I want this package A it looks awesome! Yippee I've got it! Oh no...this package A needs package B. Oh well, I'll get package B too, it looks cool and fun also. Oh shit, package B needs packages C, D and *khwekasuzhfuwhs*. This is HELL!

What is package.json?
- basically, it's a file which has lots of important info about your project
- this is the 'metadata' - what is this?! Metadata describes other data. e.g. an image may include metadata that describes how large the picture is, the color depth etc.
- the metadata in the package.json includes the node packages you are using in your project: these get listed under dependencies
- this means that if someone else wants to install your project, they will automatically install the required packages too. Yay!

What does npm init do?
- running `npm init` initiates a step by step process to set up your project
-  it will ask you for different aspects of your project (e.g. name, description etc.)
-  after you've input these (or just accepted the defaults with enter or
`npm init --yes`) a package.json file will be created and placed in the directory you are in.


How do you use an installed package in your code?
- say you've followed all the instructions and you've got your package installed, it's in the package.json etc etc. How do you actually use it?!
- you REQUIRE it: this means set it to a variable and then say it is required. e.g. `var http = require('http');`
- If you are trying to use a 'package' you've made yourself (maybe a function) you need to export it - `module.exports = handler` - from the file it is in, then require it -`var handler = require('handler')` - in the file you want to use it in.

### `npm install`
Installs a package and any packages that it depends on it in the local node_modules folder.

By default, `npm install` will install all modules listed as dependencies in package.json.


`npm install -g` or `npm install -global` installs globally to your machine rather than into the node_modules folder of that specific project.





`npm install --save-dev`: Package will appear in your devDependencies.
`npm install --save-prod`: Package will appear in your dependencies. This is the default.

#### dependencies
These are your normal dependencies, or rather ones that you need when running your code (e.g. React or ImmutableJS).

#### devDependencies
These are your development dependencies. Dependencies that you need at some point in the development workflow but not while running your code (e.g. Babel or Flow).

[Rule of thumb](https://www.smashingmagazine.com/2016/01/issue-with-global-node-npm-packages/): If your project depends on a package, it should be listed in your package.json file as a dependency and installed locally in your project, rather than globally.Tools that your projects do not depend on can be installed globally.

If your project depends on a package, it should be documented in package.json so that you can guarantee that it is installed when someone types npm install. Otherwise, you’ll need to add extra steps in your README file to inform anyone else who clones your project that they need to install each of your global dependencies as well.


### Package Files
#### Where does NPM install packages?

> npm can install packages in local or global mode.
* **Local packages** the package is in a node_modules folder in your parent working directory and is owned by the current user.
        * Run `npm config get prefix` to see where local libraries are installed  
* **Global packages** are installed in {prefix}/lib/node_modules/ which is owned by root (where {prefix} is usually /usr/ or /usr/local).
        * You can run `npm list -g` to see where global libraries are installed.


#### Why is it important to make sure that installed packages aren't included in your repositories?
- clutter up the repo (there's thousands of them)
- your commits will contain changes that are in the node modules (irrelevant?)
#### How do you prevent Git from including these files in your repository?
- `.gitignore`!

[![](https://i.imgur.com/TVO1x1s.png)
](https://)







### Resources

http://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/
