const React = require('react');

const WeatherFooter = React.createClass({
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

module.exports = WeatherFooter;