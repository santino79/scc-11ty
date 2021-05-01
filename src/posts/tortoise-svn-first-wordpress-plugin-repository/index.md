---
title:  Using TortoiseSVN To Get My First Plugin Into The WordPress Repository
date:   2018-09-07
featured_image: /images/content/tortoise.jpg
image_caption: 
excerpt: "My first thoughts on using TortoiseSVN to upload my new Wordpress plugin to the WP repository"
tags: 
     - tech
     - articles
---
## Getting my first Wordpress plugin out there.

So I got my first Wordpress plugin approved over at Wordpress.org - the groundbreaking and earth shattering [Mob Quotes](https://wordpress.org/plugins/mob-quotes/).

It's all been somewhat of a practical learning exercise in what it takes to put together some code and get it added to the Wordpress plugin library. It's been an interesting journey though, taking me through some elements of development I've missed in my grand analytics management career fork for the past six years.

## Subverting the status quo.

[Wordpress.org](https://wordpress.org) uses Subversion for version control on it's plugin repository so first step for me after being approved was to find out how to get my PHP file up onto there.

They provide a good guide for getting started with SVN which came in rather handy: [https://developer.wordpress.org/plugins/wordpress-org/how-to-use-subversion/](https://developer.wordpress.org/plugins/wordpress-org/how-to-use-subversion/)

My dev skills are a little ring rusty when it comes to this kind of thing but, in the grand tradition of Just Fucking Do It, in I jumped.

I went with **TortoiseSVN**, as a Windows based GUI and Shell extension, to access the Wordpress svn repository.'You can download it here: [https://tortoisesvn.net/](https://tortoisesvn.net/)

The Wordpress docs give a good example of using the command line to get your plugin files uploaded to the svn repo but I went with a combination of the TortoiseSVN Repository Browser and the Windows Explorer extension TortoiseSVN lets you use to import your files to your /trunk folder in your repo.

Beyond the Repo Browser being a little slow and clunky, it worked well even for a first timer. Despite uploading the files to the wrong place first time out, it allowed me to go in and manually delete them, then re-import again in the right place so mistakes weren't punished too much.

## Takeaways from an old code slinger.

Overall, it's been good to feel the old heart racing when trying to pick up some new dev skills. These things can tend to get neglected when we move further into management roles and they really shouldn't. There's a reason I started working as a developer all those years ago and I've missed that hands-on coding action over the past while.

This may all be dipping toes in the very shallow end of the pool but there is a master plan. Do what you enjoy and, for now, at least I'm enjoying getting stuck back into this.