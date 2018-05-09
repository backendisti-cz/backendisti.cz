# backendisti.cz

[docker-compose]: https://docs.docker.com/compose/

This project contains *backendisti.cz*. It is a web static website.

## Running locally

A webserver serving the website is started by [docker-compose]. You need just [Docker] 
and [docker-compose] installed on your machine.

First thing is that you must export `$UID` variable in your shell. Otherwise processes
in containers will run as `root` and you won't be able to modify or delete files created
by this processes.

```
export UID
```

Start the environment by running
```
docker-compose up
```

It will start 1 container called `web`. It is a web server container serving static web 
pages on http://localhost:5080. Container is serving root path of the project (i.e. `.`)

Please note that container names will be a bit different actually. Each will have a prefix
based on project name which is the name of the directory `docker-compose.yml` file resides in.
And each one will have a suffix `_1` because there is just one container running.

```
user@example:~/twisto/backendisti.cz/$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                      NAMES
94b0320241fa        nginx:alpine        "nginx -g 'daemon ..."   4 days ago          Up 1 second         127.0.0.1:5080->80/tcp     backendisticz_web_1
```

Restart [docker-compose] then:

```
docker-compose down; docker-compose up
```

## Deployment

Deployment is automated using [Circle CI]. Each `git push` to `master` branch triggers a workflow.
The workflow builds the project and deploys static website to the server.
