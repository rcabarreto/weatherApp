const React = require('react');

const WeatherFooter = React.createClass({
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

module.exports = WeatherFooter;