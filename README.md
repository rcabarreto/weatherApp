# Tiny Weather App #

## Description

This is a very small Weather application built with React and Node.js just to show of some of my skills as a Fullstack Web developer. 

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

To run a test in text mode, you can use the command:

```
$ weatherApiKey=xxxxxxxx googleMapsApiKey=xxxxxxxxx node bin/www
```

You can also edit you local package.json file and add the API Keys there, then run:

```
$ npm start
```

After you start the application, just open you prefered web browser and go to:

```
localhost:3000
```

## Built With

* [React](https://reactjs.org/)
* [Bootstrap 4](https://getbootstrap.com)
* [Node.js](https://nodejs.org/en/about/)
* [Express.js](http://expressjs.com/pt-br/starter/installing.html)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details