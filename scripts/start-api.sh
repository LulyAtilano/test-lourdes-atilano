#!/bin/bash

set -e

docker pull $DOCKER_REGISTRY_HOSTNAME/backendbase-api
docker pull $DOCKER_REGISTRY_HOSTNAME/backendbase-user
docker pull $DOCKER_REGISTRY_HOSTNAME/backendbase-notification

docker tag $DOCKER_REGISTRY_HOSTNAME/backendbase-api backendbase-api
docker tag $DOCKER_REGISTRY_HOSTNAME/backendbase-user backendbase-user
docker tag $DOCKER_REGISTRY_HOSTNAME/backendbase-notification backendbase-notification

git clone https://${GITHUB_TOKEN}@github.com/agave/backend-base.git
cd backend-base

chmod +x services/api/scripts/startup.integration.sh
chmod +x services/user/scripts/startup.integration.sh

../scripts/torus run -e travis -s travis --project backend -- \
		docker-compose -f docker-compose.yml \
                    -f docker-compose.dev.yml \
                		-f services/api/docker-compose.dev.yml \
                		-f docker-compose.integration.yml up -d api
