# Use the Node.js version 18 image based on Alpine Linux as the base image
FROM node:18-alpine

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the package.json file from the local directory to the working directory of the container
COPY package.json .

# Run the npm install command to install the dependencies defined in package.json
RUN npm install

# Copy all files present in the local directory (excluding package.json) to the working directory of the container
COPY . .

# Expose port 3000 of the container, making the application available on this port
EXPOSE 3000

# Define the default command to run when the container is started
CMD ["npm", "start"]