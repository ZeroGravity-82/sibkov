FROM php:7.2-cli

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer --version=2.2.9 --quiet
RUN apt-get update && apt-get install -y unzip git \
    # extension required for OPcache
    && docker-php-ext-install opcache \
    # extension required for XDebug
    && pecl install xdebug-3.1.0 && rm -rf /tmp/pear && docker-php-ext-enable xdebug

# Install Symfony CLI
COPY --from=ghcr.io/symfony-cli/symfony-cli:5.4.21 /usr/local/bin/symfony /usr/local/bin/symfony

ENV WORKDIR /app/
WORKDIR ${WORKDIR}

# PHP configuration
COPY ./docker/php-cli/conf.d /usr/local/etc/php/conf.d

# Clean the APT cache
RUN apt-get clean && rm -rf /var/lib/apt/lists