# The node base image 
FROM node:alpine

# change directory into the folder call /app
WORKDIR /app

# copying the file in to the /app
COPY . .

# install the node modules
RUN npm install -y

# build the project
RUN npm run build

# run the npm
ENTRYPOINT ["npm", "run", "start"]