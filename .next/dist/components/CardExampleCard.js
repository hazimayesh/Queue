'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _PostUpvoter = require('./PostUpvoter');

var _PostUpvoter2 = _interopRequireDefault(_PostUpvoter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\with-apollo\\components\\CardExampleCard.js';


var CardExampleCard = function (_React$Component) {
    (0, _inherits3.default)(CardExampleCard, _React$Component);

    function CardExampleCard() {
        (0, _classCallCheck3.default)(this, CardExampleCard);

        return (0, _possibleConstructorReturn3.default)(this, (CardExampleCard.__proto__ || (0, _getPrototypeOf2.default)(CardExampleCard)).apply(this, arguments));
    }

    (0, _createClass3.default)(CardExampleCard, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_semanticUiReact.Card, { color: 'violet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }, _react2.default.createElement(_semanticUiReact.Image, { src: this.props.url, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }), _react2.default.createElement(_semanticUiReact.Card.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, this.props.title), _react2.default.createElement(_semanticUiReact.Card.Meta, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, _react2.default.createElement('span', { className: 'date', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, 'Joined in 2015')), _react2.default.createElement(_semanticUiReact.Card.Description, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, _react2.default.createElement(_PostUpvoter2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }))), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement(_semanticUiReact.Statistic, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement(_semanticUiReact.Statistic.Label, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, 'Queue'), _react2.default.createElement(_semanticUiReact.Statistic.Value, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, this.props.votes)))));
        }
    }]);

    return CardExampleCard;
}(_react2.default.Component);

exports.default = CardExampleCard;