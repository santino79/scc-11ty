---
title:  "Migrating My Personal Website From Gatsby To Eleventy"
date:   2021-02-06
featured_image: /images/content/11ty-logo.jpg
image_caption: 
excerpt: "Migrating My Blog From Gatsby To Eleventy"
tags: 
     - tech
     - articles
---
It’s something of an unwritten rule that the best way to get over procrastination on writing new material for your personal website is to rip it all to pieces and port the remains to a new Static Site Generator instead.

I keep telling myself that it does strictly meet the definition of shaving the yak as it it *should* improve performance or give encouragement to write more which makes the sunk cost of doing the migration worthwhile.

Or so I keep telling myself as I said.

## What Did You Do?

I migrated my [personal website](https://alanhylands.com) from one Static Site Generator, Gatsby, to another, Eleventy. Looking back at the [article](https://alanhylands.com/migrating-blog-wordpress-gatsby-part-one/) I wrote when I first moved the site from Wordpress over to Gatsby, it’s been almost two years from the last major development.

Which says a lot: either about Gatsby and how well I got on with it. Or the fact that one whole year of that time was 2020 when it was difficult to find a break from my busy Twitter doomscrolling routine to do anything even mildly productive or creative online.

## Why Did You Do That?

I had a few reasons.

1. **I like to try out new things**. For many years while I was a corporate wage slave working for one of the UK’s finest purveyors of legal organized crime (i.e. a major high street bank), I got out of the way of keeping up with cutting edge web development techniques. When I realised the world had left me and my “classic” ASP talents far behind, I figured I’d have a crack and see what I could pick up. I work with enough of the industry’s top front-end engineers now to realise I’ll never be good enough to be a professional in this arena but I do like to tinker.
2. **Gatsby was getting a bit complicated**. I’m a hobbyist at best and just like to be able to fix problems and re-jig layouts if I need to without getting in proper (paid) support to do it. To be honest, I’ve got enough on my plate keeping up with developments in the data world to also add constantly learning new front-end frameworks and everything else to the mix. I kept reading that Eleventy was a simpler option out of the box so my interest was piqued.
3. **Reputation is everything**. Gatsby’s PR last year was poor to say the least. They had a couple of serious issues with employees publicly calling them out for poor behaviour towards their staff and it definitely put me off the project as a whole. I work in tech and did 12 years in banking, I know there are no real Snow Whites out there but, when it’s for personal side projects, I don’t feel any compunction to stick around if something smells off. Conversely, Eleventy creator [Zach Leatherman](https://twitter.com/zachleat) tweeted last week to warn any supporters that he wouldn’t accept any disrespecting messages they posted about Eleventy’s competitors which was a much more welcome message to read.

## What is Gatsby?

Gatsby is a React-based open source framework with performance, scalability and security built-in.

[Check out the GatsbyJS official website](https://www.gatsbyjs.com/)

## What is Eleventy?

Eleventy is a simpler static site generator.

[Check out the Eleventy official website](https://www.11ty.dev/)

## What I’ve Found So Far.

I use my personal website as a place to post my own articles, stake out my own little spot on the world wide interwebz and try out the occasional new technology when the mood takes me.

With that in mind, I wanted something lightweight that let me use my existing Markdown articles and gave enough ease of CSS control that a design amateur (to say the least) like me could change some colours if he needed to.

### Under Starter’s Orders.

I went with Joseph Dyer’s excellent [Skeleventy](https://github.com/josephdyer/skeleventy) starter. It uses Eleventy, [TailwindCSS](https://tailwindcss.com/) and SCSS to make a single blog with categories and featured images which was perfect for my needs.

The setup and format is a million times easier to get to grips with than my last Gatsby effort which got a tad too complicated for me with Typescript and a lot else besides.

## Was it the right move?

I was looking at three main components of my experience and outcomes to be able to judge it as a successful move:

1. Ease of tinkering.
2. Build time.
3. Page speeds.

It has to be said that Eleventy so far has far exceeded my expectations on all three counts.

- [Nunjucks](https://mozilla.github.io/nunjucks/) as a rich and powerful templating engine for Javascript has been a dream to work with. I was a fresh off the boat noob a few days ago but it’s as rich, fast, lean and powerful as the Mozilla website promises.
- Pulling in JSON-based data files as Eleventy [global data files](https://www.11ty.dev/docs/data-global/) is really simple. So much so that I thought I’d done it wrong as it just seemed too easy straight out of the metaphorical box.
- The difference in build time is where it really blew my mind. I use Github as a repo for my files and serve it up through Netlify which has been a hell of a partnership for the past couple of years. The last build I deployed using my Gatsby version came in at 5 minutes 40 seconds. For a site of less than 100 pages, that felt pretty slow to me. Eleventy knocked out the exact same content and full site build in a mind boggling 1 minute and 4 seconds. No typos. Unbelievable performance from the boy Eleventy.
- One of the big reasons I shifted to a Static Site Generator from WordPress in the first place was to overcome the shockingly bad performance on a generic cheap web host. Gatsby really knocks this out of the park so I can’t complain in any way about it. But...take a look at what the Google Pagespeed Insights numbers are for the Eleventy build. Smoking.

![Google Pagespeed Insights](/images/content/2021-02-06ahcom_eleventy_google_pagespeed.png)

## Job well done?

In a word, yes. I’m more than happy.

Would I immediately go and re-do all of the other business sites I’ve done in Gatsby as a result? No. I wouldn’t go that far just yet. But if I ever went for a major redesign I would be tempted, especially if I put some time into getting to grips with TailwindCSS a bit more.

The real proof of it being a worthwhile time investment will come when the new site encourages me to write a new article on it. Which, seeing as I’ve just written all of this, it’s done already...
