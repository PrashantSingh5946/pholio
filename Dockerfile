FROM node:16

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN npm install --force

# Copy app source code
COPY . .

RUN npm run build

# Exports
EXPOSE 3000

CMD ["npm","start"]