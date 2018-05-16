const React = require('react');

const WeatherError = React.createClass({
  render: function () {

    let error = this.props.error;

    return (
      <main id="errorContainer" role="loader" className="inner cover">
        <h1 className="cover-heading">Oops... something went wrong!</h1>
        <p id="errorMessage" className="lead">{error.message}</p>
      </main>
    )
  }
});

module.exports = WeatherError;