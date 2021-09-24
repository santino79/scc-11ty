---
title: "Lesson 4: Filtering results with the WHERE Clause."
date: 1904-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
lesson_no: 4
---
### The WHERE clause allows us to filter the results by a set of criteria.

After the SELECT statement, the SQL WHERE clause might just be the second most important piece of code you learn in your data analysis career. I know that sounds like hyperbole but I really believe it.

Specifying the columns we want in our SELECT statement lets us limit the columns of data we return in our SQL query. If we want to filter the rows however based on certain criteria, we use the WHERE clause.

The WHERE clause lets us laser focus on exactly which records within our data table we need. And that will make all the difference.

If we want to only grab the products that are books from a Products table, we could use the query: 

```sql
SELECT * 
FROM Products 
WHERE product_type='book'; 
```