FROM node:12

WORKDIR /var/usr/ddr6_schedule

#npm install 을 위해, package.json과 package-lock.json을 먼저 copy해둠
COPY . .

RUN npm install

COPY . /app

CMD ["npm", "start"]
