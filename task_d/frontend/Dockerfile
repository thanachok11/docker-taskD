# Step 1: Build the React app
FROM node:16 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy all other application files into the container
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Serve the React app with Nginx
FROM nginx:alpine

# Copy the build output from the build stage into the nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the app
EXPOSE 80

# Run Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
