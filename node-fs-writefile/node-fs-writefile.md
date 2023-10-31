# node-fs-writefile-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What method is available in the `node:fs` module for writing data to a file?
  A: `writeFile` method

fsPromises.writeFile(file, data[, options])

Asynchronously writes data to a file, replacing the file if it already exists. data can be a string.

- Are file operations using the `fs` module synchronous or asynchronous?
  File operations using the fs module in Node.js are asynchronous by default.
  o This means that the code will not wait for the file operation to complete before continuing. Instead, the code will continue executing and the file operation will be performed in the background.

There are also synchronous versions of the fs methods, which can be used by adding Sync to the end of the method name. For example, readFile becomes readFileSync.
o Synchronous methods block the main thread until the file operation has completed, so they should be used sparingly.

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
