---
title: "Lesson 30: Using a Table Alias."
date: 1930-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
lesson_no: 30
---
### What is a Table Alias and why would we use it?

Typing out full table names in our **SELECT** statement and **WHERE, GROUP BY** and **ORDER BY** clauses can get a bit tedious if we are specifying a lot of columns. It also gets very messy to read, follow and maintain.

We can tidy up the look of our query by using an **_alias_** to represent each table in the query. 

```sql
SELECT Products.description, Products.category, Products.price 
FROM Products;
```

could be re-written as:

```sql
 SELECT p.description, p.category, p.price 
 FROM Products AS p;
 ```
 
This allows us to use the alias ("p" in our example) instead of typing out the full table name each time.

We can even omit the **AS** keyword, if the table name is immediately followed by its alias:

```sql
 SELECT p.description, p.category, p.price
 FROM Products p;
 ```