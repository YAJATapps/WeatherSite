import logo from './logo.svg';
import './App.css';

function App() {
  let hash = 'OTk0OTczYzRjM2Y5MWU3NTFmMDVkZDY1MDUxMGZkMWQ=';
  let key = atob(hash);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Weather Site</h1>
      </header>
      
        {key}
    </div>
  );
}

export default App;
