# Frontend
FROM node:14

WORKDIR /usr/src/app

COPY ./public . 

RUN npm install

EXPOSE 8080

CMD ["npx", "http-server", "-p", "8080"]