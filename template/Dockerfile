FROM node:14-alpine

LABEL maintainer="fujia <fujia.site@foxmail.com>"

RUN apk add --no-cache curl

RUN mkdir -p /home/app

WORKDIR /home/app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --registry=https://registry.npmmirror.com/

COPY . .

RUN npm run build

ENV NODE_ENV=production \
    APP_PORT=8081

EXPOSE ${APP_PORT}

CMD ["npm", "start"]
