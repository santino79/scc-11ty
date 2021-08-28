---
title: "Lesson 2: The SQL SELECT Statement"
date: 1902-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
---
### (Probably the most important data analysis lesson you will ever learn.)

In this lesson, we&#8217;ll be looking at the most fundamental of fundamentals in the world of SQL:

### The SELECT statement.

You don&#8217;t have to have be a college English major to have a wild stab in the dark at what the SELECT statement does for you.

As this is the Non-Boring Beginner&#8217;s Guide To SQL though, I&#8217;ll spell it out for you:

**SELECT lets you grab whatever data you want from the database.**

If you&#8217;re the greedy sort (read: lazy and couldn&#8217;t be bothered making a choice) then you can use **SELECT** to bring back all of the fields. Like this:

```sql
SELECT *
```

The * essentially means **give me everything**.

Every little bit. All of it. The lot. The whole lot. I don&#8217;t care if I can carry it or how long it takes to arrive, just give it to me.

### All of it from where?

We haven&#8217;t said where we want to get the data from however which brings us to the **FROM** part of the SELECT statement.

This tells the database which table you want to get the information out of.

For example,

```sql
SELECT * FROM customers;
```

This means give me everything (SELECT *) _FROM_ the table called "customers".

## And that, my friends, is the SELECT statement.

It will be **THE** single most useful and most used statement you will experience in your SQL database querying careers.

I call it the &#8220;**Million Dollar Keyword**&#8221; because learning how to use the SELECT statement can _**EASILY**_ add a million dollars to your overall career earnings over the course of your lifetime. If that doesn&#8217;t make you take extra care around soaking it into your brain then I don&#8217;t know what will.

Remember me each time you write it. (Hopefully in a positive fashion.) It just might save your life.