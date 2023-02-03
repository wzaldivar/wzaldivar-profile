#! /bin/bash

git checkout main
git pull

git build -t $1:latest .

git checkout release
git pull

git build -t $1:stable .
