FROM node:14.18.3

WORKDIR /app

COPY . /app

RUN npm install

#instal psql
RUN apt-get update
RUN apt-get -y install postgresql-client

#make wait-for-postgres.sh executable
RUN chmod +x wait-for-postgres.sh

CMD ["node", "index.js"]