---
layout: post
title: Migrating from TFS to Git
tags: [TFS, Git, visualstudio]
excerpt_separator: <!-- continue -->
published: true
---

Today at work we discussed the idea of moving from TFS to git. Currently we have the code in the cloud on [Visual Studio Team Services](https://www.visualstudio.com/vso/){:target="_blank" rel="noopener"}. Curious about how long it will take to do the move, I went ahead and allocated two hours of my time to do this. As usual I start by [googling](https://www.google.ca/search?q=migrate+tfs+to+git){:target="_blank" rel="noopener"} "migrate tfs to git". The second result was a link to this [article](https://chriskirby.net/blog/migrate-an-existing-project-from-tfs-to-github-with-changeset-history-intact){:target="_blank" rel="noopener"}, a
very well written article by Chris Kerby that has all the information you need to do the move. However, I faced some issues that I had to figure out on my own and decided to share and keep as a reference.

When you write the clone command


```shell
git-tf clone https://myaccount.visualstudio.com/DefaultCollection $/MyProject/MyBranch --deep
```

It is very important to keep **The DefaultCollection** in the account url although you wont see it in the project url when you access the account using the browser.
You will see

<p class="word-nowrap">
<strong>https://myaccount.visualstudio.com/MyBigProject.</strong>
</p>

After you enter the command you will be prompted to enter the username and password. If you have two step verification enabled the online password wont work. You need to use a personal access token from the account security section.
<!-- continue -->
Generating a personal access token is easy but I included some screenshots to help.
{% include image.html url="/assets/images/accountsettings.png" description="Access Account Security Settings" title="Access Account Security Settings"%}

Once you are in the security page in the Personal access token click **Add**
{% include image.html url="/assets/images/accesstoken.png" description="Access Account Security Settings" title="Access Account Security Settings"%}

Choose your account and suitable description
{% include image.html url="/assets/images/addtoken.png" description="Add Access Token" title="Add Access Token" %}

Make sure to copy the token generated and paste in the terminal
{% include image.html url="/assets/images/tokengenerated.png" description="Token" title="Token Value" %}

The cloning time will be based on how big your project and history is. For me it took around 3 hrs. After that, just follow the rest of the steps in the article mentioned above, and push to any git repo you want. You can keep the project on visual studio team services or move it to other git hosting services.
