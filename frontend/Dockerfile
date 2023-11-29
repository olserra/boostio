# Build Stage
FROM node:21-alpine AS build
WORKDIR /app/frontend
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# Production Stage
FROM node:21-alpine AS production
WORKDIR /app/frontend
COPY --from=build /app/frontend/dist ./dist
COPY --from=build /app/frontend/package.json .
COPY --from=build /app/frontend/yarn.lock .
RUN yarn install --production
CMD ["yarn", "start"]
