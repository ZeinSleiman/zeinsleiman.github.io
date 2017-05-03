---
layout: post
title: Install MongoDB Community Edition
tags: [MongoDB, database, NoSql]
excerpt_separator: <!-- continue -->
published: true
---

I was working on a project that requires connecting our code to Atlas database. [Atlas](https://www.mongodb.com/cloud){:target="_blank"} is a cloud-hosted mongodb database. Since the project was just a proof of concept I tried connecting to the Free Tier but I faced a connection problem using the C# driver. After confirming with MongoDB support that there was a bug that wont allow me to connect to the free tier, I decided to install the community edition on my laptop. Up to this day the bug has not been resolved. You can follow it on [github](https://github.com/dotnet/corefx/issues/17427#event-1040073361){:target="_blank"}.

Installing community edition is easy and straight forward. I followed the documentation on the [MongoDB site](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/){:target="_blank"}.
If you are using OS X like me, you will need [homebrew](https://brew.sh/){:target="_blank"}.

Start with the command

```shell
brew install mongodb
```

<!-- continue -->
I didnt add the option --with-openssl because the database is used for testing purposes.

After installation is complete you need to check if mongo was added to the system variable Path.

```bash
echo $PATH
```

You wont see mongo added there.

**Why do you need to add it to the path?**

Adding it to the path will make the calls from the terminal easier.

**What is the PATH I keep mentioning?**

> PATH is an environmental variable that tells the shell which directories to search for executable files (i.e., ready-to-run programs) in response to commands issued by a user. [Source](https://www.linux.com/answers/what-purpose-path-variable){:target="_blank"}

In other words if you want to call mongo from the terminal like you type echo you need to add the command to the PATH.

**How to add it to the Path?**

Type `pwd` in the terminal to see the path you are at.

You need to have a .bash_profile file to add the mongo path in it. .bash_profile is a script that is executed each time you start a new shell. It is just a txt file.

Make sure you are at the root directory `cd ~` and type
```shell
[ -f .bash_profile ] && echo "found"
```

If the file doesnt exist, create one.
```shell
touch .bash_profile
```

When you installed mongo, the files are placed in **/usr/local/bin/**. You can open the .bash_profile like you open a txt file. I use Atom so I use
```shell
open .bash_profile -a atom
```

but you can use any text editor you want. Add the following line `export PATH="/usr/local/opt/mongodb/bin/:$PATH"`

Now you are ready to start the database server. We can use mongod. Mongod is the deamon that will run the database server locally. When you call mongod specify the path where the data will be saved.
```shell
mongod --dbpath /Users/UserName/Documents/data
```

Open a new terminal tab and type `mongo`. The mongo shell will start and you are ready to create your first database. Type `db` to see which database is available. If none type `use <database-name>` to create a new database.

Good luck.
