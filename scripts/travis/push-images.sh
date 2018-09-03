#!/bin/bash

set -e

# This push the images of modified services or all services if core is modified

if [ "$TRAVIS_BRANCH" != "master" ] || [ "$TRAVIS_EVENT_TYPE" == "pull_request" ]; then
  echo "Skipping push images step"
  exit 0
fi

echo "Pushing image on ${TRAVIS_BRANCH} ${TRAVIS_EVENT_TYPE}"

docker tag frontend $DOCKER_REGISTRY_HOSTNAME/frontend:"${TRAVIS_BUILD_ID}"
docker tag frontend $DOCKER_REGISTRY_HOSTNAME/frontend:latest
docker push $DOCKER_REGISTRY_HOSTNAME/frontend:"${TRAVIS_BUILD_ID}"
docker push $DOCKER_REGISTRY_HOSTNAME/frontend:latest
