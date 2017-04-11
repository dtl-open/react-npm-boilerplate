'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _randomNumberDisplay = require('./random-number-display');

Object.defineProperty(exports, 'RandomNumberDisplay', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_randomNumberDisplay).default;
  }
});

var _DisplayScreen = require('./display/DisplayScreen');

Object.defineProperty(exports, 'Display', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DisplayScreen).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }