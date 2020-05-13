docker build -t res/traefik_reverse_proxy .
docker run -d --name traefik_rp -p 80:80 -p 8081:8080 -v /var/run/docker.sock:/var/run/docker.sock res/traefik_reverse_proxy
docker-compose up -d --build