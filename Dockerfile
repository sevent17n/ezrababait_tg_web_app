FROM node:alpine AS base

WORKDIR /app

COPY ["package.json", "./"]


FROM base AS dev
ENV NODE_ENV=development
RUN npm install
COPY . .

CMD [ "npm", "run", "dev" ]


FROM base AS prod
ENV NODE_ENV=production
RUN npm install
COPY . .
RUN npm run build

CMD [ "npm", "run", "start" ]