# cpnt-201-group-assignment
Group Assignment for CPNT 201 (SASS) at SAIT


## Git Command-Line Instructions 


### Getting to your Folder 

First step is to get into the folder where your git repository is. You do this with the `cd` command, and the path up to and including your repository. 

So if your repository is in `C:>\Users\John\Workbench\SassProject` you would... 

`cd \Users\John\Workbench\SassProject`


### Cloning the repository 

On the Git website, navigate to the project repository. On the Code tab, choose "Clone Repository" and copy the repository address to your clipboard. 

You would then use the command: 

`git clone <address-of-repository>` 

replacing `<address-of-repository>` with your own repository's address.


### Branching 

When you take on a new task, you need to branch off `master` into a new branch containing just the work for your task at hand. 

Suppose that you wanted to add a mobile menu to the site. You would run: 

```
git checkout master
git branch feature/mobile-menu
git checkout feature/mobile-menu
git push -u origin feature/mobile-menu
```

This will create a new branch for you to work on for your target task. 


### Finding out your Status

To know if you have any uncommitted changes, use the command: 

`git status` 

Any files that are __not__ ready to commit will show in red while staged (added) files will be green. 


### Getting Files Ready to Commit 

To make a file ready to commit, you need to 'stage' it. This is is done through the `add` command. Given a `<filename>`, you should run: 

`git add <filename>` 

to get a file ready to commit. 

To get many files (or to capture deleted files) you can run either: 

```
git add .
git add *
git add -A
```

If you change your mind, you can unstage (un-add) all files by running 

`git reset HEAD` 


### Commiting your Changes 

To commit your staged set of changes, you should run: 

`git commit -m "description of my changes"` 

Of course, writing in an actual message for what your changes mean, 


### Pushing your Changes 

For the first time you push a branch to git, you will need to do something called an "upstream push". This is just a push with some extra book-keeping. It sets up the new branch remotely. 

`git push -u origin <branch-name>` 

Then, once you've done that once, you only need to run: 

`git push`

And Git should just use sensible defaults for you. 


### Getting new Content from Origin 

There are two ways to get new content from origin. 

`git fetch origin` is a non-destructive way to gather all the new content from your remote repository (`origin`). This will gather any new commits, and any new branches for you. 

`git pull origin` will gather your changes _and integrate them_. This is normally a good thing, and will be the command you use most. But later on, it's important to know the difference. 

