---
title: "Lesson 22: Using the HAVING clause to filter aggregate functions."
date: 1922-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
---
### Houston, we have a problem.

SQL queries run in a standard order. First the **FROM** and **JOINs** (check out [Lesson 26](/sql-joins) for Joins) are executed so SQL knows what set of data to do the rest of the work on. Next is the WHERE clause so it can filter out individual rows that don't meet the criteria.

After this SQL goes to the **GROUP BY clause** to group up the data based on common values specified. Which leaves us with a conundrum if we want to filter on the aggregate functions the** GROUP BY** is helping us with. **WHERE** is no good to us as it's already shot it's bolt in the running order.

### Introducing HAVING.

So the **HAVING clause** was introduced to SQL to allow us to apply filters and constraints to the grouped data and aggregate functions.

### Where does it come in our SQL query?

We bring in the HAVING clause _AFTER_ the GROUP BY clause.

```sql
SELECT AccountType, COUNT(AccountID) 

FROM Accounts

GROUP BY AccountType 

HAVING COUNT(AccountID) > 100;
```

The **HAVING clause** in this query can bring in the aggregate function **COUNT** and filters out any Account Types that have less than 100 Account IDs associated with them in the Accounts table.