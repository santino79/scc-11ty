---
title: "Lesson 32: Joining tables using Self Joins."
date: 1932-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
lesson_no: 32
---
![Spiderman pointing at Spiderman](/images/spiderman-point-self.jpg)

### Now that's self-restraint. Waiting until Lesson 32 before the memes come out.

Sometimes a single data table will contain self referencing data points. This means we can use one field in the table to join to another field in the **SAME** table.

To do this we have to put the one source table on the left side and the same source table on the right side of the JOIN. But we have to give each of them a separate **Table Alias**.

### Let's see an example - Watching The Detectives.

**Table Name:** DETECTIVES

|ID|Name|PartnerID|
|---|---|---|
|1|Starsky|2|
|2|Hutch|1|
|3|Cagney|4|
|4|Lacey|3|
|5|Luther|NULL|

So we have a table with a list of fictional TV detectives. Some have partners, some don't. We will write a SQL query now that only returns those who DO have a partner along with the partner's name.

We'll do this by doing a Self Inner Join on the DETECTIVES table back onto itself. We'll also use some of the Table Alias and Column Alias tricks we've learned in previous lessons.

```sql
SELECT
a.ID as DetectiveID,
a.Name as DetectiveName,
b.ID  as PartnerID,
b.Name as PartnerName 

FROM DETECTIVES as a  
INNER JOIN DETECTIVES as b 
ON a.PartnerID = b.ID;
```

**Results:**

|DetectiveID|DetectiveName|PartnerID|PartnerName|
|---|---|---|---|
|1|Starsky|2|Hutch|
|2|Hutch|1|Starsky|
|3|Cagney|4|Lacey|
|4|Lacey|3|Cagney|

So Starsky's partner is Hutch and Hutch's partner is Starsky. Cagney's partner is Lacey and Lacey's partner is Cagney. And Luther had no partner so he drops out of the results altogether.

(And no I'm not really old enough to have watched either of those two first two TV shows when they originally aired.)