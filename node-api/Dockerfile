FROM node:latest

WORKDIR /api

COPY index.js index.js

RUN yarn init -y
RUN yarn add express mysql

EXPOSE 3000

ENTRYPOINT ["node", "index.js"]