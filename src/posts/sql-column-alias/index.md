---
title: "Lesson 31: Using a Column Alias."
date: 1931-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
---
### What is a Column Alias and why would we use it?

Just as we used an alias for a table name in our previous lesson, we can also use an alias for a column name.

The syntax is the same ("AS alias_name") and helps us clear up any confusion when fields from different tables have the same name (but hold different data).

The **Column Alias** is also useful for tidying up our SQL code and results if the column names are long, repetitive or not particularly easy to decipher.

```sql
SELECT ID, 
Actor_First_Name as FName,
Actor_Last_Name as Surname,
Actor_Date_Of_Birth as DOB,
Actor_Annual_Earnings as Income 

FROM Movies;
```

In this example, we've taken some very longwinded Column names (such as Actor\_First\_Name) and made them into a more readable **Column Alias** (e.g. FName).