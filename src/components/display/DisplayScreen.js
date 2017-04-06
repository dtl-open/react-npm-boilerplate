/**
 * Created by dilunika on 5/04/17.
 */
import React, {PropTypes} from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import './styles.css';

const DisplayScreen = ({text}) => {

    return (
        <Jumbotron className="screen">
            {text}
        </Jumbotron>
    );
};

DisplayScreen.propTypes = {
    text: PropTypes.string.isRequired
};

export default DisplayScreen;