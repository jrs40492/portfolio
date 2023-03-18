#!/bin/bash

echo "$1" | docker login registry.gitlab.com -u gitlab-ci-token --password-stdin
docker stop portfolio
docker rm portfolio

docker run \
-d \
-e EMAIL=$3 \
-e EMAIL_PASSWORD=$4 \
--restart always \
--name portfolio \
registry.gitlab.com/jrs40492/portfolio:$2

docker image prune -a --force --filter "until=168h"
