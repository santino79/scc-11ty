---
title: "Lesson 18: Summing all values using the SUM Function."
date: 1918-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
---
The **SUM** function allows you to do a summary calculation on a particular column in your data table. No wildcards here, we **MUST** specify the individual column we want to summarise.

The easiest way to think about the **SUM** function is to use it to add up all of the values in a particular column. If we want to find the total number of international caps for our football players, our SQL query would look like this: 

|ID|PlayerName|IntlCaps|
|---|---|---|
|1|Peter Shilton|125|
|2|Pat Jennings|119|
|3|Bobby Moore|108|
|4|Diego Maradona|91|


```sql
SELECT SUM(IntlCaps) 
FROM footballers;
```
(Answer: 443)