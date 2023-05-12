FROM node:16

RUN npm install -g npm@latest
RUN apt-get update && apt-get install -y
RUN apt-get install apt-utils -y postgresql-client

WORKDIR /usr/src/app

COPY ./build ./build

COPY package*.json .

COPY *.sh .

RUN npm ci

CMD npm run start:e2e