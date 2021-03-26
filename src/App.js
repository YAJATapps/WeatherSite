import React from 'react';
import logo from './logo.svg';
import './App.css';
import City from './City';
import Wind from './Wind';

class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    let hash = 'OTk0OTczYzRjM2Y5MWU3NTFmMDVkZDY1MDUxMGZkMWQ=';
    let key = atob(hash);

    let url = 'https://api.openweathermap.org/data/2.5/weather?id=2643743&units=metric&appid=' + key;

    fetch(url).then(res => res.json()).then((result) => {
      console.log(result);

      this.setState({
        data: result
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
        </div>
      </div>
    );
  }
}

export default App;
