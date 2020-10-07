# Git

## How to checkout a PR locally

HOW to test a PR locally

1) check you are in a branch with "nothing to commit" (no changes)

2) fetch the PR

```sh
git fetch upstream pull/28/head:pull-28
```

3) checkout to the PR branch

```sh
git checkout pull-28
```

4) check the code in the browser

5) go back to develop

```sh
git checkout develop
```

6) delete the PR branch

```sh
git branch -D pull-28
```