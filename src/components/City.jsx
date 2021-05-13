import React from 'react';
import './../css/App.css';
import './../css/City.css';

// The component that displays city related weather data
class City extends React.Component {

    constructor(props) {
        super(props);

        // The states that contain different data to display
        this.state = {
            name: '',
            temp: '',
            feel: '',
            max: '',
            min: '',
            condition: ''
        };
    }

    // Update states if the data has changed
    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            if (this.props.data.name !== undefined) {
                this.setState({
                    name: this.props.data.name + ', ' + this.props.data.sys.country,
                    temp: this.props.data.main.temp,
                    feel: this.props.data.main.feels_like,
                    max: this.props.data.main.temp_max,
                    min: this.props.data.main.temp_min,
                    condition: this.props.data.weather[0].description
                });
            }
        }
    }

    // Render this component
    render() {
        return (
            <div
                className='App-child round-box'
                id='city' >
                <h1
                    className='box-header'>
                    Weather
                    </h1>
                <h2
                    className='box-content'>
                    City: {this.state.name}
                </h2>
                <h2
                    className='box-content'>
                    Temperature:  {this.state.temp}&deg;C
                    </h2>
                <h2
                    className='box-content'>
                    Feel like:  {this.state.feel}&deg;C
                    </h2>
                <h2
                    className='box-content'>
                    Maximum temperature:  {this.state.max}&deg;C
                    </h2>
                <h2
                    className='box-content'>
                    Minimum temperature:  {this.state.min}&deg;C
                    </h2>
                <h2
                    className='box-content'>
                    Condition:  {this.state.condition}
                </h2>
            </div>
        );
    }
    
}

export default City;