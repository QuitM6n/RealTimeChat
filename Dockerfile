FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./ 

RUN apk update && \
    apk add --no-cache git && \
    npm install pg && \
    npm install

COPY . .

EXPOSE 8080 

CMD [ "node", "./src/server.js" ]
