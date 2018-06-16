# Tiny Weather App #

## Description

This is a very small Weather application built with React and Node.js just to show of some of my skills as a Fullstack Web developer. 

This little app was built using a Node.js/Express server and a React front-end. When you load the app, it'll get the location from your web browser, fetch locale information from Google Maps API and then fetch weather info from DarkSky API.


### Installing

First, download the project, then cd into the project and install dependencies.

```
$ git clone https://github.com/rcabarreto/weatherApp.git weatherApp/
$ cd weatherApp/
$ npm install
```


### Configuring

You need to configure some parameters for the application to work properly. First you need to have a valid Google Maps API Key and access to the Maps API. 

You can get more information here: https://developers.google.com/maps/documentation/javascript/get-api-key

You'll also need a valid key for the Dark Aky API, more information here:
https://darksky.net/dev/account 

Once you have both API Keys, just run the following command to start the application.

To run the app, in Linux, you can run the following command on your console, using your personal API KEY:

```
$ export WEATHER_API_KEY=XXXXXXXXXXXXXXXXXXXXXXX
$ export MAPS_API_KEY=XXXXXXXXXXXXXXXXXXXXXXX
$ npm start
```

Or just run:

```
$ WEATHER_API_KEY=XXXXXXXXXXXXXXXXXXXXXXX MAPS_API_KEY=XXXXXXXXXXXXXXXXXXXXXXX node bin/www
```

After you start the application, just open you prefered web browser and go to:

```
localhost:3000
```


### Prerequisites

You need to have Node installed to run this project.

```
$ cd ~
$ curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh
$ sudo apt-get install nodejs
```

Check installation

```
$ node -v
```

```
Output
v8.0.0
```


## Built With

### Front-end
* [React](https://getbootstrap.com/docs/3.3/)
* [Redux](https://getbootstrap.com/docs/3.3/)
* [Bootstrap 4](https://getbootstrap.com/docs/3.3/)
* [Babel](https://babeljs.io/)
* [WebPack](https://webpack.js.org/)

### Back-end
* [Node.js](https://nodejs.org/en/about/)
* [Express.js](http://expressjs.com/pt-br/starter/installing.html)
* [Docker](https://www.docker.com/docker-community/)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details