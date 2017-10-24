# Customizing the Command Line

### Installing zsh and oh-my-zsh: What and Why?

**Oh-My-Zsh** is an open source, community-driven framework for managing your ZSH configuration. 

**zsh** is an alternative to using bash, adding additional features to the terminal such as auto completion, case insensitivity and scrolling through previous commands.

Example: If you want to find the last time you used a command like echo or ls, type the command in and arrow key up, you can scroll through all the times you've previously used this command.

By adding plugins you can access information and have shortcuts within your terminal to make the user experience better.

Pre-reqs for zsh installation: install wget:
For Mac: `brew install wget`
For Linux: `sudo apt install wget`

### Installation

`sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"`

In your command line type in `ls -la`
to see if you have .zshrc file. This is the file in which you can change the themes and add plugins. 


### Configuring Themes

For Mac: `open ~/.zshrc`
For Linux: `xdg-open .zshrc`

![](https://i.imgur.com/DL5ADMn.png)

Change the theme with ZSH_THEME

Themes can be found on GitHub:
https://github.com/robbyrussell/oh-my-zsh/wiki/themes

### Adding plugins

Plugins help with autocompletion. They can be found [here](https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins).

`open ~/.zshrc`
Go to the 'plugins=(git)' section and add new plugins e.g plugins=(git node npm)

Some recommended plugins are node npm.

Save and quit.

Example: with the git plugin, you can go to your terminal, type in git and it will show you all the git commands

### Status Indicators

Certain themes allow you to track git files using status indictators, specific to each theme:

- Untracked files
- Files added to git
- Modified files
- Deleted files
- Renamed files
- Unmerged files
- Repo ahead of current branch


### Terminal Emulators

Terminal emulators can add an extra layer of functionality.

Either: [Hyper](https://hyper.is/)
Mac: [Iterm2](https://www.iterm2.com/index.html)
Linux:[Terminator](https://gnometerminator.blogspot.co.uk/p/introduction.html)

### Troubleshooting 


If this doesn't work for you, delete and the zsh and oh-my-zsh files, then reinstall. You can find these files in your home directory once you show your hidden files: https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/