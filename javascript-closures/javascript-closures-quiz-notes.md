# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?
A: The scope of a variable is determined by the location of the variable declaration in the source code.

There are three types of scope in JavaScript: global, local, and block.
o Global scope is the scope of variables that are declared outside of any function. Global variables
 are accessible throughout the entire program.

o Local scope is the scope of variables that are declared inside a function. Local variables
 are accessible only within the function in which they are declared.

o Block scope is the scope of variables that are declared inside a block of code
, such as a for loop or an if statement. Block variables are accessible only within the block in which they are declared.

- What allows JavaScript functions to "remember" variables from their surroundings?
A: because of "closures".

A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.

A closure can capture constants and variables from the surrounding context in which it's defined. The closure can then refer to and modify the values of those constants and variables from within its body, even if the original scope that defined the constants and variables no longer exists.


- What values does a closure contain?
A: It contains a function and its environment. So, it stores the actual function that is defined inside another function and the references to the variables present inside the scope chain.


Every closure has three scopes:
o Local scope (Own scope)
o Enclosing scope (can be block, function, or module scope)
o Global scope

- When is a closure created?
A: A closure is created when a function is defined inside another function, and the inner function references variables from the outer function. The closure's environment keeps the bound variables in memory between uses of the closure.

When a function gets created and passed around or returned from another function, it carries a backpack with it. And in the backpack are all the variables that were in scope when the function was declared.

- How can you tell if a function will be created with a closure?
A: If there is a function defined inside another function, and the inner function uses a variable from the outter functon's scope. The outer function returns the innerfunction.

Note: Closures are often returned from outer functions.

- In React, what is one important case where you need to know if a closure was created?
A: When using useEffect or when passing functions to another component.

In useEffect, two problems frequently arise: stale closures and infinite rerenders.

o A stale closure happens when a closure "captures" a variable but is not updated when that variable changes. Since closures capture variables, you would think that the function always accesses the up-to-date value. However, this will only be true if the variable that the closure captured changes. It is easy to miss when a closure accidentally captures a variable that is no longer in scope.

o We will now explore what happens when a function is used in an Effect. Recall that function references are recreated by JavaScript every time they are referenced. If a function is a useEffect dependency, since it changes on each execution, the dependencies will change and the Effect will run repeatedly.


## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
