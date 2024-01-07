# react-custom-hooks-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a React custom hook?
A: A custom Hook is a JavaScript function that we can use to create specific logic, and then use that function to share logic and stateful logic between components.

- When are custom hooks useful? When are they not required?
A: Custom hooks are useful when we need to share logic across multiple components or dealing with stateful logic that can be reusable.

- What is the syntax (or naming convention) for writing a custom hook?
A: Custom Hooks must be named starting with "use" followed by a capital letter.

- How do you call a custom hook?
A: We can call a custom hook by invoke it like any other function. For examples,
    o const { data, isLoading, error } = useCustomHook();
    o const { result } = useCustomHookWithParams('someValue');

- When do custom hooks execute?
A: Custom hooks execute when they are called within the React component. All Hooks re-run every time the component re-renders.

Note: Because custom Hooks re-render together with the component, they always receive the latest props and state.

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
