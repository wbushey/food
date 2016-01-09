#!/bin/bash
if [ -e "jekyll.pid" ] 
then
  SHUTTINGDOWN="Shutting down food"
  printf "$SHUTTINGDOWN"
  printf "$SHUTTINGDOWN" >> jekyll.log
  kill -9 $(cat jekyll.pid)
  rm jekyll.pid
  printf " ...done"
  printf " ...done" >> jekyll.log
else
  echo "No jekyll.pid. Perhaps jekyll is not running"
fi
