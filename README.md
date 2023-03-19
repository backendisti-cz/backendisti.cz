# backendisti.cz

[docker-compose]: https://docs.docker.com/compose/

This project contains *backendisti.cz*. It is a web static website.

## Running locally

A webserver serving the website is started by `docker-compose`. You need just Docker installed on your machine.

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
pages on http://localhost:5080. Container is serving web path of the project (i.e. `./web`).

## Deployment

Please compile LESS files by yourself before pushing to `master` branch.
 
Deployment is automated using GitHub Actions, and the website is hosted using Cloudflare pages.
Each `git push` to `master` branch triggers a workflow. The workflow builds the project and deploys static website to the server.
