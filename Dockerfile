FROM node:alpine AS base

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]


FROM base AS dev
ENV NODE_ENV=development
RUN RUN yarn install
COPY . .
CMD [ "yarn", "dev" ]


FROM base AS prod
ENV NODE_ENV=production
RUN yarn install
COPY . .
RUN yarn build

CMD [ "yarn", "start" ]
