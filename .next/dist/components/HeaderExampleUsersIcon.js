'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\with-apollo\\components\\HeaderExampleUsersIcon.js';


var HeaderExampleUsersIcon = function HeaderExampleUsersIcon() {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', icon: true, textAlign: 'center', color: 'teal', __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'users', circular: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }), _react2.default.createElement(_semanticUiReact.Header.Content, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, 'Hazem Ayesh', _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }), '+972597537085')), _react2.default.createElement(_semanticUiReact.Divider, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }));
};

exports.default = HeaderExampleUsersIcon;