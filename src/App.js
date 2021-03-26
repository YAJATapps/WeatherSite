import React from 'react';
import logo from './logo.svg';
import './App.css';
import Air from './Air';
import City from './City';
import Wind from './Wind';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      lat: '',
      lon:''
    }
  }

  componentDidMount() {
    let hash = 'OTk0OTczYzRjM2Y5MWU3NTFmMDVkZDY1MDUxMGZkMWQ=';
    let key = atob(hash);

    let url = 'https://api.openweathermap.org/data/2.5/weather?id=5989045&units=metric&appid=' + key;

    fetch(url).then(res => res.json()).then((result) => {
      this.setState({
        data: result,
        lat: result.coord.lat,
        lon: result.coord.lon,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Weather Site</h1>
        </header>

        <div className="App-content">
          <City data={this.state.data} />
          <Wind data={this.state.data} />
          <Air lat={this.state.lat} lon={this.state.lon} />
        </div>
      </div>
    );
  }
}

export default App;
