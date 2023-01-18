FROM php:7.2-fpm-alpine

WORKDIR /app

# File permissions workaround
RUN echo http://dl-2.alpinelinux.org/alpine/edge/community/ >> /etc/apk/repositories \
    && apk --no-cache add shadow && usermod -u 1000 www-data \
