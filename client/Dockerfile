FROM node:16.14-alpine

WORKDIR /client

COPY . .

RUN npm install 

EXPOSE 8080

CMD ["npm", "start"]