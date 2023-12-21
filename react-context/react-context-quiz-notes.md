# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?
A: Context lets a parent component provide data to the entire tree below it without having to pass props down through each level of nested components.

- What values can be stored in context?
A: primitive type such as string, numbers, booleans, null or undefined, objects, array, and functions.

- How do you create context and make it available to the components?
A: Create and export it
    o import { createContext } from 'react';
    o use the 'createContext' function with a default value to create a new context
    o export it from a file so that your components can use it

    For example: export const MyContext = createContext(defaultValue)

  Wrap children into the provider component with the specified value as the prop to provide it from a parent.
  Example: <MyContext.Provider value={...}>

- How do you access the context values?
A: Use the "useContext" hook with the context value as an arguement
   Example: useContext(MyContext)

- When would you use context? (in addition to the best answer: "rarely")
A: Use cases for context

Theming: If your app lets the user change its appearance (e.g. dark mode), you can put a context provider at the top of your app, and use that context in components that need to adjust their visual look.

Current account: Many components might need to know the currently logged in user. Putting it in context makes it convenient to read it anywhere in the tree. Some apps also let you operate multiple accounts at the same time (e.g. to leave a comment as a different user). In those cases, it can be convenient to wrap a part of the UI into a nested provider with a different current account value.

Routing: Most routing solutions use context internally to hold the current route. This is how every link “knows” whether it’s active or not. If you build your own router, you might want to do it too.

Managing state: As your app grows, you might end up with a lot of state closer to the top of your app. Many distant components below may want to change it. It is common to use a reducer together with context to manage complex state and pass it down to distant components without too much hassle.

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
