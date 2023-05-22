---
title: "Lesson 34: The SQL UPDATE Statement"
date: 1934-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
lesson_no: 34
---
### How to change or amend a value in our table.

If one value in our data changes, the last thing we want is to have to remove records and add the whole lot back into a new row. So the **UPDATE** statement is a really useful tool to have at our disposal.

Let&#8217;s say our business has had a really good year and at annual pay review time we decide to give all of our employees a very pleasant 10% payrise.

As we&#8217;re updating all employees&#8217; salary we can write an **UPDATE** statement like this:

```sql
UPDATE employees SET salary = salary * 1.1;
```

What we&#8217;re doing here is telling the SQL code that we want to modify or update the table called &#8220;**employees**&#8220;, specifically the field in that table called &#8220;**salary**&#8220;.

What we want to do with the &#8220;salary&#8221; field is, on an employee by employee basis, take the existing &#8220;salary&#8221; amount for that employee and multiply it by 1.1 (i.e. adding an additional 10% to the salary amount).

The SQL code works out what the new salary is and updates the record accordingly for every employee in our table.

### Hurrah, drinks are on our crew!

This works really well if everyone in the table is getting that same level of payrise but what if only a certain grade of employee is getting a rise? How do we filter the employees and only modify the chosen employees&#8217; salaries and not the rest?

For this we will go back to a handy clause we learnt in a previous article in this series- **the WHERE clause.**

Just as we saw that we could effectively filter records into (or out of) the data we brought back from the database with the **SELECT** statement by using **WHERE**, we can do much the same when choosing which rows of data get the **UPDATE** treatment.

For example, if we only wanted to give the Managers in our business a 10% payrise we would code the SQL like this:

```sql
UPDATE employees
SET salary = salary * 1.1
WHERE grade='Manager';
```

By adding the **WHERE** clause we have limited the **UPDATE** to only those employees who have a &#8216;Manager&#8217; grade in our database table. So now the managers are celebrating their good fortune but the poor plebs on the factory floor are stuck where they were on the same pay.

## Welcome to capitalism.

The **WHERE** clause is always a useful one to keep an eye on. There isn&#8217;t a SQL developer in the world who hasn&#8217;t got carried away and updated every row in their database by accident when they should have used the **WHERE** clause to filter their targets.

You should have plenty of experience with **WHERE** by now after all of the previous lessons but it's always worth a refresher if you aren't sure. Better safe than (very) sorry.
