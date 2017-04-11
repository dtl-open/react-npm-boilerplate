'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _DisplayScreen = require('../display/DisplayScreen');

var _DisplayScreen2 = _interopRequireDefault(_DisplayScreen);

require('../bootstrap.min.css');

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by dilunika on 5/04/17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var RandomNumberDisplay = function (_React$Component) {
    _inherits(RandomNumberDisplay, _React$Component);

    function RandomNumberDisplay(props) {
        _classCallCheck(this, RandomNumberDisplay);

        var _this = _possibleConstructorReturn(this, (RandomNumberDisplay.__proto__ || Object.getPrototypeOf(RandomNumberDisplay)).call(this, props));

        _this.state = {
            randomNumber: 0
        };
        return _this;
    }

    _createClass(RandomNumberDisplay, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // some logic here - we only test if the method is called
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(_DisplayScreen2.default, { text: this.state.randomNumber + '' }),
                _react2.default.createElement(
                    _Button2.default,
                    { onClick: function onClick() {
                            return _this2.generateRandomNumber();
                        }, bsStyle: 'danger' },
                    'Generate Random Number and get nothing !!!'
                )
            );
        }
    }, {
        key: 'generateRandomNumber',
        value: function generateRandomNumber() {

            var randomNumber = Math.floor(Math.random() * 1000000 + 1);
            this.setState({ randomNumber: randomNumber });
        }
    }]);

    return RandomNumberDisplay;
}(_react2.default.Component);

;

exports.default = RandomNumberDisplay;