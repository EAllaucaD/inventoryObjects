# Use a Node base image
FROM node:16

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all the source code
COPY . .

# Exposes the port on which the application will listen
EXPOSE 3017

# Run the server
CMD ["npm", "start"]
