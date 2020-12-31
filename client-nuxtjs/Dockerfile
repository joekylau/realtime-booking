FROM node:14.15.3-buster

WORKDIR /usr/src/nuxt-app

COPY package.json /usr/src/nuxt-app
RUN npm install
COPY . .

RUN npm run build

EXPOSE 5000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=5000

CMD ["npm", "start"]
