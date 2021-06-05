# using the node alpine image to download necessary dependencies
FROM node:alpine AS dependency

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY ./package.json ./
RUN npm install -y

# using this image as a builder to build the application
FROM node:alpine AS builder
WORKDIR /app
COPY . .
COPY --from=dependency /app/node_modules ./node_modules
RUN npm run build

# # using this image to run the application to the client
# FROM node:alpine AS runner

# WORKDIR /app

# ENV NODE_ENV production

# # copying all the necessary modules and files to be ran in the app.
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json

# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nextjs -u 1001
# RUN chown -R nextjs:nodejs /app/.next
# USER nextjs

# # TODO: uncomment this port if its local development
# # EXPOSE 3000

CMD ["npm", "run", "start"]