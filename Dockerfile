FROM node:14.16.0-alpine

## Add the wait script to the image
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

RUN apk add --no-cache --virtual .build-deps alpine-sdk python3
RUN rm -rf /var/www/sage
RUN mkdir -p /var/www/sage
WORKDIR /var/www/sage
ADD . /var/www/sage
RUN npm install

CMD npm start