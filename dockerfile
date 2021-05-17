FROM node:12

WORKDIR /usr/src/app.ts

RUN apt-get update -y
RUN apt-get install sudo -y
RUN apt-get install curl -y

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
RUN sudo apt-get update && sudo apt-get -y install yarn

COPY package.json package.json

RUN yarn

COPY . .

CMD [ "yarn start" ]