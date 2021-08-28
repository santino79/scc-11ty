---
title: "Lesson 7: Filtering results using the WHERE Clause and the OR operator."
date: 1907-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
---
### Leveling up our WHERE clause with OR.

In the WHERE clause we can also tailor our results by joining conditions where _EITHER_ of them can be met by using the **OR operator**.

Maybe I'm not quite so worried about the particular holiday destination and am open to available suggestions on the type of holiday I’m looking for. I’d quite like to visit a European country that I know to have a hot climate during the summer months.

For example, 

```sql
SELECT * 
FROM Holidays 
WHERE Country='Spain' OR Country='Portugal' OR Country='Greece';
```