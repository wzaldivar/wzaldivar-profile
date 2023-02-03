#! /bin/bash

git checkout main
git pull

docker build -t $1:latest .

git checkout release
git pull

docker build -t $1:stable .
