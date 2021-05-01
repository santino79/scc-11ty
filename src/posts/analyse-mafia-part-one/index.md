---
title: "Analysing The Mafia with Python #1: The Setup"
date: 2019-05-23
featured_image: /images/content/gf-brando-kiss.jpg
image_caption: 
excerpt: 
tags: 
     - data
     - articles
---
## Starting your own data analysis project can be a scary prospect.

Working as a data analyst, you usually have to operate within a strict set of bumpers on your bowling lane. Your manager will have given you a specific question to chase the answer to. Or an answer that they want you to find a suitable question to back it up.

If you are looking to put your own personal portfolio project together however you'll quickly find that the world is your data oyster. Even with the vast array of publicly accessible data now available to us, you would be surprised how difficult some people find it to find data to analyse.  I've lost count of the number of projects I've seen listed on resumes that are clearly just college coursework.

### Let's be clear. Those are study guides with training wheels.

The dataset will have been cleansed and you'll have followed a paint-by-numbers approach to get you through to a predetermined result.

In the immortal words of Shania Twain: **"that don't impress me much"**.

Neither does giving me a link to your Github profile where I'll find dozens of strikingly similar mini-projects that really cover the exact same analysis step using the exact same library or method in R or Python.

### You need to stand out from the crowd.

I would much rather see a small number of original data projects that you've put a little more personal thought and effort into. They stand out more. They show me, as a recruiting manager, what your thought process is like and they give you the full range of tasks from data sourcing to cleansing to analysis and presentation that I will want to see in a data analyst working for me. Ultimately, that's all you need.

With that in mind I'm going to take you through a project, stage by stage, and you can see how I approach it.

**Usual disclaimers apply.**

This is not the only way to do it. But it will give you an idea of the different steps we follow and the difficulties you might encounter.

## Choosing Your Subject.

First up, let's pick a subject to analyse.

Stay away from Kaggle or any pre-cleansed and sanitised datasets. You'll miss out on the joy of the data sourcing, wrangling and cleansing phases of the process and that would be a mistake. If those make up 80-90% of the actual job of a data analyst, why would you skip them here?

Remember the whole point of doing a soup-to-nuts data analysis project like this is to make your portfolio memorable (for the right reasons). Show off as much of your skillset as you can. This is your chance to shine. Don't waste it.

I suggest going for something that has some personal interest for you. Could be sports, entertainment or, in my case, a certain slice of modern American history...

### "As far back as I can remember I always wanted to be a gangster".

![Goodfellas quote](/images/content/goodfellas-as-far-back-quote.gif)

**The Godfather. Goodfellas. The Sopranos.**

The holy trinity of pop culture representations of Italian organized crime in America during the 20th century. It would be rare to find a person who hasn't at least seen or heard of one of them. My own induction into the world of the Cosa Nostra (at least from 3,000 odd miles away in rural Ireland) was a late night showing of The Godfather Part Two when I was 14.

From the opening scenes of young Vito escaping from Sicily and making his way to New York via Ellis Island, I was hooked. If there has been a book, I've likely read it. If there's been a documentary series, I've watched it. Movies. Fiction. Non-fiction. The lot. The subject fascinates me.

## A little help from the U.S. Government.

![Mafia: The Government’s Secret File on Organized Crime book](/images/content/mafia-book.jpg)

So when I found a book called **"Mafia: The Government's Secret File on Organized Crime"** I was rather interested. It's a hefty hardback book showing the secret files of the Federal Bureau of Narcotics around 1960. Specifically it lists around 800 (mainly Italian-American) gangsters with lots of juicy detail on their names, photos, families (both kinds), known associates, criminal activities and much more.

It's an absolute gem of a historical record even for occasionally leafing through for a quick read. But what the data detective in me really wanted to do was **analyse** it.

Back in the 1950s, the only way for the FBN to do that would have been using pen, paper and pins on physical maps to mark out the locations and hangouts of these known "men of honour". Times have moved on though and I could see the real potential of taking the rich data from the book and getting it into a data form I could run queries against.

The big problem was that it was in a dead tree 900+ page book sitting on the coffee table in my lounge. Without wanting to go old school and manually type the lot into a spreadsheet, I had to come up with a different plan.

## Enter the e-book.

So I bought my second version of "Mafia: The Government's Secret File on Organized Crime", this time in e-book format from Amazon. Some shady operations were then applied to the DRM (the subject matter's propensity for working in the grey areas of the law obviously rubbing off on me) until I was able to choose a suitable format for my data scraping.

I went two ways with it. First, an export from e-book management software [Calibre](https://calibre-ebook.com/) to HTML, then a straight export to plain text file. The data cleansing and ETL process we'll cover next will be from the **plain text file** version. It did mean I lost the option of tying the photos of each mobster in the book to their record for this analysis but my priority this time was on getting the text data.

The book contains the usual additional pages including contents and an introduction from Sam Giancana Jr. which we don't need for this analysis. I went into the text file and manually deleted those out. We could do it in the Python code but I'm a firm believer in not making life difficult for ourselves. Sometimes the sledge hammer is actually the right tool to use.

## Getting into the raw data.

When that was done, we had our working text file. This is what a sample of the data for one gangster looked like:

![Joe Bonnano's entry in the FBN Organized Crime book](/images/content/joe-bonnano-details.png)


Looking at this I could sketch out an outline of what I wanted my first run data structure to look like:

**ROWS:** 1 row per gangster

**COLUMNS:** 

- Name; 
- Aliases;
- Description;
- Localities Frequented;
- Family Background;
- Criminal Associates;
- Criminal History;
- Business;
- Modus Operandi;

There is a lot of metadata within each of those columns that we would look to split out (e.g. from DESCRIPTION - where they were born, height, weight, eye colour, hair colour etc.) We'll take a second pass at that once we've straightened the data out into this structure first however.

Keeping our process as simple as possible at each stage is always the best plan. Establish a base, get a foothold to work from then keep on iterating and improving what we produce.

## What's next?

In [Part 2](/analyse-mafia-part-two) of this series we will get into Data Wrangling and try to overcome some of the issues we find in working with unstructured text data.

I'll share the Python code I used to beat the data into shape and dig deeper into some of the metadata contained within the Description field we create.