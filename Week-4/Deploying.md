# Deploying

## Cloud platforms


**What is PaaS?**
Platform as a Service - it provides you computing platforms which typically includes an operating system, programming language execution environment, database, web server etc. 

You are able to develop, run, and manage applications without the complexity of building and maintaining the infrastructure typically associated with developing and launching an app.

**Why is it useful to be able to deploy your code to a cloud platform, rather than running it locally?** 
- You don't have to store it on your computer - less chances of you loosing your work. 
- You can easily collaborate with other developers


**What services are there that can provide you with a platform for your code?** 

Cloud hosting services provide hosting on virtual servers which pull their computing resource from extensive underlying networks of physical web servers.

- Heroku 
- Google Cloud Platform 
- Amazon Web Service
- Gov.uk PaaS
- FastHosts

## Environments / Environment variables

| Environment                | Description                                 | 
| --------                   | --------                                    | 
| Local                      | Developer's desktop                         |
| Development                | Development server / Unit Testing           |
| Integration                | Continous integration build                 |
| Test / Quality Assurance   | Stage where interface testing is performed. |
| Stage / Pre-production     | Mirror of production environment            |
| Production / Live          | Serves end-users                            |


#### Development Environment

Testing on a local computer removes the need to commit, push and deploy completely. Every change can be verified locally first, then, once it’s more or less stable, it can be pushed to a Staging environment for proper quality assurance testing.

#### Staging Environment

Once the features are implemented and considered fairly stable, they get merged into a staging branch and then automatically deployed to the Staging environment. This is when quality assurance kicks in: testers go to staging servers and verify that the code works as intended.

#### Production Environment

Once features are implemented and tested, it can be deployed to production.

**Why might some variables in your code need to change for different environments?**

Environment variables are used to disambiguate between development and production builds. They're the best way of storing sensitive data like API Keys, Login Credentials and Database Passwords.

**Dependancies**: Development vs production dependancies

**Testing modules:** Some modules used for testing aren't necessary for the production environment.

**Privacy:** Passwords should only be accessible in the local environment.

**Why is it a bad idea to include those variables in a public repository?**

- Passwords should be stored locally and not in your public repo.

**What modules might you use to help manage environment variables? (Look at env2 from our neighbours at DWYL.) If you can, write some sample code to show how it works.**

Development modules: Grunt, DefinePlugin

If you are wanting a GLOBAL variable available in all environments, the webpack DefinePlugin is helpful.

env2 allows you to store your environment variables in an env.json or a .env file which gets loaded when your app starts. https://www.npmjs.com/package/env2

.env.
In some situations you only need an environment variable set for only a single project. In that case .env files are a great solution. It’s a file inside your project in which you specify these environment variables and afterwards you use a library for your respective programming language to load the file which will dynamically define these variables.

Create a .env file in your project folder (typically at the root) and place the key value pairs in there. This can look like this:

```
require('dotenv').config();
console.log('Your environment variable TWILIO_ACCOUNT_SID has the value: ', process.env.TWILIO_ACCOUNT_SID);
```

Since you most likely don’t want to commit your environment variables to a repository, make sure to add the .env file to your .gitignore to avoid accidentally pushing it.

### Questions: 

What are the different environments?


## Useful links

Cloud platforms:
- https://stackoverflow.com/questions/16820336/what-is-saas-paas-and-iaas-with-examples
- https://www.heroku.com (scroll down and watch the tutorial video series!)
- https://readwrite.com/2014/09/23/heroku-for-beginners-app-hosting-101/ 

Environment Variables:

- http://guides.beanstalkapp.com/deployments/best-practices.html
- https://docs.gitlab.com/ce/ci/environments.html
- https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html
- https://www.npmjs.com/package/env2