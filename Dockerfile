FROM node:18

COPY . .

WORKDIR ./

ENV NODE_ENV=production

RUN npm install

RUN npm install -g next

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]
