---
title: "Lesson 28: Joining tables using Multiple Joins."
date: 1928-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
---
### Eliminate data redundancy.

One of the biggest elements of "good" database design is reducing data redundancy. This means eliminating any objects which aren't required or necessary.

Don't have a field for Date of Birth and another for Age for example. Don't hold the number of products sold by salesperson in one table and a list of every sale in another table. One element is redundant so get rid of it.

We can help achieve this by proper use of multiple tables and using foreign keys to join them.

### How would that look in practice?

If we ran a fintech startup, we would have one table for Customers and another table for Accounts. Customers could have multiple accounts. Similarly, a single account could have more than one customer connected to it (like a joint mortgage or credit card). We would then have another table that shows the combinations of Customer and Account connections. Let's see it in an example.

#### Customers

|CustomerID|CustomerName|
|---|---|
|1|Steve|
|2|Adam|
|3|Lola|
|4|Georgina|

#### Accounts

|AccountID|AccountType|
|---|---|
|1|Mortgage|
|2|Credit Card|
|3|Mortgage|

#### CustAccConn

|ConnID|CustomerID|AccountID|
|---|---|---|
|1|1|1|
|2|2|1|
|3|2|3|
|4|3|2|
|5|4|2|

We can write our SQL query to bring back the Customer Name, Account ID and Account Type for all customers and their connections to their accounts.

```sql
SELECT 
    Customers.CustomerName, 
    Accounts.AccountID,
    Accounts.AccountType

FROM Customers 

INNER JOIN CustAccConn 
ON Customers.CustomerID = CustAccConn.CustomerID 

INNER JOIN Accounts 
ON CustAccConn.AccountID = Accounts.AccountID;
```