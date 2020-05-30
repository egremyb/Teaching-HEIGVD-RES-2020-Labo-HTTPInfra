docker kill $(docker ps -q)
docker rm $(docker ps -a -q)

docker-compose up --scale apache_php=2 --scale express_animals=2 -d
