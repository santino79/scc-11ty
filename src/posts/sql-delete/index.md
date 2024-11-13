---
title: "The SQL DELETE Statement"
date: 1935-01-01
tags: lessons
featured_image: 
image_caption: 
excerpt: 
lesson_no: 35
---
### Danger, danger, high voltage.

This is really one to keep your wits around you for as making a mess of using it could end up with catastrophic consequences. Ladies and gentlemen, let me introduce you to **DELETE**.

There will be times that you want to remove rows completely from your table and, in these days of strict GDPR enforcement from the European Union, it&#8217;s not going to be enough to just turn off a flag in your **CUSTOMER** table to say they have de-activated their account. You might need to actually remove all traces of them. **Permanently.**

### Forever ever? :-O

Whoah, hold on, I just meant from your database table, not in the _**&#8220;wrap them in an old roll of carpet, stuff them in your car boot and go all Goodfellas on their ass&#8221;**_ sense, hopefully GDPR won&#8217;t ever mean we have to go to those lengths.

Never say never though.

### Anyways&#8230;

I have very real fears of teaching people how to use the **DELETE** statement and for very good reasons. I know first hand how much damage you can do with it. Heart stopping, cold sweat inducing, brown adrenaline-style damage. I know because I&#8217;ve done some of those stupid things with it on live production databases.

**So trust me.**

### I&#8217;m an expert in the main way you can screw this one up.

Once again though, as with the **UPDATE** statement, our old friend the **WHERE** clause comes riding to our rescue.

Let&#8217;s say a former customer has indeed contacted us and used GDPR to request that we delete all record of them from our database. If we know that their CustomerID record is 6 then we would write the **DELETE** statement like this:

```sql
DELETE FROM customers
WHERE CustomerID = 6;
```

Run that bad boy and you will have removed the row in your &#8220;**customers**&#8221; table where the CustomerID=6. GDPR compliant, happier former customer, database size reduced (ever so slightly). Everyone&#8217;s a winner baby, that&#8217;s the truth.

### But what if our SQL developer had his/her/their mind elsewhere and not in this particular game?

What if they forgot about adding the **WHERE** clause altogether and instead just typed this part?

```sql 
DELETE FROM customers;
```

No filtering on a non-existent **WHERE** clause so **SQL** just assumes you want to remove everything in the &#8220;customers&#8221; table and **WHAMMO** &#8211; there goes your entire customer database and all of that really juicy data on your hard won customer base.

But no-one would be that stupid you say &#8211; would they? Oh hell yes they would. We all have been.

Under pressure, rushing something out, not paying quite as much attention as we should and BOOM. _**It&#8217;s all gone**_.

## Please be careful.

With great power comes great responsibility and nowhere is this more prevalent than in a production database environment when some plonker has given you authorisation rights to run a **DELETE** statement.

Now, there may be times when you do legitimately want to scrub all records from a particular table. It can happen. It&#8217;s beyond the scope of this course to say when it would but it can and if you need to do that, use the syntax above. But please be careful anyway.

No-one needs the pain of sitting up all night trying to re-create a table from backups and log files and praying you get it close enough that no-ones really notices what you did.

### This is experience talking. Listen to it.
