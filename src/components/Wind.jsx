import React from 'react';
import './../css/App.css';
import './../css/Wind.css';

class Wind extends React.Component {

    // The component that displays wind related data
    constructor(props) {
        super(props);

        // The states that contain different data to display
        this.state = {
            degrees: '',
            speed: '',
            humidity: '',
            pressure: ''
        };
    }

    // Update states if the data has changed
    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            if (this.props.data.name !== undefined) {
                this.setState({
                    degrees: this.props.data.wind.deg,
                    speed: this.props.data.wind.speed,
                    humidity: this.props.data.main.humidity,
                    pressure: this.props.data.main.pressure
                });
            }
        }
    }

    // Render this component
    render() {
        return (
            <div
                className='App-child round-box'
                id='wind'>
                <h1
                    className='box-header'>
                    Wind
                </h1>
                <h2
                    className='box-content'>
                    Direction: {this.state.degrees}&deg;
                </h2>
                <h2
                    className='box-content'>
                    Speed: {this.state.speed} meter/sec
                </h2>
                <h2
                    className='box-content'>
                    Humidity: {this.state.humidity}%
                </h2>
                <h2
                    className='box-content'>
                    Pressure: {this.state.pressure}mb
                </h2>
            </div>
        );
    }

}

export default Wind;