FROM php:7.2-fpm-alpine

# Create user for container
ARG UID
ARG GID
ENV UID=${UID}
ENV GID=${GID}
RUN addgroup -S -g ${GID} symfony
RUN adduser -S -s /bin/sh -u ${UID} -G symfony -D symfony
RUN sed -i "s/user = www-data/user = symfony/g" /usr/local/etc/php-fpm.d/www.conf
RUN sed -i "s/group = www-data/group = symfony/g" /usr/local/etc/php-fpm.d/www.conf

WORKDIR /app
