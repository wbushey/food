food
====

A home recipe site built with Jekyll.

Repo Organization
================

Root contains configuration files for webpack, documentation, and helpful scripts.

`content` contains markdown files that become content on this site.

`js` contains all of the repo's client-side and build JavaScript.

Installing
==========

You'll need a recent version of npm installed. If you use nvm, you can run
`nvm install`.

Then, to install all dependencies:

```
npm install
```

Building and Serving
====================

```
npm run build
```

To rebuild while adding content or developing:

```
npm run serve 
```

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
