docker kill traefik-image_apache_php_1
docker kill traefik-image_express_animals_1
docker kill traefik-image_reverse-proxy_1

docker container rm traefik-image_reverse-proxy_1
docker container rm traefik-image_apache_php_1
docker container rm traefik-image_express_animals_1

docker-compose up -d --build
