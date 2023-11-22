---
title: clean/prune history
date: "2023-11-22"
excerpt: "how to clean the history on zsh shell"
cover_image: /images/posts/purple-1.svg
---

## mac zsh shell

the default shell on mac is `zsh`. There you can type in your commands and later you get get the commands with the `history` command.

```sh
user@~/ >history
    1  history
    2  ls
    3  ls -an
    4  pwd
```

Sometimes you want to clean your history. On bash-shell it is the `history -c` command. But on zsh this can be done by `history -p`. (this sounds like _prune_).

```sh
user@~/ >history -p
user@~/ >history
    1  history
user@~/ >
```
