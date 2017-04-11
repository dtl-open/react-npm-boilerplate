/**
 * Created by dilunika on 5/04/17.
 */
import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import DisplayScreen from '../display/DisplayScreen';
import '../bootstrap.min.css';
import './styles.css';

class RandomNumberDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            randomNumber: 0
        };
    }

    componentDidMount() {
        // some logic here - we only test if the method is called
    }

    render() {
        return (
            <div className="container">
                <DisplayScreen text={this.state.randomNumber + ''}/>
                <Button onClick={() => this.generateRandomNumber()} bsStyle="danger">Generate Random Number and get nothing !!!</Button>
            </div>
        )
    }

    generateRandomNumber() {

        const randomNumber = Math.floor((Math.random() * 1000000) + 1);
        this.setState({randomNumber});
    }
};

export default RandomNumberDisplay;
