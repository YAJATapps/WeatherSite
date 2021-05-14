import React, { Component } from 'react';
import logo from './../img/logo.png';
import './../css/App.css';
import Air from './Air';
import City from './City';
import Wind from './Wind';
import Utils from './Utils';

// The website header and content
export default class App extends Component {

  constructor(props) {
    super(props);

    // The states to store weather data and the coords for latitude and longitude
    this.state = {
      data: [],
      lat: '',
      lon: ''
    }
  }

  // Load weather after component mounts
  componentDidMount() {
    // Url to get the weather data
    let url = 'https://api.openweathermap.org/data/2.5/weather?id=5989045&units=metric&appid=' + Utils.apiKey();

    // Fetch the url into states
    fetch(url).then(res => res.json()).then((result) => {
      this.setState({
        data: result,
        lat: result.coord.lat,
        lon: result.coord.lon,
      });
    });

  }

  // Render this component
  render() {
    return (
      <div
        className="App">

        <header
          className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
          />
          <h1>
            Weather Site
          </h1>
        </header>

        <div
          className="App-content">
          <City
            data={this.state.data}
          />
          <Wind
            data={this.state.data}
          />
          <Air
            lat={this.state.lat}
            lon={this.state.lon}
          />
        </div>

      </div>
    );
  }

}