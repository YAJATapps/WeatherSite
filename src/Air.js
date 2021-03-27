import React from 'react';
import './App.css';
import './Air.css';
import Utils from './Utils';

class Air extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            aqi: '',
            co: '',
            no: '',
            no2: '',
            o3: '',
            so2: '',
            pm2_5: '',
            pm10: '',
            nh3: ''
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.lat !== prevProps.lat) {
            let url = 'http://api.openweathermap.org/data/2.5/air_pollution?lat=' + this.props.lat + '&lon=' + this.props.lon + '&appid=' + Utils.apiKey();

            fetch(url).then(res => res.json()).then((result) => {
                this.setState({
                    aqi: result.list[0].main.aqi,
                    co: result.list[0].components.co,
                    no: result.list[0].components.no,
                    no2: result.list[0].components.no2,
                    o3: result.list[0].components.o3,
                    so2: result.list[0].components.so2,
                    pm2_5: result.list[0].components.pm2_5,
                    pm10: result.list[0].components.pm10,
                    nh3: result.list[0].components.nh3
                });
            });
        }
    }

    render() {
        return (
            <div className='App-child round-box' id='air' >
                <h1 className='box-header'>Air</h1>
                <h2 className='box-content'>Air quality index: {this.state.aqi}</h2>
                <h2 className='box-content'>CO: {this.state.co}</h2>
                <h2 className='box-content'>NO: {this.state.no}</h2>
                <h2 className='box-content'>NO<sub>2</sub>: {this.state.no2}</h2>
                <h2 className='box-content'>O<sub>3</sub>: {this.state.o3}</h2>
                <h2 className='box-content'>SO<sub>2</sub>: {this.state.so2}</h2>
                <h2 className='box-content'>PM 2.5: {this.state.pm2_5}</h2>
                <h2 className='box-content'>PM 10: {this.state.pm10}</h2>
                <h2 className='box-content'>NH<sub>3</sub>: {this.state.nh3}</h2>
            </div>
        );
    }
}

export default Air;