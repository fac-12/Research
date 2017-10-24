# RegEx Research 

### What are regular expressions?
* Regular expressions are a way to describe patterns in string data. They form a small, separate language that is part of JavaScript and many other languages and tools.
* The specific syntax rules vary depending on the specific implementation, programming language, or library in use, although Perl regex has become the de facto standard.


### Structure
* Contained within forward slashes `/regex/`
* Basic syntax: `/pattern/modifiers`
    * `[a-zA-z]`
    * `[0-9]`
* Metacharacters (characters with special meaning)
    * `\w` : word character (ASCII letter, digit or underscore)
    * `\d` : digit (0-9)
    * `\s` : whitespace character (space, tab, newline, carriage return, vertical tab)
    * `\b` : find only at word boundary
    * if capitalized then NOT that (i.e. `\D` is not `\d`)
    * `.` : any character except new line
* Quantifiers: 
    * `*` : zero to more
    *  `?` : once or none
    * `+` : more than one
    * `$` : at the end of a line
    * `{3}` : exactly 3 times
    * `{2,4}` : two to four times
    * `{3,}` : 3 or more times
    * `^` : don't match
    e.g. `/[^0-9]/`matches anything that's not a number
* Anchors: 
    * `^` : at the beginning of a line
    e.g. `/^[0-9]/` matches any number at the beginning of a line
    * `$` : at the end of a line
    * `g` : at the end of a line finds every single match in test case
* Modifiers or flags (placed at end of regex expression)
    * `/.../i` : Perform case-insensitive matching
    * `/.../g` : Perform a global match (find all matches rather than stopping after the first match)
    * `/.../m` : Perform multiline matching
* Brackets:
    * each character specification can be contained in `[]`, so `/[01]\d/` means 0 or 1, followed by any other digit
    * `()` is used to define an explicit pattern or capture group of larger things
    * `[]` any character listed inside the square brackets. "-" means range in this scenario
    * part of a regular expression that is enclosed in parentheses counts as a single element as far as the operators following it are concerned 
* Escaping Characters:  
    * since a forward slash ends the pattern, we need to put a backslash before any forward slash that we want to be part of the pattern, eg for "http://" & "https://":  
    `/(https?)\:\/\//`
    * metacharacters, such as question marks and plus signs, must also be preceded by a backslash

### Regex Examples
* Finding a literal string:
    * `/foundersandcoders/`
* Date/Time: 
    * `/\d\d-\d\d-\d\d\d\d \d\d:\d\d/;`
    * `/\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/`
    * "30-1-2003 8:45" or "30-01-2003 10:45" would both match
* How to spell neighbour/neighbor: `/neighbou?r/`
    * neighbor and neighbour would both match
* Find only at word boundaries:
    * `console.log(/cat/.test("concatenate"));`
    `// → true`
    `console.log(/\bcat\b/.test("concatenate"));`
    `// → false`
* More complicated example with | operator
    * `var animalCount = /\b\d+ (pig|cow|chicken)s?\b/;`
    `console.log(animalCount.test("15 pigs"));`
    `// → true`
    `console.log(animalCount.test("15 pigchickens"));`
    `// → false`
    * As diagram:
     ![](http://eloquentjavascript.net/img/re_pigchickens.svg)

### Regex in Javascript
* Regular Expressions as Objects
    * You construct a regular expression in one of two ways:
        * Using a regular expression literal:
        e.g. `var re = /ab+c/;`
        * Or calling the constructor function of the RegExp object:
        e.g. `var re = new RegExp('ab+c');`
    * The literal syntax is compliled only once, with the JS code, while the constructor function must compile the regular expression each time it is called - so performance will be better with the literal version. 
    * However, to build a regular expression from a variable in JavaScript, you'll need to use the RegExp constructor function.
    * Methods of Regex Objects
        * The RegExp object has two methods that take strings as arguments:  test and exec.
e.g. `re.test(str)`
        * You can test a string against a regular expression with the following syntax:
            * `/<regexp here>/.test("string here")`
            * example:
                `var cartoonCrying = /boo+(hoo+)+/i;`
             `console.log(cartoonCrying.test("Boohoooohoohooo"));`
        `// → true`
        * /<regex>/.exec method will return null if no match was found and return an object with information about the match otherwise 
            * example: 
            `var match = /\d+/.exec("one two 100");`
    `console.log(match); // → ["100"]`
    `console.log(match.index); // → 8`
* Regular expressions can also be used as arguments in these String methods: match, search, split and replace.
e.g. `str.match(re)` 


### Advanced features (good to be aware of)

* Lookarounds (lookaheads and lookbehinds)
    * Definition:  
        > A lookahead or a lookbehind does not "consume" any characters on the string. This means that after the lookahead or lookbehind's closing parenthesis, the regex engine is left standing on the very same spot in the string from which it started looking: it hasn't moved. From that position, then engine can start matching characters again, or, why not, look ahead (or behind) for something else
        > At the end of a lookahead or a lookbehind, the regex engine hasn't moved on the string. You can chain three more lookaheads after the first, and the regex engine still won't move.
    * Syntax:  
        * (?= … )
    * Simple Example:  
        * \d+(?= dollars)
        * Matches 100 in 100 dollars
        * \d+ matches the digits 100, then the lookahead (?= dollars) asserts that what immediately follows is the characters " dollars"
* greedy & lazy quantifiers
* sticky flag `y` to be used with the `lastIndex` property of RegExp 


### Useful resources/tools

* https://www.hongkiat.com/blog/regular-expression-tools-resources/
* http://eloquentjavascript.net/09_regexp.html
* https://www.w3schools.com/jsref/jsref_obj_regexp.asp

### Practise

* https://www.w3resource.com/javascript-exercises/javascript-regexp-exercises.php

* regular expression to find an email address according to the following criteria: 
    user must start with an alphabetical character;
    user can contain also other characters;
    site and user are always separated by an AT symbol (@);
    site is always done with at least 3 alphabetical characters, a dot and at least 2 more alphabetical characters
