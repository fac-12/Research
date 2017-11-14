# Architecting

### Separation of concerns

In Computer Science, the Separation of Concerns (SoC) is design principle that involves splitting your code into sections or 'layers'. These sections can be fairly general, or very specific depending on how you decide to separate it. For example:
* separating your product into layers between the hardware and the user - for example the first most basic layer would be dealing with the drivers and components, up to the 'data access layer' which processes data for the user, with the 'presentation layer' at the highest level (quite broad)
* dividing your Javascript into multiple files, each focussing on a different function (more specific)


#### What kind of tasks are normally handled in the back end, and which are more usually handled in the front end? Why?

Front End - this refers to the 'presentation layer', the layer that the user interacts and can display information. 

Features of the Front End
* HTML/CSS/JS and visual layout
* Accessibilty features such as meta data, html tags and aria labels
* DOM manipulation to show dynamic content to the user
* Asynchronous Javascript (AJAX) - eg. last week's API challenges, the requests operate through the browser
* Takes user input (clicks, form data)

Back End - refers to processes between the server and the browser 'behind the scenes'.

Features of the Back End
* use of different programming languages (ie. not Javascript and mentioned further on)
* can take data from the user and do something with it (post a message, do some internet shopping)
* can show that data again to the user later





### Client side vs server side
#### Some tasks – such as templating and validation – can be implemented on either the client or the server. What are the pros and cons of running code on the client, rather than the server (and vice versa)?
When we think about architecture on either the client side or server side we need to consider performance(or percieved performance UI), machine-friendliness and maintenance.

Client side code - the code that lives in the browser and responds to user input.
    
* :confused: Can't store anything that lasts beyond a page refresh
* :confused: Can't read files off of a server directly, must communicate via HTTP requests
* :confused: It has to be parsed by the user's brower (issues with ES6)
* :smile: It can react to the users input immediately, with a faster response time
* Ajax (asynchronous javascript and XML): client calling the server directly to interact with server objects like a database, without a postback involve
* Validation - better feedback for user, can find out an issue before submitting a form. Can be used to reduce errors before moving to server side validation
* Templating (Is it better to have the server render the HTML for you, or for the browser to render the HTML?) - Front-end and back-end separate and thus you can change the backend incrementally.


Server side code - the code that lives on the server and responds to HTTP requests.
* :confused: As opposed to client side code, server side can only respond to HTTP requests for a particular URL, not *any* kind of user input. Server-side can decrease performance and force the user to wait for the page to be processed.
* :smile: You can store persistent data, data that you want to reuse 
* :smile: It can't be seen by the user
* Validation - you must always validate on your backend code as it protect you against malicious users 
* Templating - you can use Handlebars or React as a server side templating system, allows you to easily pass data from the server to the broswer



### Alternative back-end technologies: Which other technologies (programming languages and servers) might be used instead of Node on the back end? What are some of the pros and cons of using Node in your stack, rather than one of those alternatives?

**PHP:** Server-side scripting language, very popular for web development.  Pre-installed in almost all hosting services, Facebook is built with PHP.
**Java:** object-oriented language
**Go:** statically-typed, compiled language developed by Google
**C#:** compiled, statically typed language
**Python:** dynamically tpyed, interpreted, object-oriented and includes functional programming features.  Django is a popular framework.
**Ruby:** Dynamic, object-oriented, general-purpose programming language. Twitter was built using Ruby (now rewritten in Java).  Most popular framework is Ruby on Rails.

[Further reading](https://davidmles.com/backend-technologies/)

### Advantages of using Node
* #### Speed
Uses Google V8 engine optimized for Javascript
Asynchronous

* #### Use JavaScript for front and back-end
Means developers don't have to transition between languages

* #### Modules
NPM means it is easy to install packages that others have developed

* #### Portable
Versions running on Microsoft Windows, OS X, Linux, Solaris, FreeBSD, OpenBSD, WebOS, and NonStop OS. Well-supported by many web hosting providers, that often provide specific infrastructure and documentation for hosting Node sites.

* #### Active community
Very active third party ecosystem and developer community

* #### Relatively new language
Benefits from improvements in language design when compared to languages named above.

[Mozilla](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)

> Where Node.js really shines is in building fast, scalable network applications, as it’s capable of handling a huge number of simultaneous connections with high throughput, which equates to high scalability.... Compared to traditional web-serving techniques where each connection (request) spawns a new thread, taking up system RAM and eventually maxing-out at the amount of RAM available, Node.js operates on a single-thread, using non-blocking I/O calls, allowing it to support tens of thousands of concurrent connections (held in the event loop).
[Reference: Why the hell would you use Node.js](https://medium.com/the-node-js-collection/why-the-hell-would-you-use-node-js-4b053b94ab8e)

* Paypal switched to Node and were able to build their app with 33% fewer lines of code, 40% fewer files and built it twice as fast as fewer people as a backup Java app they were developing at the same time.  The resulting app had double the requests per second vs. the Java application and 35% decrease in the average response time for the same page, 200ms faster - noticeable difference for users.  [Source: Paypal Engineering](https://www.paypal-engineering.com/2013/11/22/node-js-at-paypal/)

#### Node.js should not be used for:
* Server-side web application with a relational database behind(Ruby on rails is better)
* Heavy server-side computation/processing(will block the thread)
[See this article for further info](https://medium.com/the-node-js-collection/why-the-hell-would-you-use-node-js-4b053b94ab8e)

### Writing for different environments: Why might you have to write JavaScript differently if it's going to run in the browser, rather than in Node? What tools can help bridge the gap?

#### Node
* Node doesn’t have a predefined “window” object bc it doesn’t have a window to draw anything.
    * Therefore window object methods like setTimeout do not work
* Node doesn’t have “document” object bc it never have to render anything in a page.
* “location” object is related to a particular url; that means it is for page specific. So, node doesn’t require that.
* Node has “global”, which is a predefined global object. It contains several functions that are not available in browsers, bc they are needed for server side works only.
* “require” object is predefined in Node which is used to include modules in the app.
* In Node everything is a module. You must keep your code inside a module.
* Node processes request object.

#### Browser
* “window” is a predefined global object which has functions and attributes, that have to deal with window that has been drawn.
* “location” is another predefined object in browsers, that has all the information about the url we have loaded.
*  “document”, which is also another predefined global variable in browsers, has the html which is rendered.
*  Browsers may have an object named “global”, but it will be the exact one as “window”.
*   Browsers don’t have “require” predefined. You may include it in your app for asynchronous file loading.
*   Moduling is not mandatory
*   Browsers processes response objects.

#### Tools to bridge the gap: Module Bundlers
Without the module loaders and bundlers, you could always combine your files manually or load your HTML with countless `<script>` tags, but that has several disadvantages:

* You need to keep track of the proper order in which the files should load, including which files depend on which other files and making sure not to include any files you don’t need.
* Multiple `<script>` tags means multiple calls to the server to load all of your code, which is worse for performance.
* Obviously, this entails a lot of manual work, instead of letting the computer do it for you. 


* **Browserify**
    * Browserify is a development tool that allows us to write node.js-style modules that compile for use in the browser. Just like node, we write our modules in separate files, exporting external methods and properties using the module.exports and exports variables. We can even require other modules using the require function, and if we omit the relative path it’ll resolve to the module in the node_modules directory.
    * includes npm core modules like `querystring`, `url` and `path`
* **Webpack**
    * In Browserify you use Gulp/Grunt and a long list of transforms and plugins to get the job done. Webpack offers enough power out of the box that you typically don’t need Grunt or Gulp at all. With Webpack you can declare a simple config file to define your build process.


