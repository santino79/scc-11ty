---
title:  "Migrating My Blog From Wordpress To Gatsby - Part 2"
date:   2019-05-18
featured_image: /images/content/f-scott-gatsby.jpg
image_caption: 
excerpt: "Migrating My Blog From Wordpress To Gatsby - Part 2"
tags: 
     - tech
     - articles
---
I wrote in [Part One](/migrating-blog-wordpress-gatsby-part-one/) about finally biting the bullet and giving Gatsby a go. Having dipped my toe in it's delectable waters I knew full well that it was only a matter of time before I went deeper down the rabbit hole.

So I spent a couple of weeks converting my main data and analytics site Simple Analytical to Gatsby from Wordpress. Yes, there is an element of yak shaving in there.

## Falling out of love with Wordpress.

Wordpress is a fine CMS and so it should be - around 30% of the entire internet runs on it. That doesn't mean that it's without fault  and the longer I used it for that site, the more it started to irk me.

To be fair, not all of these were the fault of the Wordpress eco-system, in fact, probably few of them were. But anyone who has done anything with Wordpress over the past five years will tell you how it's virtually unrecognisable from the chippy young go-getter it was back in it's early days.

I had a few major issues:

### 1) SECURITY.

My reseller hosting package kept falling over due to mod_security rules getting flagged. Not sure whether it's fair to strictly blame WP for this. When a long established hosting company tells you that they'll have to switch the security rules off altogether or you won't be able to edit any of your existing posts then you know something is amiss with your software.

Wordpress is notorious for it's inability to maintain adequate security levels at the best of times. Any Wordpress admin who says they haven't ever been hacked just hasn't been in the game long enough. It's almost an inevitability and a rite of passage.

I was updating plug-ins **EVERY** day. And I mean **EVERY** day. It's great that the developers were patching things quickly and regularly but when it turns into a tedious daily job monitoring and making sure the updates happen, it's time to re-evaluate your approach.

When, as I said above, the host tells you that the only eay to let you edit posts is to switch more security off, it sends alarm bells ringing. LOUD ONES.

### 2) SO MANY PLUG-INS.

The great thing about the Wordpress eco-system is the sheer number of plug-ins. One of the worst things about the Wordpress eco-system is the sheer number of plug-ins. By the time I'd had enough with the daily updates, I was running 18 different plug-ins on my WP install for Simple Analytical.

No-one made me use them all but I'll swear blind that none of them were extraneous. When you get to the point where you have to install yet another plug-in to shut down the use of the new Gutenberg editor that you didn't want in the first place, it's time to re-evaluate your choices in life. You'll notice I was getting to the re-evaluation point quite a lot here.

### 3) SPEED OR LACK THEREOF.

> Tomorrow we will run faster.

The main reason behind me moving my data blog Simple Analytical to Gatsby can be summed up in the quote above. Simply put, building my blog site with Gatsby and hosting on Netlify lets it go like the proverbial shit off a shovel. For the non-Northern Irish amongst you, that means it's rather quick. Like greased lightning kind of quick. Usain Bolt quick.

Testing on localhost is never a fair representation of what it will be like in the wild but even there it was looking DAMN good. Getting it going on Github and Netlify didn't lose any of that speed and I couldn't be happier.

**Simple Analytical is a blog.** It's a collection of articles giving my perspective on issues, trials and tribulations data analysts find at all stages of their data careers. It's text and a few images on the screen. That's it. It doesn't need a full database and CMS behind it. Gatsby let me get back to that and I'm very grateful.

## So how did I approach the migration?

I'd learnt a lot from my first foray into the world of Gatsby (note: you're reading it now). One major difference with porting over my analytics blog was that people actually read it...

I wanted a few things that I didn't have with this particular starter:

* a top navigation bar.
* categories to split up the main types of content (e.g. Articles / Interviews)
* tags for further classification with the articles or types of interviews.
* Mailchimp form integration.

## Where to begin the search?

