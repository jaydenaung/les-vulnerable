# Use an older version of Node.js which might have vulnerabilities
FROM node:21.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available) for npm install
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the application on port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
