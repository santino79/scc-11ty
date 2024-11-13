---
title: "SELECT statement with specific columns."
date: 1903-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
lesson_no: 3
---
### Knowledge (of the fields) is Power

So we've seen that SELECT * returns all of the columns in our data table.

_**Handy Real-Life Hint: don&#8217;t do this.**_

You can run into performance problems with this if you are hitting a big table or, worse, joining large tables together. We&#8217;re running before we walk here so I&#8217;ll advise being a bit more _**specific**_ in your request.

### Be laser focused.

You should know the different fields that sit in your database table so it pays to be a bit more strategic when picking which ones you actually need to pull back.

Let&#8217;s say we are building a contact list and have all of our customer details in a table cunningly called _**CUSTOMERS**_.

If we want to get only the customer&#8217;s first name, date of birth and email address rather their full address and personal details we might do something like this:

```sql
SELECT firstname, dob, email

FROM Customers;
```

Little bit more typing but less data being brought back and you actually get what you want so it&#8217;s well worth it.

Now we know which fields we want to get back and where to get them from. This is now a valid **SQL SELECT** statement, well done. Stick "SQL Expert" on your CV and away you go.