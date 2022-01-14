FROM node:14.18.3

WORKDIR /app

COPY . /app

RUN npm install

CMD ["node", "index.js"]