FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx tsc

EXPOSE 3000

# local only
#ENV WEATHER_API_KEY [API_KEY]

CMD ["npx", "nodemon", "dist/app.js"]

#running docker container ex:
#docker run -p 3000:3000 -e WEATHER_API_KEY=[YOUR_API_KEY] --name webapi_c -v [YOUR_FULL_PATH_FOR_VOLUME_MAPPING]:/usr/src/app weather-api:v1
