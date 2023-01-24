
# Сайт-визитка фермы "Сибирский ковчег"
(retired sibkov.ru)

Quickstart
----------

To configure PhpStorm + Docker + Xdebug, please see this article: <https://blog.denisbondar.com/post/phpstorm_docker_xdebug/>

This project requires the Docker Compose plugin to be installed: <https://docs.docker.com/compose/install/linux/>

Run the following console commands before starting local development:
```bash
export HOST_USER_UID=$(id -u) && export HOST_USER_GID=$(id -g)
make init
```
**Tip**: To avoid manually creating the HOST_USER_UID and HOST_USER_GID variables each time, just add their creation to the ~/.bashrc file.

During the first initialization, you will need to set a value for Symfony "secret" parameter: <https://symfony.com/doc/current/reference/configuration/framework.html#secret>

CLI tools
---------

For convenient work with the project through Docker, use Makefile. It contains examples of how to use all the CLI tools available to you.
