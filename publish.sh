#!/bin/bash
mkdir _build
git clone -b gh-pages git@github.com:wbushey/food.git _build
jekyll build -d _build
cd _build
git add .
git commit -m "Built Site"
git push
cd ..
rm -rf _build
