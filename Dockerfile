# Use an official Node runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the current directory contents to the container at /app
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define environment variables for APIs
ENV REACT_APP_API_URL_1=https://newsapi.org/v2/everything
ENV REACT_APP_API_URL_2=https://content.guardianapis.com/search
ENV REACT_APP_API_URL_3=https://api.nytimes.com/svc/search/v2/articlesearch.json

# Run the app
CMD ["npm", "start"]
