## Containerization using Docker

This project supports containerization using Docker for easy deployment and scalability. Follow the steps below to run the Next.js app in a Docker container.

### Prerequisites
- [Docker](https://www.docker.com/get-started) installed

### Steps

1. Clone the repository:

```bash
   git clone https://github.com/zehan12/Godjira/
   cd Godjira
```

2. Build the Docker image:

```bash
docker build -t godjira .
```

Run the Docker container:

```bash
    docker run -p 3000:3000 godjira
```

    Open your browser and navigate to http://localhost:3000 to view the Next.js app.


### Docker Compose (optional)

If you prefer using Docker Compose for multi-container applications, you can use the provided docker-compose.yml file:

```
docker-compose up
```

This will start the Next.js app and any required services defined in the docker-compose.yml file.



### **Dockerfile:**

Include a `Dockerfile` in the project root to define the Docker image.

```Dockerfile
# Use the official Node.js image as a base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN yarn add

# Copy the rest of the application code
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]
```

### docker-compose.yml (if applicable):

If you are using Docker Compose, include a docker-compose.yml file.

```yaml 
version: '3'
services:
  nextjs-app:
    build:
      context: .
    ports:
      - "3000:3000"
```

## Getting Started

First, run the development server:

```bash
yarn dev
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
