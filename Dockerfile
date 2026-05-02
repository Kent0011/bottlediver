FROM node:lts

WORKDIR /app/bottlediver

COPY ./bottlediver /app/bottlediver

RUN npm install

CMD ["sh", "-c", "REACT_APP_BASIC_USERNAME=\"$BASIC_USERNAME\" REACT_APP_BASIC_PASSWORD=\"$BASIC_PASSWORD\" yarn start"]
