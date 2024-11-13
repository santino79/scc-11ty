---
title: "Joining tables using LEFT JOIN."
date: 1927-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
---
### What is the LEFT JOIN?

The **LEFT JOIN** (also known as _LEFT OUTER JOIN_) lets us join tables but insists on including all rows from the first table, even if there is no match in the second table.

### When would we use the LEFT JOIN?

We might do this if we had a **CUSTOMERS** table on the left side and an **EMAILS** table on the right side. We may not have emails for all of our customers but we still want to see all of the customers in our output.

If we had used an **INNER JOIN** we would only get back those customers who _DO_ have an email record in the EMAILS table.

### How do we write a Left Join?

We write the **LEFT JOIN** like this:

```sql
SELECT * 

FROM Customers 

LEFT JOIN Emails 

ON Customers.EmailAddress = Emails.EmailAddress;
```

This would return all rows from the Customers table regardless of whether they had a corresponding record in the Emails table. Any customer WITHOUT an email address would have a NULL value in their EmailAddress column (like Maria in our output below).

|CustID|CustName|EmailAddress|
|---|---|---|
|1|Alan|alan@simpleanalytical.com|
|2|Julien|baptiste@gendarme.fr|
|3|Maria|NULL|