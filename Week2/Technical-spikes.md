# Technical spikes

> If we knew what we were doing, it wouldn’t be 
called research. —Albert Einstein

[Presentation](https://docs.google.com/presentation/d/1kwfZVAURizaU_a53qN9AUb6NHpZCKRrSmK8WxnOPgmM/edit#slide=id.p)

* https://en.wikipedia.org/wiki/Spike_(software_development)
* http://www.jamesshore.com/Agile-Book/spike_solutions.html 
* https://blog.gds-gov.tech/technical-spike-when-and-what-not-to-do-1667da1a5acc
* http://www.scaledagileframework.com/spikes/

## What are technical spikes?

* Agile teams use the term spike to refer to a time-boxed research activity.

* Comes from *Extreme Programming (XP)* which is a software development methodology, XP is a type of *agile development* - a set of values and principles for development. For example:
> Working software is delivered frequently (weeks rather than months)

> Simplicity—the art of maximizing the amount of work not done—is essential
* The term is actually borrowed from journalism - in the days when journalists submitted stories on paper, the editor would stick the stories s/he decided not to use on a fixed metal spike - it's a good way of making sure large numbers of pieces of paper don't go anywhere and stay tidy. But a story that is spiked is almost certainly discarded, even if it's one the editor asked for in the first place.

* Based on the idea that when faced with a question, data is better than speculation: so perform a small, technical experiment to give you more info. This is a *spike*.
* Generally, there are two types of spikes: functional and technical. 
    * Functional spikes are used whenever there is significant uncertainty about how a user might interact with the system. They’re often best evaluated through some level of prototyping—whether through user interface mock-ups, hardware prototypes, wire frames, page flows, or other techniques to elicit feedback from the Customer or stakeholders.
    * Technical spikes are used to research various technical approaches in the solution domain. For example: 
        * Determine a build-versus-buy decision
        * Evaluate the potential performance or load impact of a new user story 
        * Evaluate specific implementation technologies that can be applied to a solution
        * Develop confidence about a desired approach


* A spike is a product-testing method that is used to determine how much work will be required to solve or work around a software issue. 

    * Typically, a 'spike test' involves gathering additional information or testing for easily reproduced edge-cases.

*  The technical spike is used more often for evaluating the impact new technology has on the current implementation.

## When and why would a spike be useful?
* A spike can be useful for testing the feasibility of an idea or solution 
* Perform a spike whenever you have a question about if or how some piece of technology will work.
* Reduce the risk of a technical problem
* Increase the reliability of a user story’s estimate
* Allow the architecture to emerge instead of ***BDUF*** (*Big Design Up Front* - ie: a software development approach in which the program's design is to be completed and perfected before that program's implementation is started.)
* Here are some examples of development activities (and questions) that learn more about with a development spike:

    * Can we implement two-way SMS in our current infrastructure?
    * Can we reduce costs and time by using an open source charting package (or is it better to roll our own)?
    * How difficult will it be to upgrade to Ruby on Rails 3?
    * Can we do multiple file uploads without flash?
    * Will it handle the load?
    * How do we make these two systems talk to one another?
* A spike may be useful in the following situations:
    * Trouble estimating
        * Your team is having trouble estimating stories effectively. 
        * Lots of dissension and differing opinions on how big certain stories are. 
        * This can lead to . . .
    * High point estimates
        * Your story point estimates are very high for what the product owner sees as easy items. 
        * The team sees much more work than is immediately apparent. 
        * This could be an indication that there's technical debt or something that the team is working around to try to deliver stories.
    * Patterns of difficulty
        * Stories from specific areas of the application are consistently late or difficult for the team to complete.
        * There are lots of bugs and QA items from certain types of stories.
        * There's a pattern of feedback from retrospectives in which the team refers to difficulty with a technology or implementation used.
    * The team speaks out
        * Your team flat-out tells you that there's a problem and it has to be fixed or else.
        * More subtly, the team seems worried about creeping technical issues. 
        * You may start hearing rumblings during planning or retrospective meetings. Is the platform scaled well enough?

## How would you successfully spike on a topic?

* If the spike only takes, say, an hour or two, maybe we don’t need to track it in our **ALM** (Application Life Management) tool. If it’s larger than that, you should enter it into your backlog.
* Spike solutions are a learning technique based on performing small, concrete experiments. Some people perform these experiments in their production code, which can work well for small experiments (such as the arithmetic overflow example), but it increases the scope of possible error.
* HOW TO SPIKE:
    1. Recognise an issue/unknown and decide whether a spike would be beneficial. 
        * Spikes should be the exception, not the rule.
        * Every user story contains spike-like activities to identify the technical and functional risks.

        * Spike stories should be reserved for the more critical and larger unknown


    2. Set clear objectives and outcomes for the spike
        
        

    3. Quantifiable, Demonstrable, and Acceptable
       * The output of a spike is demonstrable
       * Spikes generally produce information rather than working code. The spike should develop only the information needed to confidently identify and size the stories that drive it.
    4. Timing of Spikes / Set a timebox for the spike
       * You need to be careful when you choose to do spikes, as they can be time consuming   
       * It's useful to set out a 'timebox' of how long you will spend on a spike 
    
    
    



## Give an example of how a spike could have helped with last week's projects.

### Technical spikes
* Idea of flipping around image to show text
* Burger menu
* Using flexbox or other CSS 
* Submit button - javascript 
* Deciding which framework to use for a new service?
* Introducing a third party component? 

### Functional spikes
* Will a burger menu satisfy our user stories in terms of accessibilty?
* Will flipping around the image to show text satisfy our user stories in terms of accessibilty?

