import logo from './logo.svg';
import './App.css';

function App() {
  let hash = 'OTk0OTczYzRjM2Y5MWU3NTFmMDVkZDY1MDUxMGZkMWQ=';
  let key = atob(hash);

  let url = 'https://api.openweathermap.org/data/2.5/weather?id=2643743&units=metric&appid=' + key;

  fetch(url).then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data);

    // City
    document.getElementById('city-name').innerHTML = data.name + ', ' + data.sys.country;
    document.getElementById('city-temp').innerHTML = 'Temperature: ' + data.main.temp + '&deg;';


    // Wind
    document.getElementById('wind-degrees').innerHTML = 'Direction: ' + data.wind.deg + '&deg;';
    document.getElementById('wind-speed').innerHTML = 'Speed: ' + data.wind.speed + ' meter/sec';
  });


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Weather Site</h1>
      </header>

      <div className="App-content">
        <div className='round-box' id='city'>
          <h1 className='box-header'>Weather</h1>
          <h2 className='box-content' id='city-name'> </h2>
          <h2 className='box-content' id='city-temp'> </h2>

        </div>


        <div className='round-box' id='wind'>
          <h1 className='box-header'>Wind</h1>
          <h2 className='box-content' id='wind-degrees'> </h2>
          <h2 className='box-content' id='wind-speed'> </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
