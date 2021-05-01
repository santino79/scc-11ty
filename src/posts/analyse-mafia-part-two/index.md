---
title: "Analysing The Mafia with Python #2: Data Wrangling"
date: 2019-05-24
featured_image: /images/content/gf-brando-listen.jpg
image_caption: 
excerpt: 
tags: 
     - data
     - articles
---
## THE STORY SO FAR

In [Part One](/analyse-mafia-part-one/) of our **Analysing The Mafia with Python** series, we:

- **Decided on a subject** - Organized Crime in the United States of America in the mid Twentieth Century.
- **Found a data source** - The Federal Bureau Of Narcotics records from the book "Mafia: The Government's Secret File on Organized Crime".
- **Prepared our raw data** - by converting the e-book version of the FBN book to plain text format.
- **Planned our new structure** - how we will cleanse the raw data and put it into a structured format of one gangster per row with columns for each of the broad data headings in our raw file.

In **Part Two** we will begin that data cleansing process. We'll set out our plan of attack. That will be the first step towards breaking the raw data down into more manageable chunks that we can ultimately do our data analysis on.

## The Data Wrangling Begins.

This isn't a clean dataset. It's a text file stripped from an e-book because I didn't want to type 800-odd pages worth of data from a big heavy _real_ book into a spreadsheet.

It's also infinitely more interesting and useful as an educational piece than a nicely set up, clean, "here's one I prepared earlier" dataset.

I didn't always think that as I set about working around the uncomfortable line breaks, extra spaces, split lines, unorthodox spellings etc. that I found but what's life without a few challenges along the way?

## The plan of attack.

We've got a planned data structure. We have our data source. Now we need to wrangle one into the other.

Enter Python and Jupyter Notebooks. My plan is to take the text file we have with the raw data, loop through it line by line, looking for the text strings that correlate with our proposed COLUMNS above.

We know each new gangster record starts with a "NAME:" string so we will pay special attention to that to create a new record each time we encounter it.

We'll then use the text strings from the column headers (e.g. ALIASES, DESCRIPTION) and replace those with pipe characters to delimit the column data. When we hit another line that includes the string "NAME:" we'll jump to a new line and start a new record.

Then we'll write the lot back out to a new text file that is now in our chosen rows and columns table-based format. 

## The Full Monty (Python).

I wrote some Python code to look for the keywords to create new records and variables and output it back to another (hopefully) cleaner, structured text file.

What we are doing:

1) Reading in the raw text file (called Mafia\_Book.txt)
2) Setting a list of text string keywords (called "hdrlst") to look for that signify either a new record ("NAME") or a column within the current record (e.g. "ALIAS" or "DESCRIPTION")
3) Looping through each line in the input file to see if it holds any data we want
4) Creating new records and columns within those records for each gangster based on our list of keywords
5) Writing each new record back out to a pipe delimited output text file (called Mafia\_Book\_PipeDelim.txt)


As with any data cleansing operation, the best laid plans only survive until we encounter the enemy (i.e. the raw data). In my code I had to make allowances for additional line breaks between the data, instances of data not being on the same line as it's "Header" text and the usual whitespace character clean-up.

There were also several variations in the spelling of "Aliases" including "Alias" and "Alises". (It was only after reviewing the output a few times that those got picked up. Note: no-one said this was easy or wasn't tedious at times!)

### It's never one and done with data wrangling.

Sometimes these things only become apparent after we've worked through the process a few times and all the pre-cleansing planning in the world won't change that. It just takes a lot of eyeballing the output and getting used to spotting things that look out of the ordinary.

The data cleansing process isn't said to take 80-90% of a data analyst's time on a project for nothing. But it's probably the most vital step you'll have to undertake as the whole validity of your final analysis depends on getting this correct.

## I apologise for nothing.

Before we go on I want to make absolutely no apologies for any inelegant lines of Python code you may witness. There's probably plenty in there that would make a neckbeard on Stackoverflow apoplectic with rage. But here's the thing - **I don't care**.

All that matters and I repeat **ALL THAT MATTERS** is that it works. Does the code do what I want it to do with the raw data I have at my disposal? Answer: Yes. That's the beginning and the end of it.

You don't have to be the best programmer in the world to make data analysis work for you. You could have brute forced a lot of what I did in Notepad and Excel using the Find/Replace function. That's what I did the first time I tried to wrangle this data in HTML format. This isn't supposed to be final production code.

Odds are you'll never need to run this again so, as long as it works, it doesn't really matter if it meets the coding standards of the top ranking Python programmers on the planet. Good enough is actually _good enough_.

At least with this bit of code our work is reproducible. The Notepad and Excel method isn't which means it's a little more risky if we have to prove our workings in a real world working environment.

However, I digress.

## Back to the mob.

This is a small dataset by any definition, coming in at around 830 rows and 9 columns. Outputting back to a text file works in this situation as we don't have to bring in a relational database solution just yet. However, it does give us the capability to re-import our new data file with one of the most popular Python libraries, Pandas.

In the code below, I import the Pandas library into my Jupyter Notebook session and import the pipe delimited csv/text file we just created from our raw file. Pandas very helpfully prints an output of what it's just read below the code:

```python
import pandas as pd
df = pd.read_csv('Data\Mafia_Book_PipeDelim.txt', sep='|', index_col=False,
            names=['GID','NAME','ALIASES',
            'DESCRIPTION','LOCALITIES_FREQUENTED','FAMILY_BACKGROUND',
            'CRIMINAL_ASSOCIATES','CRIMINAL_HISTORY',
            'BUSINESS','MODUS OPERANDI'])
df
```
![Screenshot of Jupyter Notebook output from Pandas code](/images/content/mafia-ss1.png)

We can see from the screenshot above that we have managed to meet our initial stage one objective. We've read through our raw data file, plucked out the relevant information under each of our nine headings for each gangster and transformed them into a rows and columns tabular format.

Bingo. The gutrot whiskeys at the Prohibition-era speakeasy are on me.

## It's good but it's not the one.

But, looking at the Pandas output, I'm still not happy. Yes, we have managed to get the data into a "more" usable format than our initial text file data dump had it. But it's still not in the kind of granular format I want to see it in for analysis.

If, for example, I wanted to do a comparison of heights of Cosa Nostra mobsters in our dataset, this current data model would make the task very difficult indeed. As the heights are hidden in the middle of the text string we are loosely calling "Description" it's virtually unusable.

Time to go back to the drawing board for Data Wrangling Stage Two and start to dissect each of our new columns to see what data points we could split out from them. And this is where it gets really interesting.

## What's next?

In [Part Three](/analyse-mafia-part-three/) we will take our new structured  output file and start to get creative on the **DESCRIPTION** field. We'll introduce **Regular Expressions** to pull out the different data points such as Height, Weight, Eye Colour and more.

By the end of this stage we should be in a much better position to analyse our gangsters appearance at least. Buckle up, we've got a lot to cover and unearth.