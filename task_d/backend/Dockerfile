# Use an official Node.js image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend files into the container
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Start the server (assuming your entry file is app.js or server.js)
CMD ["node", "server.js"]
