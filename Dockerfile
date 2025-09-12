# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json before installing dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the React app
RUN npm run build

# runs only when the container starts. It does not execute during the image build process.
# When you start a container from this image using `docker run`, the CMD instruction is executed
# However, if a docker-compose file is used with the "command" field, then this will be overwritten
CMD ["npm", "run", "dev"]