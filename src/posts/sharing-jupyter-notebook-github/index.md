---
title: Sharing A Jupyter Notebook On Github
date: 2018-11-01
featured_image: /images/content/share-jupyter-github-e1547042907112.pn
image_caption: 
excerpt: 
tags: 
     - data
     - articles
---
### In this tutorial we will look at how to upload and share our Jupyter Notebook on Github.

## What is Github?

[Github](https://github.com/) is a collection of code repositories where developers, analysts and data scientists store and share their projects.

It is based around the version control system [Git](https://en.wikipedia.org/wiki/Git) which was developed by Linux creator [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds) back in 2005.

### What is version control?

**Think of it like this.** When you are working on a software development project, like an app, or a data science exploratory analysis, you will make constant changes to your code as you go along. Version control lets you track the changes at each step and, if necessary, rollback to previous versions if you make a balls of what you are doing further down the line.

It’s particularly helpful when working in teams as other team members can download the latest version, make their changes and upload the new version back up to the main repository.

## What is Jupyter Notebook?

_**From [Jupyter.org](https://jupyter.org):**_ “The Jupyter Notebook is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations and narrative text. Uses include: data cleaning and transformation, numerical simulation, statistical modeling, data visualization, machine learning, and much more”.

It has quickly became the #1 way for data scientists using Python to distribute and share their code and projects to a wide user base.

## Why would I share my Jupyter Notebook on Github?

**Github is the #1 community and repository for code-based projects in the world.** There is a massive community of developers and data scientists using it to share their work and learn from other like minded, highly talented people.

Having your code base hosted and publicly shared on Github is also a good way of demonstrating to potential employers or collaborators that you have the analytical chops they need in their lives.

## How do I share my Jupyter Notebook on Github?

**Have you already got a [Github](https://github.com) account?** If not, why not?

Jump sideways for a second to the [Github homepage](https://github.com/) and sign up for the free Personal plan.

When that’s done, come back and start up the tutorial with the rest of us existing Githubbers. We’ll be right here waiting _(plays Richard Marx on Spotify in tribute)_.

1) **OK, let’s begin.** Go to the [Github homepage](https://github.com/) and log-in to your account.

![Sharing Jupyter Notebook on Github 1](/images/content/jupgit_1.png)

&nbsp;

2) **Create a new repository** by clicking the big “Start A Project” button in the middle of the screen.

3) **Enter a name for your new repository** (I’ve went for the cunningly titled “start-scraping”), enter a short description, click Public (as we want to be able to share the notebook), tick the Initialize this repository with a README and click the big green “Create Repository” button at the bottom.

&nbsp;

![Sharing Jupyter Notebook on Github 2](/images/content/jupgit_2.png)

&nbsp;

4) Click on the Github icon at the top of the screen to be taken back to the Github homepage. You should now see your newly created repository under the Repositories header. ****Step 1 completed!****

&nbsp;

![Sharing Jupyter Notebook on Github 3](/images/content/jupgit_3.png)

&nbsp;

5) Now we’re going to **upload our sample notebook to our new repository**. If you don’t have a sample notebook (why not? What did you think this tutorial was about?), open up your Jupyter Notebook window, click on the New button and select Python 3 under “Notebook:”. In the first cell type:

> print(“This is a call to all my past resignations”)

Run the cell to check you haven’t made any syntax boo-boos then **Save the notebook** somewhere you can find it.

6) Go back to your Github homepage browser tab and click on the link to your newly created repository under “Repositories”. Click on the “Upload Files” button.

&nbsp;

![Sharing Jupyter Notebook on Github 4](/images/content/jupgit_4.png)

&nbsp;

7) Either: a) **drag n’ drop** your sample notebook file into the “Drop to upload your files” box or b) **click the “Choose your files” link** and browse to the notebook location.

&nbsp;

![Sharing Jupyter Notebook on Github 5](/images/content/jupgit_5.png)

&nbsp;

8) Any uploaded files will show under the “Drag N’ Drop” box. You can add a description of the changes you are making in the text box below the Commit changes header. I just typed “Added start-scraping notebook” and clicked the big green **Commit changes** button at the bottom.

&nbsp;

![Sharing Jupyter Notebook on Github 6](/images/content/jupgit_6.png)

&nbsp;

9) Now we’re back on the repository main page we should see that **there are now TWO files in our repository**: a README and our newly uploaded sample notebook.

&nbsp;

![Sharing Jupyter Notebook on Github 7](/images/content/jupgit_7.png)

&nbsp;

10) **And we’re done.** You’ve now added a Jupyter Notebook to your Github public repository and made it available to be shared with other analysts.