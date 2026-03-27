FROM node:20-alpine

WORKDIR /app

# Install deps (cached layer)
COPY package.json package-lock.json* ./
RUN npm install

# Copy app
COPY . .

# Next.js runs on 3000
EXPOSE 3000

# Force Next.js to bind to all interfaces
CMD ["npx", "next", "dev", "-H", "0.0.0.0", "-p", "3000"]