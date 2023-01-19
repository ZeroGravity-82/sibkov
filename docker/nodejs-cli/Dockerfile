FROM node:12-alpine

# Create user for container
ARG UID
ARG GID
ENV UID=${UID}
ENV GID=${GID}
RUN addgroup -S -g ${GID} symfony
RUN adduser -S -s /bin/sh -u ${UID} -G symfony -D symfony
USER symfony

WORKDIR /app
