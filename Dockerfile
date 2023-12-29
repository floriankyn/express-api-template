FROM node:21-alpine

# Create app directory
WORKDIR /app
COPY . /app

# Set arguments as environment variables
ARG MASTER_TOKEN_SECRET
ARG RUNPOD_API_KEY
ARG DATABASE_URL
ENV MASTER_TOKEN_SECRET=${MASTER_TOKEN_SECRET}
ENV RUNPOD_API_KEY=${RUNPOD_API_KEY}
ENV DATABASE_URL=${DATABASE_URL}

# Install dependencies
RUN npm install

# Generate Prisma client
RUN npx prisma generate

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Define the entrypoint script
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Start the application via the entrypoint script
ENTRYPOINT ["/entrypoint.sh"]