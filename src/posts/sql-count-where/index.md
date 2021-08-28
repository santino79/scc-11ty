---
title: "Lesson 17: Counting the number of rows returned with COUNT and the WHERE clause."
date: 1917-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
---
### Being a little more specific using WHERE.

As we did before with our SELECT * query, we can filter specific rows in our table while using our COUNT(*) function. This will allow us to only count the rows in the table where the specified condition in the **WHERE** clause is met.

### Why would we do this?

Sometimes it's useful to know how many rows in total we have in our table but the real power comes with being able to count specific things in our data.

Like if we wanted to see how many of the ancient Wonders of the World would have been found in Babylon:

```sql
SELECT COUNT(*) 
FROM WondersOfTheWorld
WHERE Located='Babylon';
```

And the answer would, of course, be 1 (The Hanging Gardens of Babylon).