# Tiny Weather App #

## Description

This is a very small Weather application built with React just to show of some of my skills as a Fullstack Web developer.

This little app was built using React front-end. When you load the app, it'll get the location from your web browser, fetch location information from LocationIQ and then fetches the weather from OpenWeatherMap.


### Installing

First, download the project, then cd into the project and install dependencies.

```
$ git clone https://github.com/rcabarreto/weatherApp.git weatherApp/
$ cd weatherApp/
$ yarn install
```


### Configuring

You need to configure some parameters for the application to work properly. First you need to have a valid LocationIQ api key.

You can get more information here: https://locationiq.com/

You'll also need a valid key for the OpenWeatherMap API, more information here: https://openweathermap.org/api 

Once you have both API Keys, you can create a .env file on the root folder. The env file will look like this:

```
NODE_ENV=development
WEATHER_API_KEY=[YOUR WEATHER API KEY]
GEOCODE_API_KEY=[YOUR GEOCODE API KEY]
```

Once the .env file is in place, just run:

```
$ yarn start
```

After you start the application, just open you prefered web browser and go to:

```
localhost:1234
```


### Prerequisites

You need to have Node installed to run this project.

```
$ cd ~
$ curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
$ sudo apt-get install nodejs
```

Check installation

```
$ node -v
```

```
Output
v10.0.0
```


## Built With

### Front-end
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Bootstrap 4](https://getbootstrap.com/docs/3.3/)
* [Babel](https://babeljs.io/)
* [Parcel](https://parceljs.org/)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details