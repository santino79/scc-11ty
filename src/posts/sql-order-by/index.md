---
title: "Sorting results using ORDER BY."
date: 1913-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
---
### Ordering and arranging our results.

SQL isn't just about grabbing rows of data from our database tables. It's also useful for arranging and sorting the order of our results to make them easier to analyse.

We can sort by specific columns and attributes by using the **ORDER BY** keyword. For example, we could sort our footballers by alphabetical order on their surnames as so: 

```sql
SELECT FirstName, Surname 
FROM footballers 
ORDER BY Surname; 
```

|PlayerID|FirstName|Surname|
|---|---|---|
|1|Trent|Alexander-Arnold|
|3|Harry|Kane|
|4|Mo|Salah|
|2|Wilfred|Zaha|

### The other way around.
We could reverse the order of the sort by adding the additional keyword **DESC** at the end of the query. For our footballer example, that would put Wilfred Zaha first in our results and Trent Alexander-Arnold last.

```sql
SELECT FirstName, Surname 
FROM footballers 
ORDER BY Surname DESC; 
```

|PlayerID|FirstName|Surname|
|---|---|---|
|2|Wilfred|Zaha|
|4|Mo|Salah|
|3|Harry|Kane|
|1|Trent|Alexander-Arnold|