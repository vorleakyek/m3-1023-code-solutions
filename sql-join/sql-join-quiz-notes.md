# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?
  A: A foreign key is a column or a set of columns in a relational databased table that refers to the primary key or a unique key in another table.

The foreign key in one table refers to the primary key or unique key in another table, representing a connection between the two tables.

- How do you join two SQL tables? (Provide at least two syntaxes.)
  A: using the "join" keyword

select "products"."name" as "product",
"suppliers"."name" as "supplier"
from "products"
join "suppliers" using ("supplierId");

Here are some types of joins in SQL:
o Inner Join: Returns rows with matching columns
o Left Join: Returns all records in the left table and matching records in the right table
o Right Join: Returns all records in the right table and matching records in the left table
o Union: Removes duplicates
o Full Outer Join: Returns all rows from both tables

- How do you temporarily rename columns or tables in a SQL statement?
  A: use the "AS" keyword to create an alias

Aliases are often used to make column names more readable. They only exist for the duration of the query.

select "p"."name" as "product",
"p"."category",
"s"."name" as "supplier",
"s"."state"
from "products" as "p"
join "suppliers" as "s" using ("supplierId");

- How do you create a one-to-many relationship between two tables?
  A: by having a foreign key in one table pointing to a primary key in another table

One record in the first table can be related to multiple records in the second table, but each record in the second table is related to only one record in the first table.

- How do you create a many-to-many relationship between two tables?
  A: by introducing a 3rd "join table" that contains a foreign key to one of the tables and another foreign key to the other table.

This junction table typically contains foreign keys that reference the primary keys of the two tables involved in the relationship.

Example: Each student can be associated with multiple courses, and each course can have multiple associated students.

students class
1 Math
1 History
2 Math

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
