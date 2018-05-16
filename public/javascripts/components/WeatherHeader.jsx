const React = require('react');

const WeatherHeader = React.createClass({
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

module.exports = WeatherHeader;