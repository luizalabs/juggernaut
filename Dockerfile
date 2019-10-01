# base image
FROM node:10-alpine
   
# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json

RUN npm install

EXPOSE 3000

# start app
CMD ["npm", "start"]
