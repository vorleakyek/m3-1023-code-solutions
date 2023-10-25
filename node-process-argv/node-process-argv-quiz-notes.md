# node-process-argv-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `process` object in a Node.js program?
  A: The process object is a global that provides information about, and control over, the current Node.js process.

- How do you access the `process` object in a Node.js program?
  A: As a global, it is always available to Node.js applications without using require().

It can also be explicitly accessed using require().
const process = require('process');

- What is the data type of `process.argv` in Node.js?
  A: The process.argv property returns an array containing the command line arguments passed when the Node.js process was launched.

- How do you access the command line arguments in a Node.js program?
  A: The simplest way to access command line arguments in a Node.js program is to use the process.argv array. So, we can loop through the array to get the value of each element.

process.argv.forEach((val,index) => {
index > 1 && console.log(`${val}`)
})

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
