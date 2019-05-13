---
layout: post
title: Daily GIT commands 
tags: [personal, software, engineer, coding, git, terminal]
excerpt_separator: <!-- continue -->
published: true
---

This is a list of all the git commands I use on a daily basis at work and home. 

 <!-- continue -->

```shell
git log -p -1
# This will display the last commit differences - very useful after you rebase and squash the code into one commit
```

```shell
git diff origin --full-index > <diff-file-name>
# Generates the difference between the branch and master and dump it in a file
```

```shell
git rev-list master.. --count
# Count the number of commits from master
```

```shell
Git rebase -i HEAD~n
# Rebase interactively so you can squash your commits
```

```shell
Git show --summary 
# Checks the last commit summary
```

```shell
git reset --soft HEAD~1
# Reset the last commit
```

```shell
git reset HEAD <file>
# Unstage a file in git
```

```shell
git clean -fdx 
# Cleans all the ignored files and folders
```

```shell
ssh-add -K 
# Adds the key to keychain so you dont type the passphrase over and over again
# Not on a daily uses basis.
```
