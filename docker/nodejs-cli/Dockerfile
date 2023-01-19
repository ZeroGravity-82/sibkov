FROM node:12-alpine

# Remove default user to avoid UID conflict
RUN deluser --remove-home node

# Create user for container
ARG HOST_USER_UID
ARG HOST_USER_GID
ENV HOST_USER_UID=${HOST_USER_UID}
ENV HOST_USER_GID=${HOST_USER_GID}
RUN addgroup -S -g ${HOST_USER_GID} notroot
RUN adduser -S -s /bin/sh -u ${HOST_USER_UID} -G notroot -D notroot
USER notroot

WORKDIR /app
