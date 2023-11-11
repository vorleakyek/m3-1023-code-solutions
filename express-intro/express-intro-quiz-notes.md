# express-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express useful for?
  A: Express.js or Express is a popular web application framework for Node.js.
  It is used to create web applications and APIs quickly and easily.

Here are some of the things Express can be used for:
o Creating web applications and APIs
o Handling routing and requests
o Managing sessions and cookies
o Serving static files
o Working with databases and other data sources
o Implementing security measures
o Extending with custom modules and libraries

Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of writing server-side code by providing a simple and flexible API for building web applications and APIs. With Express.js, we can set up middlewares to respond to HTTP Requests, define routing rules, and add more additional features like template engines.

- How does Express fit into a full-stack web application?
  A: Express is being used as the backend server framework.

Features of Express
o API: Express provides a simple and flexible API for building web applications and APIs.
o Middleware: Express can set up middlewares to respond to HTTP requests.
o Routing: Express can define routing rules.
o Features: Express can add additional features like template engines.

Benefits of Express
o Minimalistic approach: Express has a minimalistic approach.
o Easy routing: Express has easy routing.
o Middleware support: Express has middleware support.
o Flexibility: Express is flexible.
o Routing and error handling: Express has robust routing and error handling.
o Security: Express has middleware-based security.
o Integration: Express integrates with the Node.js ecosystem.
o Community: Express has a supportive community.

- How do you add `express` to your package dependencies?
  A: npm install express

- What Express application method starts the server and binds it to a network `port`?
  A: the listen() method of Express application object

import express from 'express';

const app = express();

app.listen(8080, ()=>{
console.log('Express server listening on prot 8080');
})

- What is a network `port`?
  A: A port is a virtual point where network connections start and end. Ports are software-based and managed by a computer's operating system. Each port is associated with a specific process or service. Ports allow computers to easily differentiate between different kinds of traffic: emails go to a different port than webpages, for instance, even though both reach a computer over the same Internet connection.

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
