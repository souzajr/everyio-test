FROM node:16

WORKDIR /usr/src/app

ADD . .

RUN npm install -g -s --no-progress yarn && \
  yarn && \
  yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]
