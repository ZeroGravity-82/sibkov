
# Сайт-визитка фермы "Сибирский ковчег"
(retired sibkov.ru)

Quickstart
----------

To configure PhpStorm + Docker + Xdebug, please see this article: <https://blog.denisbondar.com/post/phpstorm_docker_xdebug/>

This project requires the Docker Compose plugin to be installed: <https://docs.docker.com/compose/install/linux/>

Run the following console commands before starting local development:
```bash
export HOST_USER_UID=$(id -u) && export HOST_USER_GID=$(id -g);
make init
```
Provide a value for Symfony "secret" parameter during initialization: <https://symfony.com/doc/current/reference/configuration/framework.html#secret>

CLI tools
---------

For convenient work with the project through Docker, use Makefile. It contains examples of how to use all the CLI tools available to you.
