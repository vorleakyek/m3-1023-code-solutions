# fetch-in-react-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How can `useEffect` be used to load data for a component?
A:
o import 'useEffect' from React module
o use the 'useEffect' to get the data by using fetch when the component mounts
    o using async and await function
    o declare an async function inside your useEffect arrow function and then call it immediately after declaring it, without await.
o use 'useEffect' dependencies when needed

useEffect(() => {
  async function foo() {...}
  foo();
}, [deps]);

- What browser function can be used to make HTTP requests to a server in React?
A: fetch API
The fetch function is used to make an HTTP request to get user data.

- How do you use `useEffect` to load component data just once when the component mounts?
A: declare an Empty dependency array ([]) as a second argument in the

useEffect(() => {
  // This runs only on mount (when the component appears)
}, []);

- How do you use `useEffect` to load component data every time the data key changes?
A: pass the data key as a dependency into the dependency array

useEffect(() => {
  // This runs on mount *and also* if either a or b have changed since the last render
}, [a, b]);

- In a large-scale production app, what are some better alternatives for loading and managing backend data?
A: Manage all your data accesses with a third-party data management library.
Some good open source packages are React Query and Vercel SWR work.

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
