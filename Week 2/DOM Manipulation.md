# DOM Manipulation

### Introduction

**What is the DOM?**

The DOM (Document Object Model) is a representation of the structure of all the nodes (element nodes, text nodes, object nodes, attribute nodes etc.) in an HTML document. We use Javascript to interact with and manipulate these nodes.

### **1. How can you use JavaScript to create an HTML element and then add it to your webpage? How would you replace an existing element with it?**

* **How to create an element**

    1. Create DOM element
    `var element = document.createElement(tagName[, options]);`

    2. Create text content
    `var text = document.createTextNode(data);`

    3. Add created element to DOM
    `var aChild = element.appendChild(aChild);`

    4. Append element to the parent element
    `document.body.appendChild(element);`

        **Example**
    `var btn = document.createElement("button");`
    `var t = document.createTextNode("click me");`
    `btn.appendChild(t);`
    `document.body.appendChild(btn);`

* **Replace an existing element**

    1. Find the parent of the element you want to replace using .parentNode
    `var parentDiv = oldElement.parentNode;`

    2. Replace old child with new child
    `replacedNode = parentNode.replaceChild(newChild, oldChild);`

* **Remove an existing element**

    `Node.removeChild()`

    When you know the element's parent node:
    ```javascript=
    var d = document.getElementById("top");
    var d_nested = document.getElementById("nested");
    var throwawayNode = d.removeChild(d_nested);
    ```

    When you don't specify the parent node:

    ```javascript=
    var node = document.getElementById("nested");
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
    ```

### **2. How would you add a `<li>` element to the start of a `<ul>`?**

*  Add a li to an element based on two possible scenarios:

     **1 When the parent node has no children**
     The `appendChild()` method appends a node as the last child of a node.
     

    ```
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode("Water");         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"
    ```
    
     **2.1 When the parent node has at least a child**

    The `insertAdjacentElement()` method inserts a given element node at a given position relative to the element it is invoked upon.

    `targetElement.insertAdjacentElement(position, newElement);`

    `position`: A DOMString representing the position relative to the targetElement; must match (case-insensitively) one of the following strings:

    `beforebegin`: Before the element itself.
    `afterbegin`: Just inside the element, before its first child.
    `beforeend`: Just inside the element, after its last child.
    `afterend`: After the element itself.

    _Return value_: The element that was inserted, or null, if the insertion failed.

    **2.2 When the parent node has at least a child**

    The `insertBefore()` method inserts a node as a child, right before an existing child, which you specify.
    ```javascript=
    var list = document.getElementById("myList"); // Get the <ul> element to insert a new node
    list.insertBefore(newItem, list.childNodes[0]); // Insert <li> before the first child of <ul>
    ````
    **Tip:** If you want to create a new list item, with text, remember to create the text as a Text node which you append to the element, then insert to the list.

    **3. Experimental**
    The `ParentNode.prepend()` method inserts a set of Node objects or DOMString objects before the first child of the ParentNode.

    _nodesToPrepend_
    One or more nodes to insert before the first child node currently in the ParentNode. Each node can be specified as either a Node object or as a string; strings are inserted as new Text nodes.
    Return value: undefined.

```javascript=
ParentNode.prepend(nodesToPrepend);
```

### **3. What is a JavaScript Event? What does event.preventDefault() do and why might you use it?**
* A javascript Event is an indicator of an action occurring on the page.
  All DOM nodes generate events. The most useful events are: 
  
  * `click` - which is generated when the mouse clicks on an element or if on               a touchscreen device when an element is tapped.
          
  * `mouseover/mouseout` - if the mouse cursor is over an element or                                leaves an element 
    
* Form elements generate the following events: 
     
     * `submit` - when the user submits the form
     * `focus` - when the user focus on an element 
     
 * In order to react to events you assign an event handler. Which is a way to run code in the case of user actions.  

    ``` js
    var p = document.querySelector('.para');
    p.addEventListener('click', function(event) {
        p.classList.toggle('highlight');
      })
    ```
    The code above listens for a click event on the paragragh. Once the       user clicks the paragraph the click event is generated. Therefore the     code is run to toggle the class on the pargraph element. 
* Many elements have default behaviors. For example, if you type when an input element is in focus, or if you click a checkbox. `event.preventDefault()` prevents the default action from happening. This can come in handy if you want to completely dictate how the event should be handled or if you want nothing to happend at all (for example to only allow numbers to be typed in a input field as seen below).

    ```js
    function checkName(evt) {
        var charCode = evt.charCode;
        if (charCode < 48 || charCode > 57) {
            evt.preventDefault();
        }
    }
    ```

### **4. What is a NodeList? How is it different from an Array?**
*  **What are NodeLists?**

    * Nodelists array-like structures that belong to the browser's API, whereas arrays belong to the Javascript API.

    * Nodelists are returned when one calls functions like document.getElementsByTag/Classname/etc and document.querySelectAll

    * Nodelists are "live" (they are updated whenever the DOM updates), except for querySelectAll, which returns a static NodeList
* **Key ways Nodelists differ from Arrays:**
    * NodeLists don't have access to protypal methods like `slice()`, `push()`, `pop()`
    * They cannot be iterated over with forEach (unless in ES6-supported browsers or with polyfill)
* **You may want to convert a NodeList to an Array. The safest and easiest method (supported by all browsers) would be:**
    ``` js
    var myNodeList = document.querySelectorAll('div');
    var myArray = []; // empty Array
    for (var i = 0; i < myNodeList.length; i++) {
        var self = myNodeList[i];
        myArray.push(self);
    }
    ```
    This method also should work with all browsers:
    ``` js
    var arr = [];
    var divs = document.querySelectorAll('div');
    for(var i = divs.length; i--; arr.unshift(divs[i]));
    ```
* **There are quicker and easier methods to convert NodeLists to Arrays in ES6 (Which would require use of a Polyfill for support in all browsers).**

    * Using a spread operator

    ``` js
    const nodelist = [...document.querySelectorAll('div')];

    ```

    * Using Array.from

    ```
    var divs = document.querySelectorAll('div');
    var arr = Array.from(divs)
    ```
    * You can also use .forEach() directly on a NodeList in ES6

### 5. What are the security concerns around Element.innerHTML and what could you use instead?

* Don't use innerHTML. It may allow malicious scripts to run on your site.
* HTML5 does not allow the `<script>` tag to run within `.innerHTML` but there are still loophole like `onClick` and `onError` that remain.
* Use `.textContent` to change text content
* Methods like `.removeChild`, `.appendChild()` or `.createElement()` are also useful.

https://docs.google.com/presentation/d/1XTR3HC1FNoZURhc9hQ_f6i_IlyAm1PZhRLD89C4ICUE/edit?usp=sharing