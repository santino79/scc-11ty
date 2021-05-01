---
title: "Analysing The Mafia with Python #3: Descriptions"
date: 2019-05-25
featured_image: /images/content/gf-brando-bw.jpg
image_caption: 
excerpt: 
tags: 
     - data
     - articles
---
## THE STORY SO FAR

In [Part Two](/analyse-mafia-part-two/) we began our data wrangling process. We set out our plan of attack and successfully broke the unclean raw data down into more manageable chunks.

We now have a structured pipe delimited text file with one gangster record per row and nine columns of distinct data for each gangster.

In **Part Three** we will begin to mine those columns of data further to really strip out the important information on each of these criminals. We'll dig deep into the data to get as much out of it as possible to really give us a good shot at a full analysis by the end of our data wrangling journey.

## We begin again - Data Wrangling Stage 2.

Let's take a look at a sample of the data now held in our **DESCRIPTION** field.

We are going to look for standard data points that the Federal Bureau of Narcotics included in this section. Just as importantly, we need to see patterns in the way the data was captured and recorded if there is to be any way to extract the right data out into a new set of data fields.

![Screenshot of DESCRIPTION field from raw Mafia data](/images/content/mafia-ss2.png)

At first glance there seems to be quite a lot in there.

- Birth dates.
- Place of birth.
- Height in feet and inches.
- Weight in pounds.
- Eye colour.
- Hair colour.
- Facial complexion or build descriptions.
- Even some instances of bullet wounds, scars and tattoos.

Never let it be said that older, more manual data collection methods didn't give as much scope for thorough records!

There is a lot to work with in here but how can we split it out when it isn't in a standard format or properly delimited?

## Be creative.

This is where your powers of freestyling and creativity come in.

I read Reddit comments from wannabe data scientists who spout on about only wanting to do machine learning or AI. They don't want to get their hands dirty at all with jobs like data cleansing as they think it's beneath them.

Take it from me, if that is their attitude, these folks will not be long for the professional data world.

The thrill of the chase deep down into the data is one of the things I love most about being a data analyst. Looking for clues and patterns and thinking outside of the box are the parts that make the politics and other less enjoyable parts just about bearable. Enjoy them when you get to experience them.

## Looking for patterns.

The pattern I am seeing goes like this:

- Birth Date and Birth Place;
- Height;
- Weight;
- Physical Description (including eye colour, hair colour, identifying traits etc.)

If we split each string into those four elements we might be able to do something with them. But how? There are commas splitting each element but also sub-elements with each of our four elements. That will make things tricky.

I do see the following patterns that I want to explore as possibilities:

- **BIRTH DATE/BIRTH PLACE** - starts with the word "Born" and is usually the first element. May be split by commas if the place-name then country is included.
- **HEIGHT** - is in a standard feet and inches format (e.g. 5′10″).
- **WEIGHT** - includes the character string "LBS".
- **PHYSICAL DESCRIPTION** - the rest of the string after the weight. May be possible to sub-split this by exploding out into an array split by commas and looking for text strings like "EYES" to get the eye colour or "HAIR" to get the hair colour.

After a little (read: **lot**) of trial and error I plumped for extracting the following data points:

- BIRTH DATE,
- BIRTH PLACE,
- HEIGHT - feet component,
- HEIGHT - inches component,
- WEIGHT - in lbs.,
- EYES,
- HAIR,
- COMPLEXION,
- BUILD,
- OTHER DESCRIPTIVE TEXT (basically anything else not picked up above).

## READING IN THE DATA

I've decided to read the Pandas dataframe line by line then split the individual data points out to a dictionary as we go. There will be a fair bit of text clean-up involved as we've seen already that it wasn't always entered in standard formats or spellings.

The deeper you dive into working with **unstructured data** and **Natural Language Processing** (NLP), the more of a mess you will find. Again, it's about being flexible and being willing to do whatever it takes to knock out as many edge cases as possible.

### Introducing Regular Expressions.

I imported the **Regular Expressions** library (re) to help with the text searches. It'll be an invaluable tool in this wrangling process. I initialized a data dictionary tree called "d" which I will add the array of data elements to as we loop through the dataframe "df" row by row.

We are splitting the DESCRIPTION column of the dataframe out into an array by the comma delimiter. It's the best option but does mean we have to work a little harder piecing some parts back together that are naturally split by commas (see the Birthplace section below).

I've put a list of keywords together that I am going to look for in each string fragment so I can identify exactly what information we are looking for. I got these by eyeballing the data. There really is no other way to do it.

### BIRTHDATE AND BIRTHPLACE

The **"BORN"** keyword is vital here as there are other dates sprinkled throughout the data. We have a good bit of reformatting to do once we identify the date in the string as the kind agents of the FBN didn't stick to a standard format. I've made allowances for missing day of birth and month of birth in some cases as well.

The main way of identifying the date from the string including keyword BORN was to use the regex \[^0-9-]. I re-formatted it to dd/mm/yyyy format because I'm from the UK.

### Getting ALL of the Birth Place data.

The birthplace was a little more complex as well due to the aforementioned comma split. On my first pass I just took the birthplace name if it happened to be in the same array element as the keyword **BORN**.

