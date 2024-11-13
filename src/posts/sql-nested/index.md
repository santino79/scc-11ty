---
title: "Using Nested Queries "
date: 1925-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
---
### A dream within a dream. Welcome to the SQL Inception.

There may be times in your SQL querying career that you will need to put one SQL query inside another SQL query. This is called **nesting queries**.

It's possible then to use the results of a sub-query to help filter the results of the outer query. If it all sounds a bit like a Christopher Nolan movie then you are on the right lines.

### What do Nested Queries look like and why would we use them?

In our WHERE clause examples we have hardcoded the values we wanted to use in our comparisons. If we only wanted to search for holidays in Spain we could write our WHERE clause as such:

```sql
WHERE Country = 'Spain'
```

In some cases however, we may not want to hardcode the value as we mightn't know it OR it may change over time as our underlying data changes.

In our Holiday example, we may want to search for the lowest priced holiday in our Holidays table. As the data changes over time and new holidays get added in while others pass, the value of the lowest priced holiday will change.

Using a Nested Query however will allow us to always bring back the lowest priced holidays.

```sql
SELECT * 
FROM Holidays 
WHERE HolidayPrice = (SELECT MIN(HolidayPrice) FROM Holidays);
```

### What did we do there?

In the nested query (i.e. SELECT MIN(HolidayPrice) FROM Holidays), we queried the minimum price of a holiday in our Holidays table. The value this SQL query returned was then used in the WHERE clause EQUAL TO comparison in the outer query (i.e. WHERE HolidayPrice =)

We don't have to know the actual minimum price every day, the **Nested Query** does all of the hard work for us.