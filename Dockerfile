FROM node:12.19.0-alpine3.9 as production

COPY ./package.json ./package.json

RUN yarn install --production

COPY ./src/lib ./src/lib

COPY ./build ./build

CMD ["yarn", "start"]
