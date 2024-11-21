# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application's port
EXPOSE 4000

# Start the application
CMD ["npm", "start"]
