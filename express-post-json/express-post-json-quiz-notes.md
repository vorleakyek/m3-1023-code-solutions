# express-post-json-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does the `express.json()` middleware do and when would you need it?
A: The express.json() middleware in Express.js is used to parse JSON request bodies.
    o When a client sends data to the server in JSON format, such as in a POST or PUT request, the express.json() middleware is responsible for parsing that JSON data and making it available for your route handlers to work with.

  When need it:
  o Parsing JSON Request Bodies
    o the JSON data is typically sent in the request body
    o To access and work with this data in your Express route handlers, we need to parse it.
    o The express.json() middleware performs this parsing for you

  o app.use(express.json())
    o This middleware parses the JSON data and attaches it as req.body for the specific route, making it accessible to your route handler.


## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
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
  width:100%
}
```
