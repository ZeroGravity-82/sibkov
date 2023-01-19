FROM php:7.2-fpm-alpine

# Create user for container
ARG HOST_USER_UID
ARG HOST_USER_GID
ENV HOST_USER_UID=${HOST_USER_UID}
ENV HOST_USER_GID=${HOST_USER_GID}
RUN addgroup -S -g ${HOST_USER_GID} notroot
RUN adduser -S -s /bin/sh -u ${HOST_USER_UID} -G notroot -D notroot
RUN sed -i "s/user = www-data/user = notroot/g" /usr/local/etc/php-fpm.d/www.conf
RUN sed -i "s/group = www-data/group = notroot/g" /usr/local/etc/php-fpm.d/www.conf

WORKDIR /app
