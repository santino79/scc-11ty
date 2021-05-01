---
title: WTF Is A Data Lake?
date: 2018-09-14
featured_image: /images/content/data-lake.jpg
image_caption: 
excerpt: 
tags: 
     - data
     - articles
---
**Let’s jump in and get the boring, dry, formal part out of the way first.**

## WHAT IS A DATA LAKE &#8211; THE FORMAL DEFINITION

According to [Wikipedia](https://en.wikipedia.org/wiki/Data_lake), a Data Lake:

  * Is a system or repository of data stored in its natural format, usually object blobs or files.
  * Is usually a single store of all enterprise data. This can include raw copies of source system data and transformed data used for tasks such as reporting, visualization, analytics and machine learning.
  * Can include structured data from relational databases (rows and columns), semi-structured data (CSV, logs, XML, JSON), unstructured data (emails, documents, PDFs) and binary data (images, audio, video).

## WTF DOES THAT MEAN?##

### In simpler terms:

Storage is cheap. Businesses are generating vast quantities of data every day. Everyone knows there is money to be made mining all of this data so they decide to just keep everything. You never know what might turn out to be useful in future. So they keep ALL of it.

Structured data &#8211; like in your traditional Relational Database System like SQL Server. Log files from web traffic. CSV files of transcripts of customer complaint calls &#8211; hell even the recorded audio of the calls themselves. ALL OF THE DATA.

Stick it all together in a great big box (let’s call it [The Hadoop][1]) and work out how we are going to do something with it later.

#### This, my friends, is a data lake.

### Sounds like a hoarder’s paradise?

**That’s because it is.**

We all know the kind of people who like to keep every old item of clothing or broken piece of electronics they’ve ever owned. Just in case it comes in useful in future.

Their attic is full. Their wardrobes are overflowing. There is a maze of old newspapers stacked high all around their house.

And yet they can’t/won’t throw any of it out. **JUST IN CASE.**

It gets to the point where they have to move some of their junk/stored treasures to a self-storage facility as the house is overflowing. Now they’ve filled a shipping container as well and still more stuff is arriving through the front door every day.

#### There’s an analogy in there somewhere.

Businesses can find themselves in the same position. They can become so focused on not missing any data that might become useful and just bung it all into their virtual cupboard until the door won’t close. Cloud storage services are usually the next level (the shipping container if you will) once they’ve filled the on-premises storage box.

### Sounding more like a data ocean than a data lake.

When it gets so stuffed full of every conceivable kind of raw, unstructured data, it descends into more of a data swamp than a data lake.

It can get so that analysts and data scientists are spending more time digging around fruitlessly in the dirt hoping to find a small nugget of gold than actually adding any real value to the business.

### Sounds horrible. Why would we use a data lake at all?

**Horses for courses.**

What works at the gigabyte storage level won’t necessarily work at the petabyte level and this can be where data lakes come into their own.

The gaming industry is an example where so many data points are generated and stored per game that relational databases sometimes can’t keep up. When that data needs analysed further down the line, data scientists can appreciate the flexibility the data lake’s lack of defined structure gives them.

Deep analysis with constantly changing structure and requirements can be accommodated more quickly and easily in a data lake than in a traditional data warehouse. It really depends on what the business actually plans to use the data for.

### How can we get the best value out of our data lake?

With some forethought and consideration there are definite ways to get value-for-money and business benefits out of your data lake.

**Some prerequisites to think about before jumping on a multi-million dollar data lake bandwagon:**

  * What are your business use cases? What are you really looking to get out of this lake that you can’t get from your existing data warehouse?
  * Does it have to be data lake OR data warehouse? No, they can co-exist. If it’s one or the other, again, consider what you will be using it for. It’s not one size fits all especially with the investment in time and money that goes into either choice.
  * Is a vendor with some self-serving interest at play pushing you down this road? Some slick salesman from one of the big players been taking your CTO out to dinner and suddenly a new data lake is on the table? Buyer beware!
  * Does your business have the necessary analytics and data science skill-sets already available to make the most out of this? If not, you’re adding in another major cost item to the whole project. It&#8217;ll also take a great leap in business thinking to accommodate the data driven agenda they will push. It’s this aspect of it all that makes me think of the Meat Puppets song &#8220;Lake of Fire&#8221;. Mostly because it’s not just the analysts using the new data lake that can start to feel the heat radiating out from it.

## Examples of Data Lake providers

  - Microsoft Azure
  - Amazon S3
  - Apache Hadoop

 [1]: https://alanhylands.com/shiny-new-objects-and-boardroom-buzzword-bingo/