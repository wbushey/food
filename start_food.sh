#!/bin/bash
jekyll serve --watch &>> jekyll.log &
echo $! > jekyll.pid
