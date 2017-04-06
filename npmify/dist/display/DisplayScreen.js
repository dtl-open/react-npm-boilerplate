'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Jumbotron = require('react-bootstrap/lib/Jumbotron');

var _Jumbotron2 = _interopRequireDefault(_Jumbotron);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DisplayScreen = function DisplayScreen(_ref) {
    var text = _ref.text;


    return _react2.default.createElement(
        _Jumbotron2.default,
        { className: 'screen' },
        text
    );
}; /**
    * Created by dilunika on 5/04/17.
    */


DisplayScreen.propTypes = {
    text: _react.PropTypes.string.isRequired
};

exports.default = DisplayScreen;