docker run -d -v /var/run/docker.sock:/var/run/docker.sock -v $PWD/traefik.toml:/traefik.toml -p 80:80 -l traefik.frontend.rule=Host:monitor.labo.res.ch -l traefik.port=8080 --network res_http_lab_network --name traefik_rp traefik:2.2.1