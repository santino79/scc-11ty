---
title: "Lesson 6: Filtering results using the WHERE Clause and the AND operator."
date: 1906-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
lesson_no: 6
---
### Leveling up our WHERE clause with AND.

We can power up our **WHERE clause** even further by using more than one condition at a time. We can join conditions that BOTH have to be met using the **AND operator**.

Let's say I’m on a travel comparison website looking for a holiday for my family. I know which country I want to visit and what type of holiday we are looking for. I want to see all results which are _BOTH_ in Spain and are Beach holidays.

Nothing else. No city breaks. No camping trips. Not in Italy, France or Greece.

Just **beach holidays** in **Spain**.

So I write a SQL query like this: 

```sql
SELECT * 
FROM holidays 
WHERE Country='Spain' AND HolidayType='Beach'
```