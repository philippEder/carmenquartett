# Stage 1: Build the Angular app
FROM node:22-alpine AS angbuild

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

COPY --from=angbuild /app/docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=angbuild /app/dist/*/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]