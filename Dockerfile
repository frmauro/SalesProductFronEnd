# stage1 as builder
FROM node:12.16.1-alpine As builder
WORKDIR /app
# copy the package.json to install dependencies
COPY package.json package-lock.json /app/
RUN npm i npm@latest -g
RUN npm install
COPY ./ /app/
ARG env=prod
RUN npm run build

#WORKDIR /usr/src/app
# Install the dependencies and make the folder
#RUN npm install && mkdir /salesproductfrontend && mv ./node_modules ./salesproductfrontend
#WORKDIR /salesproductfrontend

#RUN npm install
#COPY . .

# Build the project and copy the files
#RUN npm run ng build -- --deploy-url=/envapp/ --prod


# Estagio 2 - Será responsavel por expor a aplicação
FROM nginx:1.13
COPY --from=builder /app/dist/salesproductfrontend /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

#FROM nginx:alpine
#!/bin/sh

#COPY nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
#RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
#COPY --from=builder /salesproductfrontend/dist /usr/share/nginx/html

#EXPOSE 4200 80
#ENTRYPOINT ["nginx", "-g", "daemon off;"]

#RUN npm build --prod

#FROM nginx:1.15.8-alpine
#COPY nginx.conf /etc/nginx/nginx.conf
#COPY /dist/salesproductfrontend /usr/share/nginx/html