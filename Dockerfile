FROM node:6.9.1


RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm install

copy . /app
EXPOSE 3000

CMD ["npm", "start"]
