---
title: "Lesson 23: Handling NULL values."
date: 1923-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
---
![Zero vs Null](/images/zero-vs-null.jpg)

### What's the difference between zero and null?

The image above (which I saw on [Reddit](https://www.reddit.com/r/geek/comments/6128y3/amusing_example_between_0_and_null_0_on_the_left/)\) is a brilliant illustration of the difference between zero and null. On the left, there is zero toilet roll. On the right, there is null.

Zero means there is none. Null means it does not exist. The two are **VERY** different.

### Why do I need to care aboout NULLs?

Nulls can seriously mess up your data analysis. Good database design _usually_ says that reducing the possibility of NULLS in your database is the best plan. There may be valid and logical reasons for this not being the case with some of your data fields however.

### What can NULLs mess up?

Aggregate functions in SELECT statements are a particular danger area when it comes to NULL values. Not adequately understanding the impact of a lot of NULLs in your results can then lead to erroneous analysis and reporting. Not good.

### How do we deal with them?

We can do it in our SQL code in a few different ways.

1. Use **COALESCE** to replace the null values with appropriate default replacements (we'll cover this in a future lesson so hold tight).
2. Use an **"IS NULL"** or **"IS NOT NULL"** condition in your WHERE clause e.g.

```sql
SELECT sum(HolidayPrice)
FROM Holidays 
WHERE HolidayPrice IS NOT NULL;
```