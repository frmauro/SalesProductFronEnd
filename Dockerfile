#FROM node:12.16.1-alpine As builder
#WORKDIR /usr/src/app
#COPY package.json package-lock.json ./
#RUN npm install
#COPY . .
#RUN npm build --prod

FROM nginx:1.15.8-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/salesproductfrontend /usr/share/nginx/html