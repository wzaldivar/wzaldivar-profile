#! /bin/bash

export IMAGE_TAG=latest

docker build --pull -t $1:$IMAGE_TAG .

