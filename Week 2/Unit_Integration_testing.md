# Unit vs. Integration Testing

![Unit vs Integration](http://softwaretestingfundamentals.com/wp-content/uploads/2010/12/unittesting.jpg)


## What is a unit test?

### First off, let's see what they're not:

* they donâ€™t exercise multiple components of your system and how they act
* they donâ€™t deal with their environment and with external systems to the codebase

**SO...**

* they can't be expected to catch integration errors or broad system level errors within an application

### Unit Testing is:
* a way to isolate and exercise specific units of your code to validate that each unit of the software performs as expected

* time efficient
    * testing the smallest testable part of software - it's isolation to other code ensures any changes won't create bugs
    * makes fault-finding faster - issues can be quickly identified and fixed thanks


* a way to create well-designed code.
    * When you are performing tests as part of the development process, your code is automatically going to be designed better than if you just wrote the functions and then moved on.
* a great way to easily refactor code at a later date, and make sure the module still works correctly


---

ANALOGY

During the process of manufacturing a ballpoint pen, the cap, the body, the tail, the ink cartridge and the ballpoint are produced separately and unit tested separately. When two or more units are ready, they are assembled and Integration Testing is performed.
Ref: [Integration Testing Fundamentals](http://softwaretestingfundamentals.com/integration-testing/)


---
### When to use unit tests

> Studies...consistently found that a test-first process produces better results than adding tests later. It is resoundingly clear: Before you implement, write the test.
Ref: [What every unit test needs](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d)

>  TDD is a robust way of designing software components (â€œunitsâ€) interactively so that their behaviour is specified through unit tests.
Ref: [Writing great unit tests: best and worst practices](http://blog.stevensanderson.com/2009/08/24/writing-great-unit-tests-best-and-worst-practises/)

* Unit tests are therefore highly integral to the process of how we write our code
* We are following a test-first cycle (the red, green, refactor cycle)
* By definition you are writing testable code through unit tests
* Start with the simplest failing test and build functionality incrementally
* Unit tests donâ€™t contain any knowledge about other parts of your codebase, so if you make changes to other parts of your codebase, this will not make them fail.
* The test should provide a clear description of the feature being tested.
* The tests should produce a good bug report when they fail.

1. What were you testing?
2. What should it do?
3. What was the output (actual behavior)?
4. What was the expected output (expected behavior)?
(See [Fizzbuzz testing workshop](https://github.com/AbdullahChaudhry/fizzbuzz)

* For example in our project, we will write the functions in logic.js (addTodo, deleteTodo, markTodo and sortTodos) using unit testing and the functions in dom.js as well. To see how everything works together and changes the DOM we would need to use integration testing.

![Unit vs Integration](http://softwaretestingfundamentals.com/wp-content/uploads/2010/12/integrationtesting.jpg)

## What is an integration test?

> Integration testing allows individuals the opportunity to combine all of the units within a program and test them as a group. This testing level is designed to find interface defects between the modules/functions. [Reference](https://www.seguetech.com/the-four-levels-of-software-testing/)

The purpose of this level of testing is to expose faults in the interaction between integrated units. Test drivers and test stubs are used to assist in Integration Testing.

* Stubs act as a response to the module being tested. Used in Top Down integration testing.
* Drivers are the reverse and provide input for the module to act upon. Used in Bottom Up integration testing.


### Different Types of Integration Test

**Big Bang** - wait until all modules are completed to test as a whole. Not recommended as it can increase overall development time and can make it difficult to find the source of bugs.

Advantages:
* Everything is finished before integration testing starts.
Disadvantages:
* Can be difficult to find a bug
* Since the integration testing can commence only after "all" the modules are designed, testing team will have less time for execution in the testing phase.
* Since all modules are tested at once, high risk critical modules are not isolated and tested on priority.
* Peripheral modules which deal with user interfaces are also not isolated and tested on priority.

**Incremental Testing** - completed modules are tested, either in tandem with others or in isolation.

* Top-Down
* Bottom-Up

Top-Down: Top level units are tested first and lower level units are tested step by step after that
Advantages:
* Can find major flaws occur toward the top of the program.
* It provides early working module of the program and so design defects can be found and corrected early.

Disadvantages:
* Needs many Stubs.
* Modules at lower level are tested inadequately.


Bottom-Up: Bottom level units are tested first and upper level units step by step after that.
Advantages:
* Appropriate for applications where bottom up design methodology is used.
* Advantageous if major flaws occur towards the bottom of the program.
* Test conditions are easier to create.
* Observation of test results is easier.

Disadvantages:
* Critical modules (at the top level of software architecture) which control the flow of application are tested last and may be prone to defects.
* Early prototype is not possible

### When to Use Integration Tests


You can use Integration tests once you have multiple units that are meant to work in conjuction. Furthermore, integration tests can operate on different levels.
* For example - testing that the DOM and the Javascript are functioning together and an element changes as expected.
* Or on a slightly larger scale it can test that different modules work together. Eg. does the 'Current Balance' module reflect changes when the 'Transfer' module is used.

You don't even need more than one module to be completed. You can use mock input or resposes (Stubs and Drivers) to test the one module.






# Resources
[Medium Article: 5 Questions Every Unit Test Must Answer](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d)


[Javascript testing: Unit vs Integration vs Functional](https://www.sitepoint.com/javascript-testing-unit-functional-integration/)

[More on Unit vs Integration vs Functional Testing](https://codeutopia.net/blog/2015/04/11/what-are-unit-testing-integration-testing-and-functional-testing/)

[YOUTUBE VIDEO: FunFunFunction Unit Test vs. Integration Test](https://www.youtube.com/watch?v=vqAaMVoKz1c)

[What is an integration test exactly?](https://softwareengineering.stackexchange.com/questions/48237/what-is-an-integration-test-exactly)

[Integration Testing Fundamentals](http://softwaretestingfundamentals.com/integration-testing/)

[A guide to unit testing in JS](https://github.com/mawrkus/js-unit-testing-guide)

[YOUTUBE VIDEO - Different approaches to Integration Testing](https://www.youtube.com/watch?time_continue=25&v=QYCaaNz8emY)
