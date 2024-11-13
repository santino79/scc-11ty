---
title: "Using wildcard comparisons with the LIKE operator."
date: 1910-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
---
### Leveling up the WHERE clause with LIKE.

We can also step things up a gear when it comes to comparison operators on our **WHERE clause** by using the **LIKE operator**.

Whereas the other operators (=, >, < etc.) allowed us to filter on specific strings or values, **LIKE** allows us to use patterns.

By specifying a string fragment plus a wildcard character, we can do basic pattern matching within our data fields to really boost the power of our WHERE clause.

### What are the wildcard options?

Putting a wildcard (%) either side lets us pattern match for our string anywhere in the data with no need to spcify how many wildcard characters we will allow. It means ANY string of characters can both come before and come after our pattern string.

If we use the underscore (_) wildcard we can dictate  exactly how many wildcard characters we want to search for in the string.

### Let's see some examples.

We have a table called **Bands** with a field name **BandName**.

The table contains a list of musical bands with colour themed names.

| BandName |
| - |
| The BlueTones |
| Black Flag |
| Green Day |
| Deacon Blue |
| Yellowcard |
| The Blue Notes |

If we only want to return those with the string "**Blue**" in their names and had to use the basic comparison operators above only, we would need to know exactly which band names were in there and be VERY specific on each one e.g.

```sql
SELECT * 
FROM Bands
WHERE BandName = 'The BlueTones';
```
### In the real world.

In reality, the table could contain millions of rows that could conceivably contain our 'Blue' string and it's not practical to hardcode each one.

So we use the **LIKE** operator and the percentage sign wildcard character (%), like this:

```sql
SELECT * 
FROM Bands
WHERE BandName like '%Blue%';
```

### Results.
| BandName |
| - |
| The BlueTones |
| Deacon Blue |
| The Blue Notes |

Putting a wildcard either side lets us pattern match for our string anywhere in the data. It means *ANY* string of characters can both come before and come after our pattern string (Blue).

If we only wanted to return strings that had 'Blue' at the start of the string we would do this instead:

```sql
SELECT * 
FROM Bands
WHERE BandName Like 'Blue%';
```

Which would get us zero results from our table above.

### Another wildcard option.

If we want to be very specific on the number of characters our wildcard allows for, we can't use the % sign.

Instead we use the *underscore character* (_). It lets us dictate exactly how many wildcard characters we want to search for e.g. if we only wanted band names of 10 characters we could put ten underscores in our **WHERE clause** with **LIKE**:

```sql
SELECT * 
FROM Bands
WHERE BandName Like '__________';
```