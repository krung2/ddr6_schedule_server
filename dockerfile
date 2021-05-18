FROM node:12

WORKDIR /var/usr/ddr6_schedule

COPY . .

RUN npm install

CMD ["npm", "start"]
