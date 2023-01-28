FROM node:16

RUN npm install -g npm@latest

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm i

CMD npm start