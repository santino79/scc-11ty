---
title: What Is The SAS Equivalent Of The LEFT Function In Excel?
date: 2018-04-06
featured_image: /images/content/arrow-left.jpg
image_caption: 
excerpt: 
tags: 
     - data
     - articles
---
I see an awful lot of hate for Excel on Data Science and Business Intelligence forums and blogs but there is a very good reason why it is the world&#8217;s number one most used business tool: it&#8217;s bloody easy to get started.

Moving beyond that for Excel jockeys then can be a bit of a steep learning curve when so many handy functions had previously been at their fingertips.

One often used function is the LEFT function.

In Excel this allows us to isolate and strip out a specified number of characters from the left hand side of a text string

e.g. =LEFT(&#8220;Alan Hylands&#8221;, 4) would give us the following result:

Alan

In SAS, we can use the SUBSTR function in the data step to replicate this.

e.g.

SUBSTR(&#8220;Alan Hylands&#8221;,1,4) would give us the same result (where the first argument is the text string (&#8220;Alan Hylands&#8221;), the second is the character to start at (character #1) and the third is the number of characters to look at (4 characters) .

&nbsp;