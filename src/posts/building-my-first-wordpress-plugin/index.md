---
title:  Building My First WordPress Plugin
date:   2018-09-05
featured_image: /images/content/WordPress-logotype-standard.png
image_caption: 
excerpt: After nearly fifteen years of creating Wordpress websites, I get around to building my first Wordpress plugin
tags: 
     - tech
     - articles
---
## Not my first Wordpress rodeo but...
I've been using [Wordpress](https://wordpress.org) since back in 2005 when [I started my first blog](https://alanhylands.com/i-want-to-be-a-football-writer-when-i-grow-up/), the much lamented football website, StateOfTheGame.co.uk.

Since then I've used it for countless blogs, brochure sites, corporate sites, e-commerce shops and, lately, a fully functioning class booking system for our fitness studio, [Cura Fitness](https://curafitness.com).

I've used hundreds of different plugins and never been too afraid of getting into their code to fiddle with them when I needed a bit of customisation but I had never sat down to learn how to code my own Wordpress plugin. Until now.

### Getting started.
In the full spirit of Minimum Viable Product I figured I would get an easy early win under my belt and use the foundation of Wordpress's foremost and most recognisable plugin - Hello Dolly.

###A collective groan of disappointment rises from the audience but let me explain.

MVP methodology means starting small and delivering the absolute basic working form. [Matt Mullenweg](https://ma.tt) made Hello Dolly as one PHP file. No database connection is needed as all of the lyrics are hard coded inside it. He used some basic PHP functions in there, EXPLODE to split out the lyrics by line break character, and some simple CSS for styling.

It's genius is in it's simplicity so where better to start in the big bad world of Wordpress plugins?

I'm as much of a fan of Louis Armstrong as the next man but I wanted something a little more in keeping with my personal interests for content.

## Enter La Cosa Nostra.

Some people watch World War 2 documentaries, some are into the Romans or other ancient Mediterranean civilizations. That's cool.

My historical interest is in American organised crime of Italian origin. It stems from watching The Godfather Part 2 on TV when I was a teenager and has grown steadily from there over the years. Movies, books, documentaries, memorabilia, the lot. So this is where I turn for my plugin content.

There is a great website called [National Crime Syndicate](https://www.nationalcrimesyndicate.com) which has helpfully gathered a lot of quotes from famous and infamous mobsters. After a bit of copying and pasting I had replaced the Louis lyrics with the quotes and the name of the gangster who said it.

A few amendments to Matt's plugin data at the top of the file and a few changes to function names and that was it all done.

I installed the plugin, made sure a quote was showing at the top of each admin page and on each page refresh and - <strong>bada BING!</strong> - we had mobsters in our Wordpress admin panel.

![Mob Quotes on our Wordpress admin panel](/images/content/wp-mob-quotes.jpg)

The inimitable Matt obviously did all of the heavy lifting here of course but it was a good first introduction to what goes on behind the curtain when it comes to Wordpress plugins and I'll be delving much deeper again in future.

For more info on the plugin and to find out how to download and install it, visit: [Wordpress Plugins : Mob Quotes](https://alanhylands.com/wp-plugins-mob-quotes/)