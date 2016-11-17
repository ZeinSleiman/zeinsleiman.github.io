---
layout: post
title: Moving my Site to Jekyll - The Journey
description: testing description
tags: [personal, blog, cms]
excerpt_separator: <!-- continue -->
published: true
---

Few years ago, I wanted to build a profile page to have some presence on the internet, so I went and built a one page site using MVC .Net. Nothing special about the site, a static HTML page, but the idea was I would add more to the site in the future and that didn't happen. Busy with work, with life, the site was not a priority for me.

Fast forward a year or two, I found about Jekyll while reading some programming articles and I said to myself, I should use it to build my blog. It looks really cool. As with most of the ideas that comes to my mind I did nothing with it.

Fast forward again to this fall, the idea of building a blog came to me and I remembered Jekyll. As I am looking into the hundreds of options to build a blog I found github pages and their ability to parse Jekyll. For me that was a sign that it is time to give Jekyll a try and build my blog using it.

<!-- continue -->

### What is Jekyll?

From their (link) site, Jekyll transform your plain text into static websites and blogs. No need for databases to manage your site no need to write logic to manage your archive. You write your blog post, add the file to your site, deploy it and using magic or code, the post will show on your site. Jekyll gives you full control on how to style your site.  Once you have built the main structure of your blog then all the posts after will look great.

How do you start?
Head to the Jekyll website, it has a lot of resources. You can also check Jekyll tips website. They have video tutorials and templates that will help you start understanding Jekyll and how to build an amazing blog. I am not trying to advertise Jekyll, I just fell in love.

First install Jekyll using the following commands:
gem install jekyll bundler
~ $ jekyll new my-awesome-site
~ $ cd my-awesome-site
~/my-awesome-site $ bundle exec jekyll serve
# => Now browse to http://localhost:4000

Then download a Jekyll template, there are a lot on the web. You can download this website template from (link).
Once that is set, you can start reading the template and modifying it while watching the videos on the Jekyll tips website.

I found that the documentation is really easy to understand and in few hours you can have a site ready for deployment. I used to github to deploy my site, it is really easy. You get free hosting with github pages and maintaining the site is easier than you think. Any commits you push to your repository, will be immediately published to your site. Deployment is so simple and seamless.

I used the dekyll template to get familiar with the format and layout and used some of the code as the basis of this template.
