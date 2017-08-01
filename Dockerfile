FROM node:latest
ENV TZ Asia/Shanghai

WORKDIR /code

COPY ./package.json .

RUN npm i
COPY . /code

EXPOSE 3000

ENTRYPOINT ["npm", "run", "prod"]
