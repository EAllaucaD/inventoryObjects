# Use the official Node.js image
FROM node:16

# Create the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Installing dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port on which the application will be listening
EXPOSE 3014

# Run the application
CMD ["npm", "start"]
