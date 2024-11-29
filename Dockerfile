FROM node:lts

WORKDIR /app/bottlediver

COPY ./bottlediver /app/bottlediver

RUN npm install

CMD [ "yarn", "start" ]