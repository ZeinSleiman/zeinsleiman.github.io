---
layout: post
title: Jekyll Code Highlighter
tags: [jekyll, code highlighter]
excerpt_separator: <!-- continue -->
published: true
---

Publishing my site on github pages was going great. I pushed the code to the master branch, then waited few seconds and refreshed the page. Oops, the code block on the page was not rendering as the localhost.

Locally I was seeing this:
{% include image.html url="/assets/images/codehighlight.png" description="Code highlighted correctly" title="Code highlighted correctly"%}

Using github pages I was seeing this:
{% include image.html url="/assets/images/codehighlightergonewrong.png" description="Code highlighted incorrectly" title="Code highlighted incorrectly"%}

<!-- continue -->

Searching online and reading few comments on Jekyll repository, I found that you need to add an extra line between the text and the code block.

As an example instead of this

<div class="card">
<div class="card-body">
First install Jekyll using the following commands:
<div style="background-color: #f64929; height: 1em;"></div>
```bash
<br>
* gem install jekyll bundler
<br>
* ~ $ jekyll new my-awesome-site
<br>
* ~ $ cd my-awesome-site
<br>
* ~/my-awesome-site $ bundle exec jekyll serve
<br>
* Now browse to http://localhost:4000
<br>
```
</div>
</div>
<br/>
you have to do this
<div class="card">
<div class="card-body">
First install Jekyll using the following commands:
<div class="space-highlight"></div>
<div style="background-color: #f64929; height: 1em;"></div>
```bash
<br>
* gem install jekyll bundler
<br>
* ~ $ jekyll new my-awesome-site
<br>
* ~ $ cd my-awesome-site
<br>
* ~/my-awesome-site $ bundle exec jekyll serve
<br>
* Now browse to http://localhost:4000
<br>
```
</div>
</div>

It is very simple but make sure you remember it.
