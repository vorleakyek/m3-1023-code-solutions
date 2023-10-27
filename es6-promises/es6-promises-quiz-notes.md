# es6-promises-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the Event Queue model of Promises?
  A: the Event Queue model of Promises is as follows:

o When the Promise is created, the Promise task is synchronously put onto the Event Queue.
o Synchronous execution of the calling code continues until the end of the function(s).
o When the current functions complete, the Event Loop runs.
o The Promise task is taken from the Event Queue and executed.
o After the Promise task completes:
o If it completes successfully, the Promise calls the then handler
o If it completes with an error, the Promise calls the catch handler
o The Promise then calls the finally handler (in all cases).

- What are the three states a Promise can be in?
  A: A Promise is in one of these states:
  o pending: initial state, neither fulfilled nor rejected.
  o fulfilled: meaning that the operation was completed successfully.
  o rejected: meaning that the operation failed.

- How do you handle the fulfillment of a Promise?
  A: Use the ".then()" method to specify what should happen when the Promise is resolved or fulfilled.

- How do you handle the rejection of a Promise?
  A: Use the ".catch()" method to specify what should happen when the Promise is rejected.

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
