

const WeatherApp = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Tiny Weather App',
      city: '',
      temperature: 0,
      icon: '',
      summary: ''
    };
  },
  getInitialState: function () {
    return {
      title: this.props.title,
      city: this.props.city,
      temperature: this.props.temperature,
      icon: this.props.icon,
      summary: this.props.summary
    };
  },
  getLocation: function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.loadWeatherInfo);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  },
  loadWeatherInfo: function (position) {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);

    let self = this;

    $.getJSON( "/forecast", { lat: position.coords.latitude, lgn: position.coords.longitude } )
      .done(function(json) {
        self.handleLoadWeatherInfo(json);
      })
      .fail(function( jqxhr, textStatus, error ) {
        let err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
        showError(error);
      });

  },
  handleLoadWeatherInfo: function (weatherInfo) {
    this.setState({
      city: weatherInfo.addressname,
      temperature: parseInt(weatherInfo.temperature),
      icon: weatherInfo.icon,
      summary: weatherInfo.summary
    });
    showWeather();
  },
  render: function () {
    let title = this.state.title;

    let city = this.state.city;
    let temperature = this.state.temperature;
    let icon = this.state.icon;
    let summary = this.state.summary;

    return (
      <div className={"cover-container d-flex w-100 h-100 p-3 mx-auto flex-column "+ icon}>

        <AppHeader title={title}/>

        <AppLoader/>

        <main id="errorContainer" role="loader" className="inner cover hide">
          <h1 className="cover-heading">Oops... something went wrong!</h1>
          <p id="errorMessage" className="lead"></p>
        </main>

        <WeatherInfo city={city} temperature={temperature} icon={icon} summary={summary}/>

        <AppFooter onNewTitle={this.getLocation}/>

      </div>
    );
  }
});

const AppLoader = React.createClass({
  render: function () {
    return (
      <main id="loader" role="loader" className="inner cover">
        <p id="loader" className="lead"><img src="/images/ajax-loader-white.gif"/></p>
      </main>
    )
  }
});

const AppHeader = React.createClass({
  render: function () {
    let title = this.props.title;
    return (
      <header className="masthead mb-auto">
        <div className="inner">
          <h3 className="masthead-brand">{title}</h3>
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link active" href="#">Now</a>
            <a className="nav-link" href="#">Today</a>
            <a className="nav-link" href="#">This week</a>
          </nav>
        </div>
      </header>
    )
  }
});


const WeatherInfo = React.createClass({
  render: function () {

    let city = this.props.city;
    let temperature = this.props.temperature;
    let icon = this.props.icon;
    let summary = this.props.summary;

    return (
      <main id="currentWeather" role="main" className="inner cover hide">
        <h1 id="weatherTitle" className="cover-heading">{city}</h1>
        <h4>{summary}</h4>
        <div id="currentWeather" className="metric-stat">
          <span id="weather-icon" className={"wi wi-forecast-io-"+icon} title={summary}></span>
          <span id="weather-temp" className="metric-stat-number">{temperature}°</span>
          <span id="weather-unit" className="unit">c</span>
        </div>
      </main>
    )
  }
});


const AppFooter = React.createClass({
  onClickButton: function (e) {
    e.preventDefault();
    this.props.onNewTitle({
      city: 'Canoas',
      temperature: '222',
      icon: 'chuchu',
      summary: 'Seilá'
    });
  },
  render: function () {
    return (
      <footer className="mastfoot mt-auto">
        <div className="inner">
          <p><a href="https://darksky.net/poweredby/">Powered by Dark Sky</a></p>
          <p className="lead" onClick={this.onClickButton}>
            <a href="#" className="btn btn-lg btn-secondary">Load weather</a>
          </p>
        </div>
      </footer>
    )
  }
});




ReactDOM.render(
  <WeatherApp/>,
  document.getElementById('weatherApp')
);