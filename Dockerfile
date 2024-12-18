# Setting the official Node.js Image version 22 as base
FROM node:22-alpine3.20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

#Copy the rest of the application files
COPY . .

#Build the NestJS Application
RUN npm run build

#Expose the application port
EXPOSE 5000 3000

#Command to run the application
CMD ["node", "dist/main"]