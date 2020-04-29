FROM node:slim

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

ENV VIRTUAL_HOST=jacobrswanson.com,www.jacobrswanson.com
ENV LETSENCRYPT_HOST=jacobrswanson.com
ENV LETSENCRYPT_EMAIL=jrs40492@gmail.com

CMD [ "node", "server.js" ]

