---
title:  "Getting Around Hotmail/Outlook/Live Email Delivery Issues From WordPress: Gmail Workaround"
date:   2018-07-27
featured_image: 
image_caption: 
excerpt: "Finding a workaround to improve Wordpress email delivery to Outlook/Live/Hotmail email addresses using Gmail"
tags: 
     - tech
     - articles
---
I haven't been running massive mailing lists so I've had limited experience of dealing with email delivery over the past few years but every time it rears it's ugly head it turns into a major pain in the ass.

Invariably it's our old friends at Microsoft who are causing the main issues on their Hotmail, Outlook and Live email accounts.

I'll use the website for our fitness studio [Cura Fitness](https://curafitness.com) as the example in this article but you may have ran across similar problems using Woocommerce for an online store or Wordpress mailing list plugins in the past.

## So what's the problem?

My main problem this time has been emails sending from Wordpress, not receiving any bounces or notifications of delivery problems but finding out from customers that they haven't been receiving any of the emails from our site.

They need to receive the welcome email after they get set up so they can reset their password, learn how to book classes and get their email notifications of successfully having booked their fitness classes.

I spent days poring over online guides to eliminating these problems and tried many different plugins and email service providers to get to a workable solution.

We aren't talking about thousands of emails here, this is a membership and event management site for a small boutique fitness studio in a small town in a small part of the UK but it's enough of a pain to make me keep pushing until I sort it out.

## What were the options?

Having driven myself crazy trying to get Mailgun and Sendgrid APIs working and manipulate the DNS settings on the hosting account through WHM (a pain in itself), I ultimately settled on the [WP Mail SMTP](https://en-gb.wordpress.org/plugins/wp-mail-smtp/) plugin by [WPForms](https://wpforms.com).

They have a [great tutorial](https://wpforms.com/send-emails-wordpress-using-smtp-step-step/) showing how to set up the plugin using a range of providers including GMail, Yahoo, Sendgrid and Mailgun which can seriously increase the chances of your mail reaching it's destination.

My problem then was that it worked brilliantly through GMail for 95% of my members but I still was getting ghosted by Microsoft in all of their Outlook, Hotmail and Live alter egos.

They weren't being blacklisted, the domain isn't on a blacklist, the IP range wasn't on a blacklist but the emails were still being soft rejected and not hitting inboxes (or Junk/Spam folders for that matter).

The question then was what to do to force these emails through and after another afternoon of head banging on desk and almost rage quitting I decided to flip my thinking.

If WP Mail SMTP worked for 95% of email accounts then why didn't I keep it and find a workaround for Outlook/Hotmail/Live, even as a short term fix, that didn't involve a major reworking of all of our email delivery?

Sometimes the simplest ideas are the best so what I did was go into my own virtually dormant Hotmail account, manually add the Cura Fitness email address as a Contact and see if that allowed the emails to hit the account in the expected fashion.

Which, of course, it did.

So many hours wasted...

## Effectiveness over elegance

It isn't the most elegant solution and it would be a major PITA to roll out for a large user base but for a handful of users on a small site I think it's better than making them sign up for another provider.

Elegance in technical solutions is often over-rated, sometimes you just have to brute force it and hope it doesn't piss off too many users in the meantime until you let the plan for the long term solution formulate.

For anyone who is unsure of [how to add a Contact to your Outlook.com/Hotmail/Live account](https://alanhylands.com/setting-up-a-new-contact-on-outlook-hotmail-live/) I've written up a quick How-To guide.

Happy emailing.