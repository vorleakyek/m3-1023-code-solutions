# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
A: When the component is on intial load, so when it appears on the screen for the first time.

- What is a React Effect?
A: React effect allows us to synchronize a component with some external system (third-party API, network, etc).

Notes:
Effects are typically used to “step out” of your React code and synchronize with some external system. This includes browser APIs, third-party widgets, network, and so on.

Unlike events, Effects are caused by rendering itself rather than a particular interaction.

- When should you use an Effect and when should you not use an Effect?
A: Use an Effect to fetch data and directly updating the DOM.

Should not use Effect for a simple state updates.

- When do Effects run?
A: By default, Effects run after every render (including the initial one).

- What function is used to declare an Effect?
A: the 'useEffect' function

- What are Effect dependencies and how do you declare them?
A: Effect dependencies are the values that React will use to determine when to run the effects. So, it won't run after every render.

Pass in the second argument to the 'useEffect' function.

useEffect(() => {
  // some code
}, [dependency1, dependency2, ...]);

- Why would you want to clean up from an Effect?
A: because some Effects need to specify how to stop, undo, or clean up whatever they were doing.

For example, “connect” needs “disconnect”, “subscribe” needs “unsubscribe”, and “fetch” needs either “cancel” or “ignore”.

- How do you clean up from an Effect?
A: By returning a cleanup function from within the useEffect callback function

// Effect for the third render (roomId = "travel")
  () => {
    const connection = createConnection('travel');
    connection.connect();
    return () => connection.disconnect();
  },
  // Dependencies for the third render (roomId = "travel")
  ['travel']

- When does the cleanup function run?
A: React will call your cleanup function before the Effect runs next time, and during the unmount.

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
