---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Hi!

I am an AI security researcher at Microsoft. Previously, I completed my PhD at [CISPA Helmholtz Center for Information Security](https://cispa.de/en), advised by [Prof. Dr. Mario Fritz](https://cispa.saarland/group/fritz/), and I obtained my MSc degree at [Saarland University](https://www.uni-saarland.de/en/home.html). 

I am interested in the intersection of AI with security, safety, and sociopolitical aspects. This includes the following areas: 1) Understanding, probing, and evaluating the failure modes of AI models, their biases, emergent risks, and their misuse scenarios. 2) How to design mitigations, system defenses, white-box control methods, and reasoning enhancements to counter such risks. 3) Leveraging AI agents for scientific discovery and advancing our society.

Our previous work, in 2023, was the first to identify the indirect prompt injection vulnerability in LLM-integrated applications, and in 2020, to propose and call for watermarking generative AI. 


## What's new? (starting from 2023)
- May'25: A paper ([A Theory of Response Sampling in LLMs: Part Descriptive and Part Prescriptive
](https://arxiv.org/abs/2402.11005)) is accepted at ACL (main conference)
- Feb'25: A new paper [Safety is Essential for Responsible Open-Ended Systems](https://arxiv.org/abs/2502.04512) is now online ([Twitter thread](https://x.com/sahar_abdelnabi/status/1889007080679338174))
- Feb'25: A new paper [Firewalls to Secure Dynamic LLM Agentic Networks](https://arxiv.org/abs/2502.01822) is now online ([Twitter thread](https://x.com/sahar_abdelnabi/status/1887216242668241126))
- Jan'25: Our paper [Can LLMs Separate Instructions From Data? And What Do We Even Mean By That?](https://arxiv.org/abs/2403.06833) is accepted at ICLR'25
- Dec'24: I have successfully defended my PhD! (with grade: Summa cum laude) 
- Dec'24: [TaskTracker](https://arxiv.org/abs/2406.00799) is now accepted at SaTML'25!
- Dec'24: Our [LLMail-Inject](https://microsoft.github.io/llmail-inject/) competition is online! The challenge starts on 9/12/2024.
- Sep'24: Two papers accepted at NeurIPS D&B! [Cooperation, Competition, and Maliciousness: LLM-Stakeholders Interactive Negotiation](https://arxiv.org/abs/2309.17234) and [Dataset and Lessons Learned from the 2024 SaTML LLM Capture-the-Flag Competition](https://arxiv.org/abs/2406.07954)
- We are organizing a challenge at SaTML'25 on [prompt injection](https://microsoft.github.io/llmail-inject/), full details soon! 
- Sep'24: I am serving as a PC member for USENIX Security'25
- Jun'24: We released [TaskTracker](https://arxiv.org/abs/2406.00799) paper and toolkit on detecting prompt injection based on models' activations. 
- Feb'24: I started a new position at Microsoft Security Response Center at Microsoft Research Cambridge!
- Dec'23: Our paper [Not what you've signed up for: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection](https://arxiv.org/abs/2302.12173) received the best paper award at AISec'23 workshop! 
- Nov'23: We are organizing a competition in SatML'24 on LLM security and prompt injection and extraction. The competition is live now: https://ctf.spylab.ai/
- Sep'23: I am serving as a PC member for SatML'24
- Sep'23: A new [paper](https://arxiv.org/abs/2309.17234) on evaluating LLMs as negotiation agents is online. 
- Aug'23: Our paper [Not what you've signed up for: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection](https://arxiv.org/abs/2302.12173) got accepted in AISec'23 workshop!
- May'23: Our talk titled "Compromising LLMs: The Advent of AI Malware" got accepted in [Black HAT USA 2023](https://www.blackhat.com/us-23/briefings/schedule/index.html#compromising-llms-the-advent-of-ai-malware-33075)!
- May'23: We added a major update to our LLM-integrated applications paper with new attacks and exploits on real-world systems.
- Feb'23: We released a [technical report](https://arxiv.org/abs/2302.12173) on the security assessment of LLM-integrated applications

<!-- This is the front page of a website that is powered by the [academicpages template](https://github.com/academicpages/academicpages.github.io) and hosted on GitHub pages. [GitHub pages](https://pages.github.com) is a free service in which websites are built and hosted from code and data stored in a GitHub repository, automatically updating when a new commit is made to the respository. This template was forked from the [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/) created by Michael Rose, and then extended to support the kinds of content that academics have: publications, talks, teaching, a portfolio, blog posts, and a dynamically-generated CV. You can fork [this repository](https://github.com/academicpages/academicpages.github.io) right now, modify the configuration and markdown files, add your own PDFs and other content, and have your own site for free, with no ads! An older version of this template powers my own personal website at [stuartgeiger.com](http://stuartgeiger.com), which uses [this Github repository](https://github.com/staeiou/staeiou.github.io).

A data-driven personal website
======
Like many other Jekyll-based GitHub Pages templates, academicpages makes you separate the website's content from its form. The content & metadata of your website are in structured markdown files, while various other files constitute the theme, specifying how to transform that content & metadata into HTML pages. You keep these various markdown (.md), YAML (.yml), HTML, and CSS files in a public GitHub repository. Each time you commit and push an update to the repository, the [GitHub pages](https://pages.github.com/) service creates static HTML pages based on these files, which are hosted on GitHub's servers free of charge.

Many of the features of dynamic content management systems (like Wordpress) can be achieved in this fashion, using a fraction of the computational resources and with far less vulnerability to hacking and DDoSing. You can also modify the theme to your heart's content without touching the content of your site. If you get to a point where you've broken something in Jekyll/HTML/CSS beyond repair, your markdown files describing your talks, publications, etc. are safe. You can rollback the changes or even delete the repository and start over -- just be sure to save the markdown files! Finally, you can also write scripts that process the structured data on the site, such as [this one](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb) that analyzes metadata in pages about talks to display [a map of every location you've given a talk](https://academicpages.github.io/talkmap.html).

Getting started
======
1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Fork [this repository](https://github.com/academicpages/academicpages.github.io) by clicking the "fork" button in the top right. 
1. Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and create content & metadata (see below -- also see [this set of diffs](http://archive.is/3TPas) showing what files were changed to set up [an example site](https://getorg-testacct.github.io) for a user with the username "getorg-testacct")
1. Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.  
1. Check status by going to the repository settings, in the "GitHub pages" section

Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 

Create content & metadata
------
For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

I have also created [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the academicpages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring academicpages can be found in [the guide](https://academicpages.github.io/markdown/). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful.
 -->
