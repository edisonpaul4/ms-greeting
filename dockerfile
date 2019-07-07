FROM node:10
WORKDIR /app
COPY . /app
RUN npm install --silent
RUN npm run compile
EXPOSE 5000
CMD [ "node", "dist/app.js" ]