That meant I lost any text related to the place name that came in subsequent list elements. And that didn't sit well with me. If we're going this far to get richer data, we should at least have a go at making the most of what we're finding in the data.

As I knew the birth data was usually first in the overall string, I set a flag (called BP in the code) which I initialized to 1 for the birthplace/birthdate elements. In the IF statements against the other keywords (e.g. LBS, EYES, HAIR), I set the BP flag to 0 and considered the Birthplace data complete for that particular row.

It meant if BP=1 then no other keyword had been found and I could append the text string onto the overall **BIRTHPLACE** variable and into the dictionary for that gangster. There was an element of brute force to that which I got away with due to the small dataset size.

_"We work with what we've got"_ is one of my most-quoted sayings and I stuck to that here (and in other areas of this wrangling exercise).

The strings "IN" and "AT" popped up enough times to make me do a replace on them. It's all part of the general tidy-up of the data as we went along. I always have an eye on the final data quality scores when doing an exercise like this so it's best to do our housekeeping as we progress.

### HEIGHT

Any recorded heights were in a format like 5′11″ and seeing as the "feet" symbol was only used in this way throughout the data, I used it as my _"keyword"_ for finding the height. I decided to split out the feet and inches into separate variables just in case I wanted to do any metric conversions with the figures in future. If I stored it just as a character string it would have needed a further transformation later at the analysis stage so best to take care of it now.


### WEIGHT

The weight keyword was "LBS" which was an uncommon enough phrase to not show up in any other unwanted areas.  Again I used the "numbers only" regex I used on the dates and heights above. Getting the pure number also makes it easier to do numerical analysis or conversions further down the line.


### EYES AND HAIR

Similar approach was taken with both of these physical attributes, namely looking for the keywords EYES and HAIR respectively. There are some further steps I could take at a third pass to get a little more out of this (e.g. looking for words like "Balding") but I'm going with the Pareto Principle on this one. When I do a data quality check at the end we can see if it's worth a revisit and re-evaluation.


### COMPLEXION AND BUILD

The Federal Bureau of Narcotics scribes made things a little more difficult when it came to extracting other physical appearance data on the subject's complexion and build. Sometimes they just put the Complexion in a comma delimited element of it's own, sometimes just the Build. Other times they joined them both together with an " AND ". Even worse they didn't stick to a standard "xxxx complexion" structure and occasionally plumped for "complexion xxxx" just to mix things up.

I decided to look for both the keywords **COMPLEXION** and **BUILD** as the first IF statement. If we found both in the same string element we looked again for the " AND " string, replaced it with a pipe delimiter and split the string out into an array. I then looked for the **COMPLEXION** and **BUILD** elements individually.

If both weren't in the same string I looked for **COMPLEXION** alone and then **BUILD** alone. These weren't completely filled for all rows but there was more than enough in there to make it an interesting exercise for future analysis. The **WEIGHT** and **HEIGHT** data was great for a quantitative measure but I wanted to see how that tied up with the qualitative descriptions of **BUILD** in particular.

### OTHER DESCRIPTIVE DATA

Anything not picked by all of the data points above was dumped into a further variable called OTH_DESC and comma separated. I will look through this at the analysis stage and see if anything particularly interesting jumps out for further investigation.

At first glance, there appears to be enough mentions of terms such as **GLASSES**, **JEWISH** and **NATURALIZED** to make it a worthwhile exercise. The **NATURALIZED** data includes the place and date of their naturalization which might make for an interesting plot. I'll save it for stage 3 wrangling however. We've got enough to be getting on with for the moment.

## Joining Back Up With The Main Dataset

Now we have split the **DESCRIPTION** field out into it's component parts, it's time to join it back up with the main dataframe. I've maintained the GID field as a primary key to make this a straight join. As we are working in **Python** and using the **pandas** library, we will convert the dictionary holding the split out **DESCRIPTION** data fields into a dataframe:

```python
#convert the dictionary data to a dataframe
dfd = pd.DataFrame.from_dict(d, orient='index')
dfd
```

Then use the Pandas merge() function to join our original dataframe to the new one:

```python
#merge our original and new split DESCRIPTION dataframes together
df_mrg = pd.merge(df, dfd, on='GID')
df_mrg
```

We now have our original data with an index field (GID) and the other descriptive data we just wrangled from the **DESCRIPTION** field has been appended to it. We're at a stage now where we could do some basic calculations and plots.

What's the average weight of our gangsters? What is the most common eye colour? What is the height distribution like? What does the age / year of birth profile look like?

We couldn't answer any of those questions before we did this exercise. Now we can.

## What's next?

If this was as far as we wanted to take our analytics project, some basic data viz wouldn't go amiss. A few charts to make our first run at exploratory data analysis come alive for example.

We're going to keep wrangling however as I see plenty of juicy data still on the bone. From locations they frequent to family members and assumed names. We have only scratched the surface by pulling the DESCRIPTION data apart.

In Part Four we will look to put an address on these guys and see where they live. We'll use some of the tactics and techniques we've used already such as **Regular Expressions** to spot an address and extract all of the parts of that location. Then I have a cunning plan to let us mark that exact location on a map. Until then, respect the omerta.