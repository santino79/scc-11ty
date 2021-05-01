---
title:  "Five Hard Earned Tips For Increasing Your Wordpress Security"
date:   "2019-06-19T00:00:00.000Z"
featured_image: /images/content/keyboard-warriors.jpg
image_caption: 
excerpt: "Having faced down a barrage of hacker attacks on a new Wordpress install, Alan outlines five of his top hard-earned tips for increasing your Wordpress website's security."
tags: 
     - tech
     - articles
---
## Old Friends.

Wordpress and I have been both friends and foes for going on fifteen years now. We've had our ups and downs during that time. But at some point I think we decided it was better to focus on the good we've done together rather than the struggles that were driving us apart. In that way, we're very much the Mick Jagger and Keith Richards of my online publishing life.

![Mick and Keith](/images/content/mick-keith.jpg)

I've done the full monty when it comes to using Wordpress. Blogs galore. E-commerce sites with Woocommerce. Membership portal and booking platform. Affiliate sites fed from every kind of datastream. You name it, I've done it with Wordpress.

## A New Client Site.

The latest client site I did was an appointment booking and management site for a sports massage therapist. The site build was smooth, the client incredibly helpful and enthusiastic. When we launched to the public, there were plenty of great quotes and testimonials about how easy it was to register and use. And then the fun began.

The hackers started almost immediately. I noticed some dodgy looking users signing up and caught a backdoor takeover attempt just at the vital moment. This was not what I planned when I took on building this system. Who wants to play whack-a-mole every day as every script kiddie all over the world tries to take over your client's site?

**Answer: nobody.**

So I doubled down on my usual security measures and put together this list of 5 top tips for helping increase your Wordpress site's security.

## Five Top Tips For Increasing Your Wordpress Security.

### 1) Do Your Updates

This is my #1 for ensuring no-one takes advantage of your lackadaisical approach to Wordpress security. If you can, set Wordpress to auto-update the main core install when a new version is available. If you've been sensible and spare with your use of plug-ins and don't have too much custom development on the site, it should cure more ills than it creates. (Keep regular backups just in case though).

Don't forget to regularly check and update your plug-ins for updated versions as well. It's a warzone out there and if you don't keep up to date (sometimes on a daily basis) there is a queue of assholes out there just itching to take advantage of your vulnerability. Don't give them (or their bot armies) the satisfaction.

### 2) Install Security Plug-ins

_But didn't you just say don't go mad with the plug-ins? Make your mind up._

Wordpress can be clunky enough with a basic install, never mind once you go mad and start installing dozens of plug-ins that you then have to maintain and keep up-to-date. I would advise an exception when it comes to the matter of security plug-ins. I've adopted the belt and braces approach on this score and am currently employing the services of [Wordfence](https://www.wordfence.com/) and [iThemes Security](https://ithemes.com/security/).

Both have their strong points and given the concerted attacks I've been facing I figured it was better to take the full benefit of both. Wordfence has an excellent file scanner function while iThemes Security has a multitude of different options to alter the "normal" Wordpress configuration. Both plug-ins have Premium options which will help bulk up your security even further. Got a Wordpress site that's providing the basis for your entire business? The investment is an absolute no-brainer.

### 3) Enforce Strong Passwords

I know it's easier to remember a simple one word password that you've used for every website log-in since you got your first computer. I know it's tempting to allow your users to do the same but, in the words of Celine Dion, think twice. Plug-ins are available which specifically allow you to set your password policies and there are often options in other log-in related plug-ins to bulk up your password complexity rules. Use them. Always.

If you've installed one of the security plug-ins above you'll find options there to enforce strong password rules as well. Belt and braces as I said. Go draconian and save yourself some serious pain in future. To make remembering 20 character random passwords easier I've recently started using [1Password](https://1password.com). It took a little getting used to after slumming it with the Google Chrome Password Manager before but I'm glad I made the switch now.

### 4) Disable xmlrpc.php

Ever heard of this legacy throwback to a simpler Wordpress age? Probably not unless you sat and picked through your Wordpress install file by file. It basically allows remote access to your site which was more useful back in the good old days and has almost been completely deprecated in modern versions of Wordpress. I found it was being hit like mad from IP addresses all over the world one evening as hackers tried to access the administrator account on my site.

_(I'd wisely decided to not just call the main admin username "admin" which is another good WP security tip.)_

If you have no need for it, you can disable the xmlrpc.php file with a dedicated plug-in (wouldn't be my first choice - see above for reasons), with code in your .htaccess file or - my choice - through another setting on the iThemes Security plug-in.

Time will tell if it makes a major difference but the suspicious activity in trying to hit that file from proxied IPs from Montreal, Finland, Italy, France and more within a few minutes was enough to make me draw quick line through it.

### 5) Don't Allow Users To Self Register

This won't always be an option depending on the nature of your site. If it's a free-to-sign-up members portal then it's not really on the cards. I'd been lulled into a false sense of security (pardon the pun) over the years when I'd been able to shutdown registration for users on blogs or let the site managers handle adding new users manually.

This time I needed Joe Public to be able to register and book appointments themselves so it was time to tighten up the old constraints and limit them as much as possible.

Limiting Dashboard access, enforcing strong passwords (there it is again) and keeping an eagle eye on just who is signing up for your site are absolute necessities if you can't stop them registering themselves. For even tighter controls, you could use Captcha (and have EVERYONE hate you) or make users click a confirmation link in an email to confirm they are who they say they are. Neither are foolproof but then what in life really is?

## Is all of this security effort worth it?

The bottom line and my main takeaway is really combine as many security measures as you can without clunking your site up to the point where it becomes absolutely unuseable. Anyone who has been in charge of a website of any description, not just a Wordpress install, will know that you just can't trust people online to play nice.

Whether it's posting disgusting material on their Facebook page, harassing people with hateful comments and messages or just being a plain old pain in the ass on a forum, the internet really seems to bring the worst out in some people.

And that's before you get to the site hackers we're trying to stop. Some do it just for the hell of it. Some because they can. And some actually have a gameplan behind it more than just defacing or infiltrating someone else's space. Do all you can to not let them win and destroy all of your hard work.

The clean-up can be excruciating and is a horrendous waste of time, money and anxiety and prevention is **ALWAYS** better than cure. Good luck.