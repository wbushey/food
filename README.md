food
====

A home recipe site built with Jekyll.

Repo Organization
================

Root contains configuration files for bundle and Jekyll, documentation, and
helpful scripts.

Most of the typical Jekyll-related files, including content, layouts, and plugins,
are located in the `jekyll` folder. Jekyll's build process outputs to the `_site`
folder as usual.

Installing
==========

You'll need a recent version of Ruby installed. If you use rbenv, you can run
`rbenv install.` You'll also need bundler installed, which you can install via
`gem install bundler`.

You'll need a recent version of npm installed. If you use nvm, you can run
`nvm install`.

Then, to install all dependencies:

```
bundle install
npm install
```

Building and Serving
====================

```
npm run build
bundle exec jekyll
```

To rebuild while adding content or developing:

```
npm run watch
bundle exec jekyll serve -w
```

Publishing
==========

`./publish.sh`

Testing
=======

```
npm run test
```

To run tests while developing:

```
npm run test:watch
```

To run tests with an inspector (useful if you want to use `debugger`):

```
npm run test:inspect
```
