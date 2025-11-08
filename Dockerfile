FROM node:22-alpine AS build

ARG API_URL
ARG STRATUM_URL

ENV API_URL=${API_URL}
ENV STRATUM_URL=${STRATUM_URL}

RUN apk add --no-cache python3 make g++

WORKDIR /build

COPY . .

RUN npm ci && npm run build

############################
# Docker final environment #
############################

FROM caddy:alpine AS final

EXPOSE 80
WORKDIR /var/www/html

COPY --from=build /build/dist/public-pool-ui .
COPY docker/Caddyfile.tpl /etc/Caddyfile.tpl
COPY docker/entrypoint.sh /entrypoint.sh

CMD ["/bin/sh", "/entrypoint.sh"]
