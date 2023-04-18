FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./ 

RUN npm install 

COPY . .

EXPOSE 8070

CMD [ "node", "./src/server.js" ]


