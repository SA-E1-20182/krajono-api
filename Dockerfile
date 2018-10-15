FROM node:carbon-slim

# Create app directory
WORKDIR /git/krajono-api

# Install app dependencies
COPY package.json /git/krajono-api/
RUN npm install

# Bundle app source
COPY . /git/krajono-api/
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]