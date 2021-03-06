# Engineering

## Modules:
### Why is it a good idea to modularise your code?

When working on a large project it is good to modularize code based on the task it performs. This allows code to be reusable and easier to debug as readablity is also improved by having highly organized code. 

Modularising code also prevents "Namespace pollution" as it creates a private space for variables. Which means that code doesn't share global variables. 

### What are require and module.exports?

```require()```  is a function that loads an external module.

```module.exports```  is an object which is included in every JS file in the Node.js application by default. Module is a variable that represents the current module and exports is an object that will be exposed as a module. 


### Why can't you use them in the browser?

They can't be used in the browser as both ```require()``` and `module.exports` are not defined in the browser and only in Node js. However with [Browserfiy](https://http://browserify.org/) you are able to write code that uses require just like in node. 



### How might you modularise client-side code?

Client-side code can be modularised using ES6 as there is support for importing and exporting modules. However as not all browsers support ES6 a transpiler would have to be used. 

>  What a transpiler does, is take ES6 code and translates it into ES5 code that is supported by modern browsers. This way we can write code in the newest version of JavaScript that will be supported in the future and can still be read by today’s applications. The most popular well known transpiler today is [babel](https://babeljs.io/).
 

---

## Asyncronous functions: 
### Why should you use asyncronous forms of functions wherever possible in Node?
>JavaScript in Node.js (just like in the browser) provides a single threaded environment. This means that no two parts of your application run in parallel; instead, concurrency is achieved through the handling of I/O bound operations asynchronously. For example, a request from Node.js to the database engine to fetch some document is what allows Node.js to focus on some other part of the application.

>Node.js works asynchronously, always. If you're doing some blocking I/O (such as with eg. fs.readFileSync() or other synchronous function), the complete node.js runtime process stops processing anything else during that call. Therefore, in web request processing, you never call synchronous functions 

### What are error-first callbacks, and why is it important to follow that pattern in your own code?

>There’s really only two rules for defining an error-first callback:
*  The first argument of the callback is reserved for an error object. If an error occurred, it will be returned by the first err argument.
* The second argument of the callback is reserved for any successful response data. If no error occurred, err will be set to null and any successful data will be returned in the second argument.
Really… that’s it. Easy, right? Obviously there are some important best practices as well, but before we dig into those lets put together a real-life example with the basic method fs.readFile():

```
fs.readFile('/foo.txt', function(err, data) {
  // TODO: Error Handling Still Needed!
  console.log(data);
});
```
>fs.readFile() takes in a file path to read from, and calls your callback once it has finished. If all goes well, the file contents are returned in the data argument. But if somethings goes wrong (the file doesn’t exist, permission is denied, etc) the first err argument will be populated with an error object containing information about the problem.



### Why should you avoid using throw in callbacks? 
>Its up to you, the callback creator, to properly handle this error. You can throw if you want your entire application to shutdown. Or if you’re in the middle of some asynchronous flow you can propagate that error out to the next callback. The choice depends on both the situation and the desired behavior.
> * throw delivers an error synchronously — that is, in the same context where the function was called. If the caller (or the caller's caller, ...) used try/catch, then they can catch the error. If none of the callers did, the program usually crashes. (The error can also be handled by domains or the process-wide "uncaughtException" event, which are discussed below.)
> * Callbacks are the most basic way of delivering an error asynchronously. The user passes you a function (the callback), and you invoke it sometime later when the asynchronous operation completes. The usual pattern is that the callback is invoked as callback(err, result), where only one of err and result is non-null, depending on whether the operation succeeded or failed.
> 
#### OPTIONAL(more about the error types)
**Operational errors** represent run-time problems experienced by correctly-written programs. These are not bugs in the program. In fact, these are usually problems with something else: the system itself (e.g., out of memory or too many open files), the system's configuration (e.g., no route to a remote host), the network (e.g., socket hang-up), or a remote service (e.g., a 500 error, failure to connect, or the like). Examples include:
* failed to connect to server
* failed to resolve hostname
* invalid user input
* request timeout
* server returned a 500 response
* socket hang-up
* system is out of memory
*
**Programmer errors** are bugs in the program. These are things that can always be avoided by changing the code. They can never be handled properly (since by definition the code in question is broken).
* tried to read property of "undefined"
* called an asynchronous function without a callback
* passed a "string" where an object was expected
* passed an object where an IP address string was expected

The general rule is that a function may deliver operational errors synchronously (e.g., by throwing) or asynchronously (by passing them to a callback or emitting error on an EventEmitter), but it should not do both

### When might you use the syncronous form of a function instead?
Every time your synchronous function is running node can't do anything else as it's single threaded. This means that if your application is a server, it becomes unresponsive. 
Use synchronous to do smaller items and leaving the async stuff to the I/O bound items.







## Input/output (the fs and path modules):
#### What kind of tasks does the fs module enable you to perform that you wouldn't be able to in the browser?
* Main thing is that it allows you to access the file system (which is not allowed from the browser as this is considered a major security risk)
* `fs` simply provides a wrapper for the standard POSIX file operations (think about all the things you can do from within your terminal - open, mkdir, rmdir, etc)
* Here are some useful methods:
```
    * fs.open()
    * fs.close()
    * fs.readFile()
    * fs.writeFile()
    * fs.copyFile()
    * fs.mkdir()
    * fs.rename()
``` 
* And some more complex ones:
```
    * fs.watch(filename, [options], callback)
      -> Watch for changes on filename, where 
      filename is either a file or a directory. 
      The callback is called each time the file is accessed
    * fs.access()
      -> Tests a user's permissions for the file 
      or directory specified by path. You would 
      use this to check if a file exists without 
      manipulating it afterwards (if you want to 
      open read/write a file the docs recommend 
      you do this directly and then handle the error)
```
#### What are some of the issues of working with paths when accessing a file system?
* Having excess dots or slashes
* Writing cross-platfrom paths
    * Windows uses backslashes whereas OSX/Linux use forward slashes 
    * Windows uses a semi-colon as a path environment variable. OSX/Linux use a colon
#### How does the path module help, and why should you use it instead of manually writing file paths as strings?
* You can fix the problem with excess dots and slashes with __path.normalize()__:  
```
path.normalize('/a/.///b/d/../c/')
//-> '/a/b/c/'
```
* To write cross platform paths you should use __path.join()__ (rather than concatenating): 
```
var filePath = path.join(foo, bar);
//-> 'foo/bar' on OSX and Linux
//-> 'foo\\bar' on Windows
```
* The Node `path` module also gives you the the `path.delimiter` property to fix the issue with colons/semi-colons  
* Three useful functions for returning parts of a path:  
```
var filePath = '/a/b/c.html'

path.basename(filePath)
//-> 'c.html'

path.extname(filePath)
//-> '.html'

path.dirname(filePath)
//-> '/a/b'
```

## Working with URLs (the url and querystring modules): 
What is a urlObject and how is it structured? Why is it important to be able to turn JavaScript objects into querystrings and back again? Why is it a bad idea to build a query string manually from other strings (think about URL encoding and escape characters)?

### URL module

#### Creating an URL OBJECT

The url module can be used to take an url and turn this into an object. For example:

`var url = require('url')`
`url.parse(urlStr, [parseQueryString], [slashesDenoteHost])`

Pass true as the second argument to also parse the query string using the querystring module. Defaults to false.

This would allow you to manipulate various properties of the object and then recreate your URL.

**Example**:

`'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'`

**href:** The full URL that was originally parsed. Both the protocol and host are lowercased.
Example: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'

**protocol:** The request protocol, lowercased.
Example: 'http:'

**host:** The full lowercased host portion of the URL, including port information.
Example: 'host.com:8080'

**auth**: The authentication information portion of a URL.
Example: 'user:pass'

**hostname:** Just the lowercased hostname portion of the host.
Example: 'host.com'

**port:** The port number portion of the host.
Example: '8080'

**pathname:** The path section of the URL, that comes after the host and before the query, including the initial slash if present.
Example: '/p/a/t/h'

**search:** The 'query string' portion of the URL, including the leading question mark.
Example: '?query=string'

**path:** Concatenation of pathname and search.
Example: '/p/a/t/h?query=string'

**query:** Either the 'params' portion of the query string, or a querystring-parsed object.
Example: 'query=string' or {'query':'string'}

**hash:** The 'fragment' portion of the URL including the pound-sign.
Example: '#hash'


You can also create an url from an url object:

`url.format(urlObj)`


### QueryString Module

#### What is a querystring?

The portion of a dynamic URL that contains the search parameters when a dynamic Web site is searched.

Takes a querystring (everything after the ? in the URL) an also creates an object

`var querystring = require('querystring');`

`var q = querystring.parse('year=2017&month=february');`


.parse()	Parses the querystring and returns an object

.stringify()	Stringifies an object, and returns a query string

#### Why is it important to be able to create URL objects and queryStrings?

* So that you could change certain properties in the object and easily recreate a URL.
* To ensure that URL encoding is correct (e.g %20) and that the URL is properly formatted.

## Further reading and helpful links




#### Modules
https://www.techwalla.com/articles/the-advantages-of-modularization-in-programming


http://fredkschott.com/post/2014/06/require-and-the-module-system/

https://medium.com/@crohacz_86666/basics-of-modular-javascript-2395c82dd93a

https://www.degordian.com/education/blog/writing-future-proof-modular-client-side-javascript/


#### URL and queryString modules

https://www.npmjs.com/package/url

https://www.w3schools.com/nodejs/ref_querystring.asp