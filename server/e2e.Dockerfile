FROM node:18

RUN npm install -g npm@latest
RUN apt-get update && apt-get install -y
RUN apt-get install apt-utils -y postgresql-client

WORKDIR /usr/src/app

COPY package*.json ./
COPY *.sh ./
COPY ./build ./build

RUN npm ci

CMD npm run start:e2e