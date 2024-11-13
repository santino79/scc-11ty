---
title: "Finding the average of numerical values using the AVG function."
date: 1919-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
lesson_no: 19
---
### What is the Average?

In maths when we talk about the Average, we actually mean the **Mean**. The easiest way to think of doing it manually is to add up all of the numbers in the set and then divide the total by however many numbers you had in the list.

So if we had a set of numbers like this: 1 2 3 4 5 6 7

Our sum total would be: 1+2+3+4+5+6+7 = 28

The number of numbers in our set is 7.

So the Average (or Mean) is 28 / 7 = 4.

### I didn't ask for a maths lesson. How about in SQL?

If we want to find out what the AVERAGE (or MEAN) value within a specified column is, we use the AVG function,

e.g. 

```sql
SELECT AVG(PlayerWage) FROM Players;
```

Which would give us the average player's wage from within our "Players" data table.