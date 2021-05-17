FROM node:12

WORKDIR /usr/src/app.ts

COPY . .

RUN yarn

CMD ["yarn", "start"]