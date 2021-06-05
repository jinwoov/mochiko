
FROM node:alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
RUN npm install -y
# RUN npm run build


CMD ["npm", "run", "start"]