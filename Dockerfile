
FROM node:latest

ADD package.json /moustaches/package.json
RUN cd /moustaches && npm install

ADD . /moustaches
WORKDIR /moustaches

EXPOSE 3000

CMD ["npm", "start"]

