---
title: "Lesson 26: Joining tables using INNER JOIN."
date: 1926-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
lesson_no: 26
---
### How do we join data tables?

We link tables together using fields in the tables known as **"KEYS"**. Each table should have a field (or collection of fields) which operates as a unique identifier. This is known as a **PRIMARY** key.

To join to another table we also need a **FOREIGN** key. A FOREIGN key is a field or collection of fields which corresponds to a PRIMARY key in another table.

### The INNER JOIN.

The **INNER JOIN** (also known simply as JOIN) lets us join together two tables and only bring back all records in both where the PRIMARY and FOREIGN keys match. We join ON the **PRIMARY** key in the parent table and the **FOREIGN** key in the child table.

e.g.

```sql
SELECT *

FROM Movies 

INNER JOIN Actors 

ON Movies.ActorID = Actors.ActorID;
```

This will return all rows and columns from both the Movies table and the Actors table but only if there is an Actor in the Actors table that is also in the Movies table.

There **MUST** be a matching connection to return the record. If not we won't get it back.