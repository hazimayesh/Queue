'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _App = require('../components/App');

var _App2 = _interopRequireDefault(_App);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Submit = require('../components/Submit');

var _Submit2 = _interopRequireDefault(_Submit);

var _PostListEditor = require('../components/PostListEditor');

var _PostListEditor2 = _interopRequireDefault(_PostListEditor);

var _withData = require('../lib/withData');

var _withData2 = _interopRequireDefault(_withData);

var _CardExampleCard = require('../components/CardExampleCard');

var _CardExampleCard2 = _interopRequireDefault(_CardExampleCard);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\with-apollo\\pages\\controlpanel.js?entry';
exports.default = (0, _withData2.default)(function (props) {
    return _react2.default.createElement(_App2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    })), _react2.default.createElement(_Header2.default, { pathname: props.url.pathname, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }), _react2.default.createElement(_PostListEditor2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }));
});