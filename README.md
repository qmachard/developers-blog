<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Developer's Blog
</h1>

<p align="center">
  Every developer needs a simple blog
</p>

<p align="center">
  <a href="https://circleci.com/gh/qmachard/developers-blog">
    <img src="https://img.shields.io/github/workflow/status/qmachard/developers-blog/test?logo=github" alt="Build Status on Github Actions" />
  </a>
  <a href="https://github.com/storybookjs/storybook/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/storybookjs/storybook.svg" alt="License" />
  </a>

## Table of contents

- 🚀 [Quick Start](#-quick-start)
- 🎨 [Personalize](#-personalize)
- 💫 [Deploy](#-deploy)


## 🚀 Quick Start

1. Fork repository and clone project

    ```bash
    $ git clone https://github.com/<your-username>/developers-blog.git developers-blog
    $ cd developers-blog
    ```

1. Install dependencies

    ```bash
    $ yarn install --no-dev
    ```

1. Start your app

    ```bash
    $ yarn start
    ```

## 🎨 Personalize

TODO

## 💫 Deploy

For the moment only GitHub Pages is provided by the project.

### Automatic Deployment

This blog is automatically deployed to Github Pages for two cases :

* When issues are closed to publish new articles
* When push on master to upgrade blog

This actions are managed by GitHub Actions

### Manual Deployment

It's possible to manually deploy the blog with this command :

```bash
$ yarn deploy
```
