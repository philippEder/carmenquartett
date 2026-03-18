#!/bin/bash

echo "--- Pulling latest changes from Git ---"
git pull origin master

echo "--- Rebuilding and deploying containers ---"
docker compose up -d --build

echo "--- Cleaning up old Docker images ---"
docker image prune -f

echo "--- Deployment Complete! ---"