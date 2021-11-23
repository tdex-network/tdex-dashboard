FROM node:16-bullseye-slim AS builder
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY tsconfig.json .

RUN yarn install --check-files
# Copy app files
COPY src .
COPY public .
COPY craco.config.js .

# Build the app
RUN yarn build
# Bundle static assets with nginx
FROM caddy:alpine as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/caddy/html
# Add your Caddyfile
COPY Caddyfile /etc/Caddyfile
# Expose port
EXPOSE 8080