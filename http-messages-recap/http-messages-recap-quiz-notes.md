# http-messages-recap-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a client?
  A: a client is a piece of computer hardware or software that accesses a service made available by a server as part of the client–server model of computer networks.

For example, web browsers are clients that connect to web servers and retrieve web pages for display.[2] Email clients retrieve email from mail servers.

- What is a server?
  A: a server is a piece of computer hardware or software (computer program) that provides functionality for other programs or devices, called "clients".

- Which HTTP method does a browser issue to a web server when you visit a URL?
  A: HTTP GET request

o retrieve data from the server
o does not typically include a request body

- What is on the first line of an HTTP **request** message?
  A start-line describing the requests to be implemented, or its status of whether successful or a failure. This start-line is always a single line.

o An HTTP method, a verb (like GET, PUT or POST) or a noun (like HEAD or OPTIONS), that describes the action to be performed.
o The request target, usually a URL, or the absolute path of the protocol, port, and domain are usually characterized by the request context.
o The HTTP version, which defines the structure of the remaining message, acting as an indicator of the expected version to use for the response.

- What is on the first line of an HTTP **response** message?
  Status line
  The start line of an HTTP response, called the status line, contains the following information:

The protocol version, usually HTTP/1.1.
o A status code, indicating success or failure of the request. Common status codes are 200, 404, or 302
o A status text. A brief, purely informational, textual description of the status code to help a human understand the HTTP message.
o A typical status line looks like: HTTP/1.1 404 Not Found.

- What are HTTP headers?
  A: HTTP headers are name-value pairs that are part of Hypertext Transfer Protocol (HTTP) requests and responses. They transmit additional information between clients and servers.

- Is a body required for a valid HTTP message?
  A: A body is not required for a valid HTTP message.

However, some request methods require a body. For example, a request with the POST method has a message body that contains data. A request with the GET method does not have a message body.

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
