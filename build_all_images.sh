cd docker-images/apache-php-image
docker build -t res/apache_php .

cd ..
cd express/image
docker build -t res/express_animals .

cd ..
cd apache-reverse-proxy-image
docker build -t res/apache_reverse_proxy .
