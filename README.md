# Marcos Weather App

Weather API with NodeJS (WIP)

## Purpose

The purpose of this project is to demonstrate a simple API to retrieve weather data that is used in another FE project of mine.

## Getting Started locally

### Clone Repository:
Clone this repository to your local machine:
```bash
git clone [this_branch] 
```

### Configure API Key:
Create a `.env` file exporting your `WEATHER_API_KEY` from [Weatherstack](https://weatherstack.com/).
```bash
WEATHER_API_KEY=your_api_key_here
```

### Install Dependencies:
Install project dependencies using npm:
```bash
npm install
```

### Compile TypeScript:
Compile TypeScript code into JavaScript:
```bash
npx tsc
```

### Run Server:
Start the server using nodemon:
```bash
nodemon dist/app.js
```

### Running on Container:
To run the application inside a Docker container (if you have Docker installed), use the following command:
```bash
docker run -p 3000:3000 -e WEATHER_API_KEY=[YOUR_API_KEY] --name webapi_c -v [YOUR_FULL_PATH_FOR_VOLUME_MAPPING]:/usr/src/app weather-api:v1
```

Make sure to replace [YOUR_API_KEY] with your actual Weatherstack API key and [YOUR_FULL_PATH_FOR_VOLUME_MAPPING] with the full path to your project directory. This command maps your local project directory to the /usr/src/app directory inside the container.

### Make Requests:
Perform requests by providing the desired cityName in the request body:
```bash
curl -X POST http://localhost:3000/weather -H "Content-Type: application/json" -d '{"cityName": "YourCityName"}'
```
