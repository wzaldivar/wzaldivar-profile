#! /bin/bash

export IMAGE_TAG=stable

docker build --pull -t $1:$IMAGE_TAG .

