---
title: "Removing duplicates from results with the DISTINCT keyword."
date: 1912-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
lesson_no: 12
---
### Duplicates in data tables are a fact of life.

They can cause serious issues when performing calculations or counts if not properly de-duped. We can do this in the **SELECT statement** by using the **DISTINCT keyword**. This means only one "_distinct_" data row is returned for each combination of columns in our statement. 

For example,

```sql
SELECT DISTINCT Surname 
FROM PlayerNames;
```

This would mean that no matter how many times a particular surname appeared in the "Surname" column of our table, our results would only bring it back ONCE.

Duplicates be gone.