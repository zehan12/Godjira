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
      - '3000:3000'
```

## Getting Started

First, run the development server:

```bash
yarn dev
```

## API Documentation

### Fetch Board API

#### Endpoint

```http
GET /api/board/fetch?boardId={boardId}&skip={skip}&take={take}
```

#### Parameters

    boardId (required): Unique identifier of the board to fetch.
    skip (required): Number of tickets to skip for pagination.
    take (required): Number of tickets to retrieve in a single API call.

### Response

```json
{
  "data": {
    "board": {
      "id": "clrut9vsz00072on8wswgup2l",
      "type": "SPRINT",
      "title": "Sprint Board January",
      "description": "January Sprint items",
      "startDate": "2024-01-26T15:42:04.341Z",
      "endDate": "2024-02-02T15:42:04.341Z"
    },
    "boardColumns": [
      {
        "id": "clrut9xqp00092on8bxwjfrsu",
        "position": 0,
        "label": "TODO",
        "boardId": "clrut9vsz00072on8wswgup2l"
      }
    ],
    "boardTickets": [
      {
        "id": "clruta28h000g2on8jw94q7zs",
        "title": "Fix home page",
        "description": "Some description",
        "assignedTo": "clrut9i3o00002on8w87bndm1",
        "reportedBy": "clrut9k1800012on8rkunl31h",
        "boardColumnId": "clrut9xqp00092on8bxwjfrsu",
        "status": "TODO",
        "boardId": "clrut9vsz00072on8wswgup2l",
        "storyPoints": 5,
        "position": 0
      }
    ]
  }
}
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
