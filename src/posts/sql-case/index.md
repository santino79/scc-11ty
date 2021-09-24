---
title: "Lesson 14: Using the CASE statement."
date: 1914-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
lesson_no: 14
---


### The CASE for the defence.

The **CASE statement** in SQL allows you to create a new variable and set the values based on a series of conditions being met. Sounds a bit like a hostage situation but it's actually a very powerful addition to our toolbelt.

We've seen before how reducing data redundancy is one of our ideal database design states. Don't have something in there if it's not absolutely necessary.

By using the **CASE statement**, we can change this business logic on the fly at any time. This causes a lot less problems than having to change the underlying data in our database.

### An example.

In our business we have three tiers of organizational hierarchy - Level 1 (lowest), Level 2 (mid), Level 3 (highest).

In the past we had Data Analysts, Middle Management and Senior Executives. These days our Data Analysts like to self-identify as "Data Scientist" and our Executives prefer to be known as a "Industry Visionary".

Our old **CASE statement** would be:

```sql
SELECT EmployeeName,
CASE
    WHEN EmpLevel = 1 THEN 'Data Analyst'
    WHEN EmpLevel = 2 THEN 'Middle Manager'
    WHEN EmpLevel = 3 THEN 'Senior Executive'
    ELSE 'Unemployed'
END 

FROM Employees;
```

After changing up our job titles it would be:

```sql
SELECT EmployeeName,
CASE
    WHEN EmpLevel = 1 THEN 'Data Scientist'
    WHEN EmpLevel = 2 THEN 'Middle Manager'
    WHEN EmpLevel = 3 THEN 'Industry Visionary'
    ELSE 'Unemployed'
END 

FROM Employees;
```

The underlying data in our Employees table did not have to change, it stayed exactly the same. It's just the description in our **CASE statement** that was amended.

(NB. If we hadn't included an ELSE in the CASE statement, it would have defaulted the values to NULL if none of the conditions were met.)