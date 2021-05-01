---
title:  "Migrating My Blog From Wordpress To Gatsby - Part 1"
date:   2019-04-29
featured_image: /images/content/leo-gatsby.jpg
image_caption: 
excerpt: "Migrating My Blog From Wordpress To Gatsby - Part 1"
tags: 
     - tech
     - articles
---
## Where it began.

Language wars and chasing shiny new frameworks have been a hallmark of the web development world for as along as I can remember. [My first website](http://www.oocities.org/rattlesnake_suitcase/index.htm) was hand-coded in HTML in Notepad. We're talking late 2001/early 2002 here.

I opened up Internet Explorer and there it was in all it's glory. It was a simpler time.

I jumped over first to Microsoft Frontpage (clunky and horrible) and then Macromedia Dreamweaver which was a LOT smoother to use. And somewhere along the line I stopped hand coding HTML.

![My first website in 2003](/images/content/rattlesnake_suitcase2003.png)

By the time I started my first blog in 2005 there was a new kid on the block that everyone seemed to be talking about - **Wordpress**. It's hard to believe now but back then there was still a lot of scepticism about Matt's ability to really make a dent in the CMS world. Especially at a time when PHP was already starting to draw it's fair share of criticism from the developer community. Looking back now as around a third of all websites run on Wordpress, you have to say Matt knew what he was doing!

Over the intervening years I put a lot of time into building websites with Wordpress. Woocommerce shops. Affiliate stores with product pages populated from Amazon's API (amongst others). Salon booking systems. Membership sites. Personal blogs (mainly this one) over and over and over. Grand opening, grand closing. When I wanted to build a website I installed Wordpress. Me and most of the rest of the world as the number of WP installs shows.

## Back in the saddle again.

Early last year I started blogging and writing again more seriously than I had done in the best part of ten years. I'd been busy building a corporate data science career. And a family. Not necessarily in that order but certainly concurrently. I wanted to write and share some of what I'd learned during that period. Being involved in businesses, large and small, and finding the sweet spot where tech and data started to make real business improvements, I thought I had something worth writing about.

So I created SimpleAnalytical for my data science writing and [AlanHylands.com](https://alanhylands.com) for all of my other many varied writing interests. Wordpress for one. Wordpress for the other. And for a while it worked well. Like a comfortable old pair of trousers, my old friend had stretched a little but was still just about recognisable enough for me to jump back in with a vengeance.

## Where did it start to go wrong?

Wordpress is well stocked with a world of plug-ins for any and every eventuality a site developer might need. The same goes for themes as the web creaks under the weight of so many Wordpress free and premium theme offerings. My tastes are rather simple as you can tell. Even so, in a serious case of yak shaving I managed to rack up just under 200 versions of the home page design for AlanHylands.com. Yes, 200. And in the end the last version I had as a bastardised version of the Generatepress theme was this:

![AlanHylands.com on Wordpress](/images/content/ah_wp_20190429_400Wx600H.png)

200 versions and I got a plain white homepage with a picture and a little text. Job well done. Ahem.

The site was still slow however. I didn't use a lot of fancy wizardry but the number of plug-ins still seemed to mount up. Google's Page Speed Insights app didn't like it at all. It ran like a dog. And seeing as all I was doing was writing an occasional article with a lot of text and a few images I got to thinking - why do I need all of these plug-ins and a database at all?

I've been getting well into the community at the excellent Dev.to and I started reading more and more about static site generators. Hugo, Jekyll, Gatsby. The names kept coming and I was intrigued. I hadn't written any Javascript in a LONG time so the thought of having to learn all of that to even get started was enough to put me off.

I needn't have worried.

This weekend I bit the bullet and decided to give Gatsby a go. I'd been reading great things about Netlify as a host and with a little over a dozen blog posts to convert to Markdown I figured I'd convert AH.com and see how I got on. Worst case scenario it would be a few hours wasted but if it turned out well...

## Standing on the shoulders of giants.

React developer [Dave Ceddia](https://daveceddia.com/) has an excellent [beginner's guide to starting a blog with Gatsby and Netlify](https://daveceddia.com/start-blog-gatsby-netlify/) which was perfect for what I needed. Getting my hands dirty with the terminal, Node, Javascript and Github was a great introduction to this whole world of frontend development that has happened while my gaze was somewhere a little more data-sciencey.

Dave walks you through installing a Gatsby starter to get up and running quickly. Once I'd poked around at it and made a few changes I got my confidence up and started moving the blog post list to another page and re-creating the look of my previous Wordpress homepage in Gatsby.

New posts are written in Markdown and are essentially text files so it's incredibly lightweight and there is no need for a database. There is no admin section or scripts to hack so it's more secure that way as well. Everyone who has ever ran a Wordpress website knows how easy it is to drop the security ball. Especially when we start adding more and more plug-ins to get added functionality. SSGs don't have quite the same issues which is a great bonus. They are also lightning fast which readers LOVE (and so does Google). Double bubble.

Dave's tutorial walks you through pushing your new blog to a Github repo and then deploying it to Netlify. It takes a matter of minutes and it's live. Boom. Job done. Well, not quite.

## A minor fly in the ointment.

Things are never quite as stress-free as we would like when we aren't working from a green field site. For me the main issue was the email address I use for quite a few log-ins and communications. Netlify doesn't do email hosting so I had to scramble around and piece together a solution from around 20 open Chrome tabs and searches.

I'm still testing it out just to make sure it's worked ok but I think I've found a workable solution. My old reseller hosting package uses WHM and cPanel. Using my existing account on there I was able to add A and MX records at Netlify DNS to re-direct any email back to the email host on my old account.

There I can set up email forwarders and use their SMTP for sending under an alias through my personal Gmail. If it looks like being a success longer term I'll write that up as it was a bit of a sweat to work out.

## What's next?

I've still got several updates to this site that I'd like to do so it'lll remain a work in progress. It's clean. It's fast. It's something new for me to play with and a good base to explore more about Gatsby. But I don't have a navigation bar at the top and I think I'll add that next. Anything to avoid doing any proper work!

What I really have to think about now is whether I want to migrate my data blog Simple Analytical over to Gatsby with a lot more posts, code blocks, tables and Mailchimp integrations. Watch out for Part 2 when I get that conundrum worked out.

## So am I done with Wordpress now?

Simple answer is no. Like all tech options, it will come down to horses for courses. For a clean, simple blog I like the thought of just writing up a Markdown file, uploading it and seeing it live. For sites and online apps that could be doing with the full Wordpress admin backend and database, I'll still look to it for the foreseeable future.

Life does not have to be a case of EITHER/OR, sometimes it's good to keep a few options in your toolbox. I've made a career out of being a Data MacGyver, no reason to change that when it comes to the end of nearly my second decade building websites as well.