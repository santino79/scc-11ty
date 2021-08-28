---
title: "Lesson 8: Filtering results using the WHERE Clause and the IN operator."
date: 1908-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
---
### Tidying up our WHERE clause with IN.

You can see from the previous **OR operator** example how your WHERE clause could get a little unwieldy after a while when using multiple different conditions.

If we were also specifying date ranges, upper and lower price limits, types of holiday, number of passengers etc. as well it could become _VERY_ untidy to read and maintain.

We can do a little housekeeping to protect against that in our IDE by using brackets and liberal use of tabs. To tidy up the multiple OR conditions themselves we could also use the **IN statement**.

E.g. 

```sql
SELECT * 
FROM holidays 
WHERE Country IN ('Spain','Portugal','Greece');
```
