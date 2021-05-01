---
title: WTF Is Web Scraping?
date: 2018-11-03
featured_image: /images/content/html_screen.jpg
image_caption: 
excerpt: What is Data Scraping?
tags: 
     - data
     - articles
---
### Web scraping. Screen scraping. Web harvesting. Web data extraction. Web indexing. Web mining. Web crawling.

So many names but what does it mean and how can we get started doing it?

## So what is web scraping?

**Information is power.** And getting our hands on information through the medium of data is the way we get to harness that power. With the growth of the World Wide Web over the past twenty years, there is now an unimaginable amount of data (almost) freely available to us.

There are several methods for extracting data from websites, the main one being the use of official APIs (Application Programming Interface). Larger companies usually prefer to offer an API to users (for a price of course) as they can control the structure, content and delivery of the data they want to make available to 3rd parties.

When they don’t, we have to get a little more creative in our extraction attempts.

**This is where web scraping comes in.**

## What does web scraping do?

In basic terms, we know that web pages are built using text-based mark-up languages such as HTML. This collection of HTML tags tells our web browser how to display the content within the web page. What it means is that we can use our knowledge of HTML to look at the source code, work out the structure of the page and find where the data we want is located.

Of course we _**COULD**_ manually look at the page in our browser and do a lot of manual copying and pasting. Brute force sometimes is the best option when it’s a limited dataset or it’s a one-off job. **But where’s the fun in that?**

What we want to do is write is some code that fetches the HTML from the web page, scans through it for the important parts containing the data we want, extracts that and puts it into a usable format we can work with.

This is essentially what Google does when it’s crawlers go out to index the web.

## Why would we do it?

If an API is not available then there is often little other choice than to set up a web scraper. I’ve used web scraping in the past to extract football results for football leagues all around the world on a daily basis. I then stored them in a SQL Server database and used it in a prediction model I’d built.

**Other possible uses are:** price comparison sites, aggregated job listings, property websites. Really anything where data has to be accumulated from multiple sources without any other way to get it or where the data updates so quickly it is of greater benefit to scrape a site to get it.

## Why would we not do it?

Truthfully, web scraping is a bit of a legal grey area. It’s generally against the terms of use of most websites although the appetite of the courts to enforce that is changeable to say the least.

In the United States, large companies such as eBay, Craigslist and American Airlines have taken court action against scrapers on three fronts: 1) copyright infringement, 2) violation of the Computer Fraud and Abuse Act, and 3) trespass.

Cases have also been taken in courts in Denmark, Ireland and Australia with varying decisions by the local judiciary.

Web companies use a wide range of methods to prevent web scraping, beyond legal action, and, from experience, they will be more of a deterrent in your early scraping ventures than any fears of landing in court.

Blocking IP addresses, monitoring user agent strings and high traffic monitoring bots are just some of the tools available to stop your trusty web crawler bot in his/her/it’s tracks.

## What do we use to start web scraping?

There are a range of different approaches we could take to build a web scraper, ranging from VBA in Microsoft Excel to Javascript tools in jQuery or Node.js.

My preferred method is to use **Python**. Using the vast array of Python libraries and packages at our disposal, we can quickly code up a basic web scraper and test it out live on a web page.

Libraries such as [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/doc) make scraping super simple. BeautifulSoup “provides a few simple methods and Pythonic idioms for navigating, searching, and modifying a parse tree”. Er&#8230;it lets you dig through the page data, find what you want and do something with it. Let’s not confuse the issue any more than we have to&#8230;