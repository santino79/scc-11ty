---
title: "Lesson 29: Joining tables using UNION joins."
date: 1929-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
---
### Stacking them up.

While the other joins we've looked at are used to link two tables sideways, the **UNION** join allows us to combine them by setting one table on top of another.

We use our trusty old friend, **the SQL SELECT statement**, to pull two recordsets from the tables and use **UNION** to do the “setting on top of”.

### A few ground rules for UNION joins.

The two tables need to follow these rules however:

  * **Each SELECT statement MUST have the same number of output columns.** You can’t SELECT a, b FROM TABLE 1 and only SELECT a FROM TABLE2.
  * **The datatypes in the columns have to be the same.** Can’t have a text string column from one table and a column of numbers from another.
  * **The columns in both SELECT statements have to be in the same order.** Don’t have SELECT colA, colB in the first SELECT then SELECT colB, colA in the second.


The **UNION** join will then stack both datasets together and remove any duplicates rows.

### Let's see an example.

_First the data tables, our trusty **Cities** table:_


CityID | CityName | CountryID
--- | --- | ---
1 | NEW YORK | 1
2 | LONDON | 2
3 | MELBOURNE | 4
4 | PARIS | 5
5 | ROME | 


_And a table of cities that have held multiple Summer Olympic Games. We&#8217;ll call it **Olympics**:_

| CityName |
| --- |
| LONDON |
| TOKYO |
| LOS ANGELES |
| PARIS |
| ATHENS |


_Our SQL code for this **UNION** join would be:_

```sql
SELECT CityName from Cities 
UNION
SELECT CityName FROM Olympics;
```


_And the output:_

| CityName |
| --- |
| NEW YORK |
| LONDON |
| MELBOURNE |
| PARIS |
| ROME |
| TOKYO |
| LOS ANGELES |
| ATHENS |


You&#8217;ll notice that London and Paris appear in both tables but our UNION join removes the duplicate entries.


### Another variation is to use UNION ALL.

While **UNION** removes duplicates from it’s output, **UNION ALL** doesn’t. So if the record exists in the first **SELECT** statement and the second, they will both appear in your results. Just be careful there if you need to watch out for de-duplication.

_**UNION ALL** SQL code looks like this:_

```sql
SELECT CityName from Cities 
UNION ALL
SELECT CityName FROM Olympics;
```


_And our example output (now also including our duplicates) looks like this:_

| CityName |
| --- |
| NEW YORK |
| LONDON |
| MELBOURNE |
| PARIS |
| ROME |
| LONDON |
| TOKYO |
| LOS ANGELES |
| PARIS |
| ATHENS |


London and Paris are back in there twice along with all of the other cities in both our Cities table and our Olympics table.