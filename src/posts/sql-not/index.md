---
title: "Filtering results using the WHERE Clause and the NOT operator."
date: 1909-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
---
### Flipping It Around.

When we use the **AND** operator in our WHERE clause we look for rows where **ALL** of the conditions are met.

When we use the **OR** operator, we look for rows where **ANY** of the conditions are met.

But what if we want to find out which rows **DON'T** meet the criteria we're filtering for? That's when we bring out the keyword **NOT**.

### An example.

We want to go to a warm, sunny climate on holiday. Not somewhere we'd need ten layers of clothing and the only wildlife we'd see would be polar bears and penguins.

```sql
SELECT * 
FROM Holidays 
WHERE Country NOT IN ('North Pole','South Pole');
```
What we are asking (or querying) the database for then is:

  1. All of the columns
  2. From the Holidays table
  3. Where the Country is not either the North Pole nor the South Pole.

With this SQL, we&#8217;ve told it:

* what we want
* where we want it from 
* and been even more specific about which sub-group of the wider group we do NOT want to see.