I didn't want to code the whole site from scratch. My React and Gatsby powers aren't quite there just yet. But I did want something I could hit the ground running with and lose none of my existing content.

After a **lot** of trial and error with different starter sites from the excellent [Gatsby Starter Library](https://www.gatsbyjs.org/starters/) I still wasn't getting what I wanted. I turned instead to the [Gatsby Showcase](https://www.gatsbyjs.org/showcase/) to see how some of the top Gatsby sites on the web had been put together. The Showcase has over 500 Gatsby sites on display, many of which have made their source code available on Github.

### A little help from a kind stranger.

The [manu.ninja](https://www.gatsbyjs.org/showcase/manu.ninja) site caught my eye. It's the personal blog of front-end developer [Manuel Wieser](https://manu.ninja/) and had all of the basics nailed for what I wanted for Simple Analytical. Clean, straightforward design and layout. Blog. Top nav bar. Provision for other content pages, tags and categories.

So I downloaded [Manu's source code](https://github.com/Lorti/manu.ninja) from Github and got to work. After a lot of tinkering, hacking, slicing, dicing and creating, I had whipped Manu's original into something a little more my own. Couldn't have done it without all of the original hard work being made available for use on Github though which is an amazing act of generosity to help further the community and learning of other developers. Thank you Manu Wieser!

### Old world meets new world.

Porting over my own content from the Wordpress site was a time-sink but a necessary evil. [Peter Akkies](https://peterakkies.net) had written an excellent blog post on [exporting your Wordpress posts to Gatsby markdown](https://peterakkies.net/export-wordpress-to-gatsby-markdown/) which pointed me in the direction of the [Wordpress-to-Hugo exporter plug-in](https://github.com/SchumacherFM/wordpress-to-hugo-exporter).

This plug-in saved a lot of copy-pasta and hand converting and maintained frontmatter as well. I did still have to manually review all of the posts (circa 60 posts and pages) and manually correct any markdown that didn't translate properly. Peter does warn in his article about having to fix slugs and some frontmatter to fit the Gatsby blog and GraphQL so it wasn't a surprise. If I'd had hundreds of blog posts to convert it might have been a different story. As it was I did a little scripting to speed up some naming changes etc. as I tried a few different starter set-ups so having some Python or other scripting language up your sleeve is useful.

### You've Got Mail(chimp).

The biggest addition to the manu.ninja code I had to bring in was Mailchimp form integration. I went for the [gatsby-plugin-mailchimp](https://www.gatsbyjs.org/packages/gatsby-plugin-mailchimp/) plug-in and configured a general email sign-up form to include after all posts on the Simple Analytical site.

I will have to re-visit this in time as it only sets people up to be added to the generic newsletter mailing list. If/when I add specific content upgrades and mini courses back into the site I'll have to find a way to include those tags back into Mailchimp. There is always more dev to be done.

### Any other issues?

I mentioned in [Wordpress->Gatsby part 1](https://alanhylands.com/migrating-blog-wordpress-gatsby-part-one/) that I'd had to do an email workaround and I've done the same thing on this site migration. Netlify DNS is very easy to configure so adding A and MX records to point to the mailserver at my other hosting provider was pretty simple.

Otherwise, the migration was quick. The site is **VERY** fast on pageload and [Google's Pagespeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Falanhylands.com%2F) tool **LOVES** it.

I'll report back in future if any major problems show up but for now I'm more than happy to have made the switch. I'm not finished with Wordpress. In fact I've spent a good part of the week putting a booking system together for a client using Wordpress and the excellent [Amelia](https://wpamelia.com/) plug-in.

I'm not planning on becoming a full-time front-end dev either but it's been an interesting sojourn into this world. Javascript and web apps have came on a long way from my early days using it. But the support and guidance from so many devs in the community through blog posts, articles and forum answers has been a big help into getting up and running quickly. I'm looking forward to building on the basis of these [two](https://alanhylands.com) [sites](https://curafitness.com) I've migrated over to Gatsby. And who knows, I might even get around to writing more articles for them along the way!