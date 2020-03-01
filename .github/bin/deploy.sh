#!/usr/bin/env bash

set -eu

git config user.name "Gatsby Deployer"
git config user.email "gatsby@bots.github.com"

yarn gh-pages -d public -r https://x-access-token:${GH_TOKEN}@github.com/${GH_ORGANISATION}/${GH_REPOSITORY}.git
