# Accessibility

## WAI-ARIA

Accessible Rich Internet Applications (ARIA) defines ways to make Web content and Web applications (especially those developed with Ajax and JavaScript) more accessible to people with disabilities. For example, ARIA enables accessible navigation landmarks, JavaScript widgets, form hints and error messages, live content updates, and more.

The ARIA specification is split up into three different types of attributes: roles, states, and properties. Roles describe widgets that aren't otherwise available in HTML 4, such as sliders, menu bars, tabs, and dialogs. Properties describe characteristics of these widgets, such as if they are draggable, have a required element, or have a popup associated with them. States describe the current interaction state of an element, informing the assistive technology if it is busy, disabled, selected, or hidden.

ARIA attributes are designed to be interpreted automatically by the browser and translated to the operating system's native accessibility APIs. When ARIA is present, assistive technologies are able to recognize and interact with custom JavaScript controls in the same way that they do with desktop equivalents. This has the potential for providing a much more consistent user experience than was possible in the previous generation of web applications, since assistive technology users can apply all of their knowledge of how desktop applications work when they are using web-based applications.


## NavBars

In order to make the structure more accessible to user agents that support ARIA as well as ensuring that user agents that don't support HTML5 can also understand the structure, adding the ARIA role="navigation" is advised:
```
<nav role="navigation">
<ul>
<li>About us</li>
<li>Services</li>
<li>Contact</li>
<li>Location</li>
<li>Why Groovy?</li>
</ul>
</nav>
```


- maybe graphics as well as text
- space between elements for easier clicking
- text of the navbar increases in size when hovered over
- avoid uppercase/line breaks & hyphenation
- convey menu items and their states by using color and other styling options. Don’t rely on color alone
- Use distinct styling to visually indicate menu items as regions of the page that can be activated 
- Change hovered or focused menu items, which gives users visual guidance when navigating the menu
- As above for Active/Current/Visited

## Modals
-key handlers- allow keyboard access to click buttons

```
<div tabindex="0" onclick="example()" onkeydown="return shortcut(event)">Text</div>
<script>
  function shortcut(event) {
    if (event.keyCode == 65) example();
  }
  function example() {
    alert('More text');
  }
</script>
```

- Focus(), the medium article at the bottom is great for this! 



## Useful Links
[Google accessibility course](https://webaccessibility.withgoogle.com/course) 
[MDN article](https://developer.mozilla.org/en-US/docs/Web/Accessibility) 
[Useful Medium Article](https://medium.com/@matuzo/writing-javascript-with-accessibility-in-mind-a1f6a5f467b9)
