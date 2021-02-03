# Toy Problems


Feel free to use Google to aid you in solving the coding challenges!

## Using this Repository

You'll find each toy problem in its own folder.

## Getting a Copy of the Repo

If you haven't already, fork the repository on GitHub and clone your newly created
repo down to your computer.

## ES2015+ support

Spectator supports ES2015+ by transpiling files with [Babel](https://babeljs.io/). Any JavaScript feature included in the [latest preset](https://babeljs.io/docs/plugins/preset-latest/) can be used in a toy problem. The tradeoff for this support is that error messages can sometimes be a bit more obscure and/or line numbers in the stack trace don't map precisely to their original line numbers.

If this is not an acceptable tradeoff, you can write only ES5 code create a `spectator.json` file in the root of the problem directory that looks like this:

```js
{
  "babel": false
}
```


## Updating the Repository


    git remote add upstream https://github.com/hackreactor/xxxx##-toy-problems.git

    git remote pull upstream


After you've done that, updating your repo is as simple as running the following:

    git checkout master
    git pull upstream master

This will check out your branch and tell git to grab any changes made to the main
repository and merge them into your branch.

## Resolving Spectator's Unmergeable Pull Request

You may encounter a scenario where Spectator will not merge your pull request. This
often happens as a result of your upstream branch becoming out of sync with your
local copy. To resolve this problem, run:

    git pull upstream <your-branch-name>

Resolve any conflicts, merge, commit and push. You will then be able to submit a
Pull Request that will get correctly merged.
