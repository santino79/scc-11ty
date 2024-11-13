---
title: "Filtering results using the WHERE Clause and GREATER THAN."
date: 1905-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
lesson_no: 5
---
## SQL WHERE Clause Comparison Operators.

The WHERE clause also lets us use a range of other comparison operators.

We'll look at a list of the different comparison operators we can use and see an example of the Greater Than operator action. You should be familiar with most of these from school maths class but it never hurts to have a refresher.

### Most common comparison operators.

| Operator | Description |
|---|---|
| = | Equal to |
| != | NOT Equal to |
| <\> | NOT Equal to |
| < | Less than |
| <= | Less than OR Equal to |
| \> | Greater than |
| \>= | Greater than OR Equal to |

### An example with GREATER THAN.

The **GREATER THAN** operator lets us filter our data table on numerical fields where the value is _greater than_ the value we specify. For example, to get all products that cost more than $10 our query would be: 

```sql
SELECT * 
FROM Products 
WHERE price > 10;
```