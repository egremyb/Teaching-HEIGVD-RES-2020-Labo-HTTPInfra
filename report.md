# RES Lab - HTTP Infrastructure
Arthur Bécaud, Bruno Egremy

## About the repository
[Here](https://github.com/egremyb/Teaching-HEIGVD-RES-2020-Labo-HTTPInfra) is the github repository containing our lab solution.  

------------------------ TODO -----------------------  
Show repo structure  
------------------------ TODO ------------------------

## Apache-PHP server
### Docker image creation
The docker file is the following :
```
FROM php:7.2-apache

RUN apt-get update && \
    apt-get install -y vim

COPY src/ /var/www/html/
```
The base image is the official PHP with Apache 7.2 image which is translated into this line : `FROM php:7.2-apache`.  
The `RUN` statement let us run commands like the 2 above :
- `apt-get update`
- `apt-get install -y vim`

The package list is updated with the first one and then the _vim_ application is installed.

The last line let us copy our website template from the _src_ directory into the "futur" container's _/var/www/html/_ directory which is website content location from the official php image documentation.

The template used here is [The Town](https://templatemo.com/tm-525-the-town) from [templatemo](https://templatemo.com).

### Customizing the template
------------------------ TODO ------------------------
Add final modification at the end of the lab
------------------------ TODO ------------------------


## Express.js application
### Docker image creation
The docker file is the following :
```
FROM node:12.16.3

RUN apt-get update && \
    apt-get install -y vim

COPY src /opt/app

CMD ["node", "/opt/app/index.js"]
```

The first line shows which base image is used, the official node 12.16.3 image in this case.
## Apache reverse proxy
### Docker image creation

## JQuery requests
