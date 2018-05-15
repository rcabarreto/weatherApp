

var WeatherApp = React.createClass({
  getDefaultProps: function () {
    return {
      title: "Tiny Weather App",
      message: "This is the default message"
    };
  },
  render: function () {
    var title = this.props.title;
    var message = this.props.message;

    return (
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
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

        <AppLoader/>

        <main id="errorContainer" role="loader" className="inner cover hide">
          <h1 className="cover-heading">Oops... something went wrong!</h1>
          <p id="errorMessage" className="lead"></p>
        </main>

        <main id="currentWeather" role="main" className="inner cover hide">
          <h4>Weather information for</h4>
          <h1 id="weatherTitle" className="cover-heading"></h1>

          <div id="currentWeather" className="metric-stat">
            <span id="weather-icon" title="Partly Cloudy"></span>
            <span id="weather-temp" className="metric-stat-number"></span>
            <span id="weather-unit" className="unit"></span>
          </div>

          <p className="lead">
            <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
          </p>
        </main>

        <AppFooter/>

      </div>
    );
  }
});

var AppLoader = React.createClass({
  render: function () {
    return (
      <main id="loader" role="loader" className="inner cover">
        <p id="loader" className="lead"><img src="/images/ajax-loader-white.gif"/></p>
      </main>
    )
  }
});

var AppFooter = React.createClass({
  render: function () {
    return (
      <footer className="mastfoot mt-auto">
        <div className="inner">
          <p><a href="https://darksky.net/poweredby/">Powered by Dark Sky</a></p>
        </div>
      </footer>
    )
  }
});



var appTitle = 'Tiny Weather App';
var message = 'This is my message';

ReactDOM.render(
  <WeatherApp/>,
  document.getElementById('weatherApp')
);