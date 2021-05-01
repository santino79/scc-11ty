---
title: How Do I Add A Row Number / ID Column To A Dataset in SAS?
date: 2018-03-18
featured_image: /images/content/row-seats.jpg
image_caption: 
excerpt: 
tags: 
     - data
     - articles
---
Let’s say you want to add a simple Row number to a dataset you have created in Base SAS. Maybe you need to do distinct counts on the rows or want a more robust method of identifying which row a certain value occurs in from one of your existing fields.

If you come from an MS Office background you may be more used to creating a new field in your Access table and sticking an Autonumber variable into it or incrementing by 1 in a new column in Excel.

SAS makes it very easy for us by putting the functionality to do this in the data step with the automatic variable \_n\_.

Create a new variable to store this permanently as below:

data myDs;

set inDs;

rowID = \_n\_;

run;

&nbsp;

Bingo. Now you can identify your rows by the rowID variable, do SQL counts and whatever else you might find you need a row ID column for.

Simple solutions are only simple if you’ve seen them or used them before. There is never any harm in asking newbie questions and as I may have mentioned a few times before, I’m very much a fan of sticking to the simple option when I can.