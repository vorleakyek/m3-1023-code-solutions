# express-hello-world-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express middleware?
A: Express middleware is a function that is executed during the request-response cycle.
    o It has access to the request object, the response object, and the next middleware function.
    o Middleware can execute any code, make changes to the request and response objects, and end the request-response cycle.

  Middleware functions can perform the following tasks:
    o Execute any code.
    o Make changes to the request and the response objects.
    o End the request-response cycle.
    o Call the next middleware function in the stack.

- What is Express middleware useful for?
A: Middleware is often used to perform common tasks such as logging, authentication, and error handling.
  o It can also be used to implement custom functionality, such as rate limiting or content negotiation.

- How do you mount a middleware with an Express application?
A: by calling the app.use() method and pass in the middleware function.

app.use(function(req, res, next) {
  console.log(req);
  console.log(res);
  next();
});

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
A: It has access to the request object, the response object, and the next middleware function.


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
