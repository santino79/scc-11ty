---
title: "Lesson 21: Aggregate functions using the GROUP BY clause."
date: 1921-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
lesson_no: 21
---
### Stepping up our function powers.

Using your new-found SQL function (COUNT, SUM, AVG, MIN, MAX) superpowers on the whole data table won't happen as often as you might hope. It's more useful to our business area if we are able to split our data up into smaller segments to allow greater comparison across these very, very useful aggregated functions.

So we need a way to group togther certain data points to allow us to perform our functions and get a more useable result. And we do that with the **GROUP BY** clause.

### Let's see an example.

In our Footballer example, it would be useful to see how many players we had in our table. It doesn’t really tell us if certain clubs are higher payers overall or if the top earning players are clustered at certain clubs.

|PlayerID|PlayerName|Team|PlayerWage|
|---|---|---|---|
|1|Messi|BARCELONA|500000|
|2|Ronaldo|JUVENTUS|450000|
|3|Neymar|PSG|400000|
|4|Suarez|BARCELONA|350000|
|5|Kane|TOTTENHAM|200000|

We will re-do our **COUNT** function next but bring in another variable (the column _TEAM_) to see if one club has more high earners than the others. Our SQL looks like this: 

```sql
SELECT Team, COUNT(PlayerID)
FROM Players 
GROUP BY TEAM;
```
And our SQL results would look like this:

|TEAM|NumberOfPlayers|
|---|---|
|BARCELONA|2|
|JUVENTUS|1|
|PSG|1|
|TOTTENHAM|1|

A quick scan of our results shows that Barcelona have more high earning players than any other team in our example data table.

### So how did we set that up?

From the SQL, you can see we asked for two elements in our **SELECT** statement:

1) Team
2) A COUNT of the PlayerID rows

We wanted to query the **PLAYERS** table so that went in the **FROM** line.

And we used the **GROUP BY** clause at the end to specify that we wanted to group our results by the **Team** column to segment our results.