---
title: WTF Is Data Quality?
date: 2019-10-16
featured_image: /images/content/quality-street-sign.png
image_caption: 
excerpt: 
tags: 
     - data
     - articles
---
## Setting the scene.

Your business data doesn’t live on Quality Street, does it? It lives somewhere a bit [skeezier](https://www.merriam-webster.com/dictionary/skeezy).

Somewhere a little rougher around the edges. The kind of place you drive through faster at night and don’t stop at traffic lights.

Your data lives in Garbage Grove. Rubbish Road. Dumpster Drive. (OK, you get the picture).

Yet every day your business just pumps more and more of it in there. It’s not a [data lake](/wtf-is-a-data-lake) or even a data swamp.

**It’s a data sewer.**

And the stench of it is coming back to haunt you and your business every time you try to use it. Paint quite a picture don’t I?

## Boring dry definition alert.

Anyone interested in how Wikipedia describes data quality? Didn’t think so.

But we’re going to check it out anyway and see how it ties in with what we think we know.

[Wikipedia says](https://en.wikipedia.org/wiki/Data_quality):

> “Data quality refers to the state of qualitative or quantitative pieces of information.”

![What you talkin about Willis?](https://media.giphy.com/media/a0FuPjiLZev4c/giphy.gif)

What does that even mean?

Let’s try again. Wikipedia also says:

> “The state of completeness, conformity, consistency, timeliness, duplication, integrity, and accuracy that makes data appropriate for a specific use.”

(They lifted that one from the [Government of British Columbia](https://web.archive.org/web/20070409044243/http://www.cio.gov.bc.ca/other/daf/IRM_Glossary.htm)).

It is a bit of a mouthful but it does make a little more practical sense. Each element of the sentence can actually be broken down to make a judgement call on whether the data sitting in front of us gets a tick or a big cross beside it for that part.

## Let’s ask the data management professionals.

![DAMA UK logo](/images/content/dama-united-kingdom-logo.png)

[DAMA UK](https://www.dama-uk.org/), the organisation for data management professionals, produced a white paper on the [six key dimensions of data quality](https://www.em360tech.com/wp-content/files_mf/1407250286DAMAUKDQDimensionsWhitePaperR37.pdf).

(Their paper quotes [Socrates](https://en.wikipedia.org/wiki/S%C3%B3crates) who said, “The beginning of wisdom is the definition of terms.” Now if that isn’t a mission statement for my “WTF Is…” series then I don’t know what is!)

DAMA put this paper together so it would operate as a checklist for data professionals when assessing the level of data quality in their own organisation.

Let’s look at each one of DAMA’s six dimensions in turn.

### Completeness.

_The potential of stored data against “100% complete”._

It does allow for a judgement call on what “100% complete” means though. Are all data elements mandatory or critical to our data collection and business requirements?

If the purpose of our CRM is to store customer details for future marketing but we don’t collect their email address, would we count that data as complete? What if we collected first name and surname but not middle name?

### Uniqueness.

_This means nothing is recorded in our database more than once based upon how it is identified._

I spent **FAR** too many years dealing with the repercussions of customer databases that contained multiple customer-level records for the same person. Each person should be in your Customer table once.

Any duplication of customer records (with different first names / customer identifiers etc.) means **LOW** data quality.

### Timeliness.

_Is the information from our data available when it is needed?_

If a customer changes their address in one of your stores but the change isn’t made until several days later on the IT system, you are likely to fail this test.

Even more so if that customer gets a marketing letter sent to their old address in the meantime.

Not everything needs to be available for real-time reporting however. Sometimes an overnight batch update will be sufficient to meet the timeliness criteria for a particular data field.

(In [business analytics](/wtf-is-business-analytics/), there are **VERY** few occasions when you really need real-time data - this is a hill I am prepared to die on.)

### Validity.

_Data are valid if it conforms to the syntax of its definition._

Huh? In other words, make sure it fits the type and format of what you expect it to.

A date can’t be on the 35th of any month. A phone number shouldn’t have characters in it (555-BETTER-CALL-SAUL doesn't count). If your credit card number should have 16 digits then a 14 digit number is invalid.

### Accuracy.

_The degree to which data correctly describes the "real world" object or event being described._

This is closely tied in with the Validity assessment.

If a phone number is not in a valid format then the data can never be accurate. If the phone number is in a valid format but one digit is incorrect then it meets the Valid criteria but still fails the Accuracy test.

### Consistency.

_Are there differences in the information shown by the same data point on different systems or data tables across your organisation?_

Is Alan’s date of birth different on the Customer table than it is on the Staff table? Have you closed bank branches but your weekly sales report still shows new sales against that closed location?

Both can’t be right. You just failed your Consistency test.

![Good graffitti on orange wall](/images/content/good-orange-wall.jpg)

## Do we need to have all of these to make our data quality “good”?

No, it doesn’t really work like that. And it’s always dependent on the requirements set out by your business.

As we have seen above, data can pass on one test yet fail another or fail on several and pass another. You could have a customer’s email address record which is consistent across multiple tables but still fails both the Validity and Accuracy tests (e.g. alan@hylands - it has to have a dot and a domain extension at the end to be valid for a start.)

DAMA also make the fair point that data may pass all six dimension tests with flying colours but still fail a basic usability test.

If the data is all in English and your business is based in rural China then it’s still bad data quality regardless of how consistent, complete, accurate etc. etc. it may be.

## So if data quality is essentially subjective, how do we know what high quality data looks like?

DAMA’s six tests can certainly help you begin to judge the quality of your data. But we have to take things out of the theoretical realm to really find out how much quality there is lurking beneath the hood of our data systems.

If you are building a data report or analysis, can you trust that the data you are using is both complete and correct? Only one way to find out. Build some reports and start to see what it looks like.

### A worked example.

I gave an example above of a bank closing local branches but still seeing those branches appear in their weekly sales reporting for years afterwards. We’ll call this a "hypothetical" example.

There may be nothing wrong with the source system or the data entry of the sales clerks who input the customer details. It might legitimately be a quirk of the way each individual customer is tagged to a certain branch location when they become a customer. And that’s fine.

But how does that impact our data quality score when this branch location is used for sales reporting further down the line?

### What are the implications of our low data quality?

- It can erode confidence in the overall business intelligence being produced.
- It can negatively impact the sales figures and potential bonuses for the branch staff who actually sold the new product.
- And neither of those leads to positive results for your business.

Low data quality leads to multiple versions of the truth, conflicting reporting and increased support time and expense for the data factory who have to go around cleaning up the different messes.

And if it starts to impact the quality of reporting to government or regulatory bodies then it can become VERY costly indeed.

![The impossible neon sign on brick wall](/images/content/the-impossible.jpg)

## It sounds like good data quality is nearly impossible to achieve in the real world.

Simple response is: yes, it is very difficult to achieve especially across a large organisation.

It has to become part of a full life-cycle quality control approach from the entire business to have any chance of becoming successful in the longer term.

From ensuring user interfaces don’t allow staff or customers to input garbage to quality control measures and reporting being implemented at each stage of data production and storage. This can become VERY expensive and onerous VERY quickly.

### Beware the bureaucrats.

Even worse, in some large corporates, is when an entire bureaucratic industry of pen-pushing is allowed to creep in under the well-meaning guise of “Data Management and Governance”.

There are countless examples of these departments being completely filled with jobsworths who have no idea about the actual data they are meant to be protecting and nurturing.

Instead they get caught up tinkering with data quality measurement schemes to use as sticks to beat people with and documenting data lineage that is nothing more than a paper-filling exercise. 

Ultimately the data is no cleaner or of a higher quality after all of this but it certainly fills your day with meetings and talking shops if that’s your thing...

## How can I improve my data quality?

I have foreshadowed above (in a very subtle fashion) what I _don’t_ think you should do. But that will come as little surprise. I’m no fan of meaningless bureaucracy in any form.

To get it right, you will have to start off with as simple a plan as possible.

Audit your existing data and see where you stand on the DAMA 6 principles. You can then start to see where your main problem areas are. 

**For example:**

- **_Planning to implement an email marketing campaign but find your customer details are spread across three systems that don’t talk to each other?_** Consolidate, cleanse, de-dupe and match your customer records into one master Customer database.

- **_Ran an analysis to find your customer base’s product penetration levels are well below industry norms?_** Maybe you have customers sitting under multiple customer identifiers which again need to be matched and consolidated under one record.

- **_Found thousands of your business customers are tagged as sole traders and are availing of sole trader discounts but have the phrases Ltd or Limited in their company name?_** Run a simple query to identify them by name and get the tagging re-calibrated.

None of these solutions are rocket science but they are daily data quality occurrences for tens of thousands of businesses of all sizes all over the world.

I’ve dealt personally with all of them. You don’t have to go looking too hard to find them, that’s for sure.

![Burning house and van](/images/content/burning-house-van.jpg)

## How can it go so wrong?

It’s not always someone’s fault. Sometimes the best of intentions to fix the situation can backfire and cause more data quality issues down the line.

Let’s say a bricks and mortar business collects customer data when they are buying a new consumer good in-store. And the business now wants to collect email addresses for future (cost-effective) marketing campaigns.

So they get their IT team to change input validation rules and enforce an email address being entered for each new record on the sales system.

Not every customer wants to give over their email address. Some don’t even have one.

So the customer support staff on the frontline have to input a dummy email address for every one they don’t legitimately have. This wreaks absolute havoc in terms of email bouncebacks and poor marketing reach metrics for the Marketing team further down the line.

These decisions, day in, day out, have real, long-term implications for the quality of your business data. That’s why it needs a Total Quality Management approach to the full life-cycle of such decision making.

And it needs proper data people to be involved at all stages. People who understand the consequences of getting dirty, poor quality data through the pipes that can cost millions to clean up.

## What should we do today to help improve the quality of our business data?

Sadly, it’s often easier (and quicker) to mess up a perfectly good quality data system than it is to tidy up a bad one. Such is life.

But that doesn’t mean we throw our hands up and just let our (data) world burn.

Taking simple steps to audit, monitor, clean and revitalise our data can have almost miraculous-looking results if we concentrate our focus.

### Basic action plan.

1. Get the right senior people onboard in your business to own the process and outcomes.
2. Get an experienced data professional to guide you through the data quality audit and cleansing process.
3. Don’t get gummed up in paper-chasing exercises that lead nowhere.

### Just take action.

Do it now. Keep doing it. Then do it some more. Then rest a little. Then do it again.

Then it's job done.

Only kidding, this job is **never** done. Not until the next time. And the time after that. And...

## Happy cleaning!

Get it right and your analysts (and your bottom line) will appreciate it come next reporting time. Don't bother and you only have yourself to blame.