const React = require('react');

const WeatherLoader = React.createClass({
  render: function () {
    return (
      <main id="loader" role="loader" className="inner cover">
        <p id="loader" className="lead"><img src="/images/ajax-loader-white.gif"/></p>
      </main>
    )
  }
});

module.exports = WeatherLoader;