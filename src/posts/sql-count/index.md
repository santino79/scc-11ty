---
title: "Lesson 16: Counting the number of rows returned with COUNT."
date: 1916-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
---
### Starting with functions.

You are probably familiar with functions if you have ever used Excel.

Functions in SQL do a similar job as the ones you’ll have encountered before. SQL functions such as COUNT, SUM, MIN, MAX and AVG all let you perform basic mathematical operations on your data.

From counting the number of rows to finding the maximum value of a certain column in your data table, SQL functions will soon become the lifeblood of your Data Analysis SQL career.

### COUNT.

The **COUNT** function allows you to count the number of rows in your table. You can use the asterisk (\*) wildcard to count everything,

e.g. 

```sql
SELECT COUNT(*)
FROM WondersOfTheWorld;
```