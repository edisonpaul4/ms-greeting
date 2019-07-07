FROM node:10-alpine
WORKDIR /app
COPY ./package.json /app/package.json
RUN npm install --silent
COPY ./dist /app
RUN ls
EXPOSE 5000
CMD node app.js
