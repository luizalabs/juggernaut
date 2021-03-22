# base image
FROM node:14-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY . /app

# install and cache app dependencies
RUN npm i

RUN npm run lint

EXPOSE 3000

# start app
CMD ["npm", "start"]
