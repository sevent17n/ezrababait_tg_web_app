FROM node:alpine AS base

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]


FROM base AS dev
ENV NODE_ENV=development
RUN RUN yarn install --frozen-lockfile
COPY . .
CMD [ "yarn", "dev" ]


FROM base AS prod
ENV NODE_ENV=production
RUN yarn install --frozen-lockfile --production
COPY . .
RUN yarn build

CMD [ "yarn", "start" ]
