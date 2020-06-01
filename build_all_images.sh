#!/bin/bash
# Build all docker images
docker build -t res/apache_php           docker-images/apache-php-image
docker build -t res/express_animals      docker-images/express-image
docker build -t res/apache_reverse_proxy docker-images/apache-reverse-proxy-image
