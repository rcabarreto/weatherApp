const React = require('react');

const WeatherError = React.createClass({
  render: function () {
    return (
      <main id="errorContainer" role="loader" className="inner cover hide">
        <h1 className="cover-heading">Oops... something went wrong!</h1>
        <p id="errorMessage" className="lead"></p>
      </main>
    )
  }
});

module.exports = WeatherError;