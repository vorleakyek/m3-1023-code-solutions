# sql-select-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is SQL and how is it different from languages like JavaScript?
  A: SQL stands for "Structured Query Language". It is the primary way of interacting with relational databases. It is a powerful way of retrieving, creating, and manipulating data in a relational database.

JavaScript is an imperative programming language where we basically tell the JavaScript runtime what to do and how to do it.

o Store this value (variables)
o Make this choice (conditionals)
o Repeat these steps (loops)

SQL is a declarative programming language where we describe the results that we want and the programming environment will come up with its own plan for getting those results.

Relational databases interpret SQL and then dynamically generate a plan of action to perform the programmer's commands as efficiently as possible.

- How do you retrieve specific columns from a database table?
  A: use the "select" key word followed by the column names

select "name",
"price"
from "products";

- How do you filter rows based on some specific criteria?
  A: use the "where" clause

select "productId",
"name",
"price"
from "products"
where "category" = 'cleaning';

- What are the benefits of formatting your SQL?
  A:

o make it easier to read and understand
o help prevent errors when making changes to the code

- What are four comparison operators that can be used in a `where` clause?
  A: = , <, >, and !=

- How do you limit the number of rows returned in a result set?
  A: using the "limit" keyword

select "name",
"description"
from "products"
order by "price" desc
limit 1;

- How do you retrieve all columns from a database table?
  A: useing the asterisk

select \*
from "products";

- How do you control the sort order of a result set?
  A: using the "order by" keyword

select "name",
"description"
from "products"
order by "price" desc
limit 1;

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
