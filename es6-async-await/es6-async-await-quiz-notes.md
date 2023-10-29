# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  A: The `async` keyword is used to define an asynchronous function, which returns a new Promise.

The `await` keyword is used to wait for a Promise and get its fulfillment or rejection value. It can only be used inside an async function or at the top level of a module.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  A: The `async/await` is more concise and make the asynchronous code looks like a sequential code. We can use the try...catch block for error handling. It also unwraps the result of a Promise, so we can work directly with the resolved value.

- When do you use `async`?
  A: When we want to define an asynchronous function that can take some time to complete the request such as fetching a data from an APi or reading from files.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  A: Use `await` when:
  o working with asynchronous function that returns a Promise
  o sequential asynchronous functions that depend on the results of previous ones. This ensure that each operation runs in order.

  NOT to use `await` when:
  o synchronous functions
  o Promises that immediately resolves with a value (synchronously)

  `await`a synchronous function will pause the function execution when it's not neccessary. It's also blocking the main thread, which is contray to the goal of asynchronous programming.

- How do you handle errors with `await`?
  A: by using the try...catch block around the `await` statement

- What do `try`, `catch` and `throw` do? When do you use them?
  A:

A try block is used to define a block of code to be tested for errors while it is being executed.
o Use it when we anticipate that a specific section of your code might throw an error or an exception

A `catch` block contains statements that specify what to do if an exception is thrown in the try block.
o Use to handle and respond to exceptions or errors that occur in the associated try block.

We use the `throw` statement to throw an exception. A throw statement specifies the value to be thrown.
o Use it to create and throw custom errors or to propagate existing errors with additional context.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  A: The function will not wait for the execution of the Promise to complete. The function will continue executing immediately after the Promise is encountered. This can lead to unexpected behavior.

A rejected promise can lead to an "unhandled promise rejection" since there is not error handling such as the 'catch' block.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  A: async/await because the syntax is easier to read and use.

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
