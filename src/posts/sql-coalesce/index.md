---
title: "Using the COALESCE function."
date: 1924-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
lesson_no: 24
---
### What does COALESCE do?

The **COALESCE function** lets us take several columns within one row of our data and return the first column that has a non-NULL value. If all columns specified are NULL then we can set a default value in the COALESCE function.

### Why would this be useful?

We saw in our lesson about NULLs that they can be rather destructive when introduced to aggregate functions like **AVG**. If our database design allows NULL values in a numerical field, we might want to swap those NULLs in the data into zeroes in our SQL query.

```sql
SELECT AVG(COALESCE(HolidaysTaken, 0)) 
FROM AnnualLeave;
```

If an employee had no entry for Holidays Taken in the AnnualLeave table then COALESCE would find NULL for HolidaysTaken, move on to the next value and return the 0 we set as a default. It can then safely do an average calculation.

### Using COALESCE across multiple columns.

We could also use **COALESCE** to consolidate several columns into a "best fit" value amongst them. Imagine our Customers table had three separate fields for Home Phone Number, Mobile Phone Number and Business Phone Number. All allow NULL values as not every customer would have all of those means of contact.

If we wanted to run a telephone marketing campaign to contact them with a marvellous new product offer, we need a phone number to reach them on. If the order of preference is Home - Mobile - Business, we would write our **COALESCE function** like this:

```sql
SELECT 
    CustomerName,
    COALESCE(HomePhone, MobilePhone, BusinessPhone) as PhoneNumber 

FROM Customers;
```

The **COALESCE function** then checks each of the given columns in turn and returns the first one that has a non-NULL value as "PhoneNumber". If none do then it returns NULL.
