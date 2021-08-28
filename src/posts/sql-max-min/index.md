---
title: "Lesson 20: Finding the minimum and maximum values using MIN and MAX functions."
date: 1920-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
---
### Highest.

If we want to find out what the highest value within a specified column is, we use the MAX function. This gives us the MAXIMUM value. Like this,

```sql
SELECT MAX(IntlCaps)
FROM Footballers;
```

### Lowest.
If we want to find out what the lowest value within a specified column is, we use the MIN function. This gives us the MINIMUM value. For example, 

```sql
SELECT MIN(IntlCaps)
FROM Footballers;
```