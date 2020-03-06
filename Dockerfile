FROM node:13.8.0
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
RUN npm install
# Bundle app source
COPY . .
CMD [ "npm", "start" ]
