FROM node:12

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 5000

CMD npm run start