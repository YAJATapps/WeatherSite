import React from 'react';
import './App.css';
import './Wind.css';

class Wind extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            degrees: '',
            speed: ''
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            if (this.props.data.name !== undefined) {
                let data = this.props.data;
                this.setState({
                    degrees: data.wind.deg,
                    speed: data.wind.speed
                });
            }
        }
    }

    render() {
        return (
            <div className='round-box' id='wind'>
                <h1 className='box-header'>Wind</h1>
                <h2 className='box-content' id='wind-degrees'>Direction: {this.state.degrees}&deg;</h2>
                <h2 className='box-content' id='wind-speed'>Speed: {this.state.speed} meter/sec</h2>
            </div>
        );
    }
}

export default Wind;