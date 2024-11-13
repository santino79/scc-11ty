---
title: "The INSERT INTO Statement"
date: 1933-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
lesson_no: 33
---
### How do we put new rows of data into our data table?

For a table that holds **EMPLOYEE** data this would mean we have a new co-worker.

If we are running an e-commerce store, it might be used to log a new product in our **PRODUCTS** table or, even better, a new sale record in our **SALES** table (cha ching!)

As with all of the most used SQL statements, there is a simple to remember name for this command. When we want to put something into our destination table we use the **INSERT INTO** statement.

### Simple enough so far? I agree. Let&#8217;s dig deeper.

With the **INSERT** statement we have two main ways of specifying what exactly it is we want to insert into the table.

If we want to include a record for all of the columns in the table row we write it like this:

```sql
INSERT INTO table_name
VALUES (val1, val2, val3, ...);
```

We can be more specific however if we don&#8217;t have a value for each individual column.

In this case we specify the column names after our INSERT INTO statement, like this:

```sql
INSERT INTO table_name (col1, col2, col3, ...)
VALUES (val1, val2, val3, ...)
```

We&#8217;re lapsing into dry and dusty territory here so let&#8217;s spice it up with an example.

## All that glitters is gold

Say you have a database table for storing the details of **famous rock guitarists**.

You might keep their name, the band they are most famously identified with, their favourite type of guitar and which country they come from.

If you want to add a new record (read: guitarist) to your table you would write the following SQL code:

```sql
INSERT INTO guitarists (FirstName, LastName, FamousBand, FavBrand, FavModel, Country)
VALUES ('Jimmy', 'Page', 'Led Zeppelin', 'Gibson', 'Les Paul', 'England');
```

And now you have one of the pioneers of heavy rock in your database table.
