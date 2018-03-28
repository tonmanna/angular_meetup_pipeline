#!/usr/bin/env bash
docker rm -f angularmeetup
docker volume rm node_modules_angularmeetup
docker rmi -f angularmeetup
docker build -t angularmeetup .