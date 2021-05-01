---
title: What Is The SAS Equivalent Of The RIGHT Function In Excel?
date: 2019-05-23
featured_image: /images/content/arrow-right.jpg
image_caption: 
excerpt: 
tags: 
     - data
     - articles
---
### Need to extract a set of characters from the end of a string in SAS but don't know how to do it?

Fear not, help is at hand.

For quick and dirty analysis we can probably agree, there is no better and more beginner friendly business tool than Excel. Like most people, I just want to get the job done.

But when we have larger datasets and are working in a SAS environment we should really use the power it puts at our disposal to it's full advantage.

## The RIGHT function in EXCEL.

Extracting characters from the right hand side of a string is made very easy in Excel. We just use the **RIGHT** function like this:

`
=RIGHT(myString, num_of_chars)
`

If our string was "Analytics" and we wanted the last 3 characters from it we would do:

`
=RIGHT("analytics",3)
`

Which would return: "ics".

### What about SAS?

In SAS we don't have use the RIGHT function in the same way. SAS's RIGHT function moves the characters in the string to the end of the string and the trailing blanks to the start of it i.e. right aligns the string. That's not what we want here.

We want the **SUBSTRN** function.

**SUBSTRN** takes three input variables:

1) the text string, 
2) the starting position, 
3) the number of characters from that point to extract.

This is handy enough when [working from the left](https://alanhylands.com/what-is-the-sas-equivalent-of-the-left-function-in-excel) or start of the string.

When working from the right of the string we have to consider our starting position a little more.

## An example.

Let's say we had the following data in a table and wanted to extract the last two characters from the right hand side of each string:

|LOCATION|
|---|
|LONDON GB|
|DUBLIN IE|
|PARIS FR|
|ROME IT|

Each string may be a different length, we can't say to start on the 8th character just because that would be the position needed in the first row for London.

### How long is a (piece of) string?

Instead we have to calculate the length of each string (excluding trailing blanks) and work back from there. In the case of our "LONDON GB" example, we have 9 characters (including our space in the middle). To get the length of this string in SAS, use the **LENGTH function** e.g. = LENGTH (myString). This will return an integer for the number of characters in the string.

To get the last two characters we take 1 away from the **LENGTH** of the string i.e. start at the position one before the last to get the last two characters.

Our SAS code would look like this:

`
= substrn(LOCATION, length(LOCATION)-1, 2)
`

That is, use the **SUBSTRN** function on the string in variable LOCATION. Start at position LENGTH-1 and retrieve two characters from there.

In our example data above we would get back:

GB
IE
FR
IT

### Why SUBSTRN and not SUBSTR?

I've suggested using **SUBSTRN** in this case as it allows us a little more flexibility. It can return null values without giving an error.Also, if the string is smaller than the number of characters needing to be returned, it can return less than the requested number of characters.

In fact, if you suspect that your data may have cases where it is smaller in length than the required number of characters, try using the **MAX** function in there as well:

`
= substrn(LOCATION, max(1,length(LOCATION)-1), 2)
`