FROM node:18

RUN npm install -g npm@latest
RUN apt-get update && apt-get install -y
RUN apt-get install apt-utils -y postgresql-client

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm i

CMD npm run dev
