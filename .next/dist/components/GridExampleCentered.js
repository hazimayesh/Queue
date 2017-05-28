'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\with-apollo\\components\\GridExampleCentered.js';


var GridExampleCentered = function GridExampleCentered() {
    return _react2.default.createElement(_semanticUiReact.Grid, { centered: true, columns: 3, __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement(_semanticUiReact.Grid.Column, { padded: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement(_semanticUiReact.Image, { src: 'http://res.cloudinary.com/daxd5mp1w/image/upload/v1495136252/OKLG6Y0_vuks0e.jpg', size: 'medium', shape: 'circular', centered: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }), _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }), _react2.default.createElement(_semanticUiReact.Input, { size: 'huge', icon: 'users', fluid: true, placeholder: 'Username', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }), _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }), _react2.default.createElement(_semanticUiReact.Input, { size: 'huge', icon: 'content', fluid: true, placeholder: 'Password', type: 'Password', __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }), _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }), _react2.default.createElement(_semanticUiReact.Input, { size: 'huge', icon: 'mail outline', fluid: true, placeholder: 'Email', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }), _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }), _react2.default.createElement(_semanticUiReact.Input, { size: 'huge', icon: 'mobile', fluid: true, placeholder: 'Mobile', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }), _react2.default.createElement(_semanticUiReact.Segment, { padded: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, fluid: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, 'Login'), _react2.default.createElement(_semanticUiReact.Divider, { horizontal: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, 'Or'), _react2.default.createElement(_semanticUiReact.Button, { secondary: true, fluid: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, 'Sign Up Now'))));
};

exports.default = GridExampleCentered;