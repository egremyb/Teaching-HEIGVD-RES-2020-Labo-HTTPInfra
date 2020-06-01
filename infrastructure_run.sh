#!/bin/bash
# Run traefik with two apaches and two express servers
cd docker-images/traefik-image/
docker-compose build
docker-compose up --scale apache_php=2 --scale express_animals=2 -d
