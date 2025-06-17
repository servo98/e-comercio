FROM node:20-alpine3.19

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]