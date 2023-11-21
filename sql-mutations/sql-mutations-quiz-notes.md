# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  A: CRUD stands for Create, Read, Update, and Delete

Create -> insert
Reade -> select
Update -> update
Delete -> delete

- How do you add a row to a SQL table?
  A: Using the "insert" keyword.

insert into "products" ("name", "description", "price", "category")
values ('Ostrich Pillow', 'Feel comfy and cozy!', 99, 'self care');

- How do you add multiple rows to a SQL table at once?
  A: Data rows can be batch inserted into a database table by specifying more than one tuple of values, separated by commas. B

insert into "products" ("name", "description", "price", "category")
values ('Ostrich Pillow', 'Feel comfy and cozy!', 99, 'self care'),
('Tater Mitts', 'Scrub some taters!', 6, 'cooking')
returning \*;

- How do you update rows in a database table?
  A: using the "update" and "set" keywords, and also including a where clause in the update statements to only target specific rows

update "products"
set "price" = 100
where "productId" = 24;

- How do you delete rows from a database table?
  A: using the "delete" keyword and include a where clause in the delete statements to only target specific rows

delete
from "products"
where "productId" = 24
returning \*;

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  A: to only target specific rows, so the it won't update or delete every rows

- How do you accidentally delete or update all rows in a table?
  A: not including the 'where' clause when updating or deleting a table

- How do you get back the modified row without a separate `select` statement?
  A: using the "return" keyword

Note:
In PostgreSQL it’s possible to get the full inserted row back from the database, including its auto-generated attribute(s), like a productId. This is done with a returning clause. Otherwise, it would be necessary to make a separate query to the database just to get the auto-generated attributes.

- Why did you get an error when trying to delete certain films?
  A: because there is a foreign key constraint violation

It is violating the foreign key constraint named "film_actor_film_id_fkey" on the "castMembers" table.
There is a row in the "castMembers" table that have a foreign key pointing to the "films" table with the filmId value of 384.

Note:
A foreign key is a column or a set of columns in a table that refers to the primary key or a unique key in another table. It establishes a link between the data in two tables, enforcing referential integrity.

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
