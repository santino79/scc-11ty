---
title: "How to LIMIT the number of results returned."
date: 1915-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
---
### When you only want a few rows back.

Sometimes you don't want to bring back every row in a table. We've already seen how we can limit the columns returned by our query by specifying column names in our **SELECT statement**. We can also filter the rows returned by being a little more focused when we put together our **WHERE clause**.

But what if we only want a certain number of rows for a sample of data? Do we have to bring them all back and then just hive a few off the top in an Excel spreadsheet? Of course not, SQL has us covered.

### Take it to the LIMIT one more time.

The LIMIT clause allows us to specify how many rows our query brings back. In our SQL query it should come last, after the **ORDER BY** clause:

```sql
SELECT * 
FROM EnglishMonarchs  
WHERE FirstName='Elizabeth' 
ORDER BY CoronationDate 
LIMIT 1;
```

This query would bring us back one single row (LIMIT 1) from our table of English Monarchs with the first name of Elizabeth, ordered in ascending order by the date of their Coronation. In this case it would return "Elizabeth I".

If we set the LIMIT clause to "LIMIT 2" then it would bring back two rows - in this example both Elizabeth I and Elizabeth II.

### When would I use this?

You may just want to get a taste for some live data to do some further investigation into the structure and components it holds. There's no sense returning one million rows in that case when you can do a LIMIT 20 and only bring back twenty. Your DBAs and Tech Team will be happier in terms of database and network load for a start.

### Does it work on all flavours of SQL?

Eh, no. Microsoft being Microsoft had to do things a little differently in their own SQL dialect used in MS SQL Server and MS Access. There we use the **"SELECT TOP"** statement instead:

```sql
SELECT TOP 100 
FROM Songs 
ORDER BY RecordSales DESC;
```