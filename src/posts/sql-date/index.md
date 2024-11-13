---
title: "Handling Dates"
date: 1911-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
lesson_no: 11
---
### Dates are the devil.

No, not the Middle Eastern dried sweet fruit although they always looked kind of gross to me as well.

I mean actual dates like 1st July 2019 or 15th November 1739.

They have been a boil on the ass of developers and data analysts for time immemorial and will continue to be so. Different formats, different ways of handling them across different relational database management systems.

Different. Different. Different. Different.

### Let's go with a consistent format for our examples.

We'll ignore the disagreements between American date format and that used in many parts of the rest of the world. Instead we'll _pretend_ that dates in databases all come in the YYYY-MM-DD format with the 4 digit Year then a dash then the 2 digit Month then a dash then the 2 digit Day. So 14th June 1978 becomes 1978-06-14.

### SQL Example please.

OK. Maybe you only want customers born before the turn of the Millenium for your contact campaign so you decide to filter on date of birth. We can use the WHERE clause to do just that.

For example,

```sql
SELECT firstname, dob, email 
FROM customers 
WHERE dob < '2000-01-01';
```

What we are asking (or querying) the database for then is:

  1. First Name
  2. Date of Birth
  3. Email Address
  4. For ALL customers with a Date of Birth before 1st January 2000.

### And don't forget - dates are evil.