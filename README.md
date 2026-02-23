1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
  Ans: getElementById finds one element by its unique ID, getElementsByClassName finds multiple elements by their class name while querySelector 
finds the first matching element using any CSS selector and querySelectorAll finds all matches

2. How do you create and insert a new element into the DOM?
   Ans: document.createElement() to create an element, then use appendChild() or append() to insert it into the DOM.

3. What is Event Bubbling? And how does it work?
   Ans:Event bubbling is when an event triggered on a child element propagates upward through its parent elements, allowing parent handlers to detect
    events that happen on their children.

4. What is Event Delegation in JavaScript? Why is it useful?
   Ans:Event delegation is to attach a single event listener to a parent element instead of multiple listeners to child elements.
   It uses event bubbling to catch events from children.

5. What is the difference between preventDefault() and stopPropagation() methods?
   Ans:preventDefault() prevents the browser's default behavior
   stopPropagation() stops the event from bubbling up to parent elements

