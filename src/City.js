import React from 'react';
import './App.css';
import './City.css';

class City extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            temp: ''
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            if (this.props.data.name !== undefined) {
                let data = this.props.data;
                this.setState({
                    name: data.name + ', ' + data.sys.country,
                    temp: data.main.temp
                });
            }
        }
    }

    render() {
        return (
            <div className='round-box' id='city' >
                <h1 className='box-header'>Weather</h1>
                <h2 className='box-content' id='city-name'>City: {this.state.name}</h2>
                <h2 className='box-content' id='city-temp'>Temperature:  {this.state.temp}&deg;</h2>
            </div>
        );
    }
}

export default City;