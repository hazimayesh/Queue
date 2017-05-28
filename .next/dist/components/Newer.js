'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\with-apollo\\components\\Newer.js';

var options = [{ key: 'm', text: 'Male', value: 'male' }, { key: 'f', text: 'Female', value: 'female' }];
var Newer = function Newer() {
    return _react2.default.createElement(_semanticUiReact.Card, { fluid: true, color: 'violet', header: 'Option 1', 'background-color': 'yellow', raised: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement(_semanticUiReact.Grid, { celled: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement(_semanticUiReact.Image, { src: 'http://res.cloudinary.com/daxd5mp1w/image/upload/v1495247810/OHPGOU0_l1vaaj.jpg', __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    })), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 9, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, _react2.default.createElement(_semanticUiReact.Form.Input, { label: 'First name', placeholder: 'First name', __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }), _react2.default.createElement(_semanticUiReact.Form.Input, { label: 'Last name', placeholder: 'Last name', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }), _react2.default.createElement(_semanticUiReact.Form.Select, { label: 'Gender', options: options, placeholder: 'Gender', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    })), _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }, _react2.default.createElement(_semanticUiReact.Form.Input, { label: 'Address', placeholder: 'First name', __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }), _react2.default.createElement(_semanticUiReact.Form.Input, { label: 'Contact', placeholder: 'Last name', __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    })), _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'three', __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, _react2.default.createElement(_semanticUiReact.Checkbox, { slider: true, fluid: true, label: 'Smoker    ', __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }), _react2.default.createElement(_semanticUiReact.Checkbox, { slider: true, label: 'Chronic Disease', __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }), ' ', _react2.default.createElement(_semanticUiReact.Divider, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }), _react2.default.createElement(_semanticUiReact.Checkbox, { slider: true, label: 'Employed', __source: {
            fileName: _jsxFileName,
            lineNumber: 34
        }
    }))), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 39
        }
    }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 43
        }
    }, _react2.default.createElement(_semanticUiReact.Form, { reply: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 44
        }
    }, _react2.default.createElement('label', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 45
        }
    }, 'Medical History'), _react2.default.createElement(_semanticUiReact.Form.TextArea, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 46
        }
    }), _react2.default.createElement(_semanticUiReact.Button, { content: 'Save!', labelPosition: 'right', icon: 'edit', color: 'facebook', __source: {
            fileName: _jsxFileName,
            lineNumber: 47
        }
    })), _react2.default.createElement(_semanticUiReact.Statistic, { floated: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    }, _react2.default.createElement(_semanticUiReact.Statistic.Label, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 51
        }
    }, 'Average Time estimated is 5 minutes for every patient'))), _react2.default.createElement(_semanticUiReact.Button, { positive: true, type: 'submit', __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    }, 'Next patient in Queue'))))), _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 62
        }
    }), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 66
        }
    }, _react2.default.createElement(_semanticUiReact.Checkbox, { toggle: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 67
        }
    })), _react2.default.createElement(_semanticUiReact.Statistic.Group, { widths: 'four', __source: {
            fileName: _jsxFileName,
            lineNumber: 70
        }
    }, _react2.default.createElement(_semanticUiReact.Statistic, { color: 'green', __source: {
            fileName: _jsxFileName,
            lineNumber: 71
        }
    }, _react2.default.createElement(_semanticUiReact.Statistic.Value, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 72
        }
    }, '22'), _react2.default.createElement(_semanticUiReact.Statistic.Label, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 73
        }
    }, 'Patients')), _react2.default.createElement(_semanticUiReact.Statistic, { color: 'grey', __source: {
            fileName: _jsxFileName,
            lineNumber: 76
        }
    }, _react2.default.createElement(_semanticUiReact.Statistic.Value, { text: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 77
        }
    }, 'One', _react2.default.createElement('br', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 78
        }
    }), 'Hundred'), _react2.default.createElement(_semanticUiReact.Statistic.Label, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 81
        }
    }, 'Signups in this month')), _react2.default.createElement(_semanticUiReact.Statistic, { color: 'teal', __source: {
            fileName: _jsxFileName,
            lineNumber: 84
        }
    }, _react2.default.createElement(_semanticUiReact.Statistic.Value, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 85
        }
    }, '6'), _react2.default.createElement(_semanticUiReact.Statistic.Label, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 90
        }
    }, 'patients seen today')), _react2.default.createElement(_semanticUiReact.Statistic, { color: 'violet', __source: {
            fileName: _jsxFileName,
            lineNumber: 93
        }
    }, _react2.default.createElement(_semanticUiReact.Statistic.Value, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 94
        }
    }, '4'), _react2.default.createElement(_semanticUiReact.Statistic.Label, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 99
        }
    }, 'Minutes per patient'))), _react2.default.createElement(_semanticUiReact.Comment.Group, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 102
        }
    }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', dividing: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 103
        }
    }, _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 103
        }
    }, 'Patients List')), _react2.default.createElement(_semanticUiReact.Comment, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 105
        }
    }, _react2.default.createElement(_semanticUiReact.Comment.Avatar, { src: 'http://res.cloudinary.com/daxd5mp1w/image/upload/v1495250601/Untitled_2_rek00n.jpg', __source: {
            fileName: _jsxFileName,
            lineNumber: 106
        }
    }), _react2.default.createElement(_semanticUiReact.Comment.Content, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 107
        }
    }, _react2.default.createElement(_semanticUiReact.Comment.Author, { as: 'a', __source: {
            fileName: _jsxFileName,
            lineNumber: 108
        }
    }, 'Hazem'), _react2.default.createElement(_semanticUiReact.Comment.Metadata, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 109
        }
    }, _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 110
        }
    }, 'Today at 5:01PM')), _react2.default.createElement(_semanticUiReact.Comment.Text, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 112
        }
    }, 'is very comfortable'), _react2.default.createElement(_semanticUiReact.Comment.Actions, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 113
        }
    }, _react2.default.createElement(_semanticUiReact.Comment.Action, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 114
        }
    }, 'Reply')))), _react2.default.createElement(_semanticUiReact.Comment, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 118
        }
    }, _react2.default.createElement(_semanticUiReact.Comment.Avatar, { src: 'http://res.cloudinary.com/daxd5mp1w/image/upload/v1495250506/Untitled_1_l91vhy.jpg', __source: {
            fileName: _jsxFileName,
            lineNumber: 119
        }
    }), _react2.default.createElement(_semanticUiReact.Comment.Content, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 120
        }
    }, _react2.default.createElement(_semanticUiReact.Comment.Author, { as: 'a', __source: {
            fileName: _jsxFileName,
            lineNumber: 121
        }
    }, 'Ahmed'), _react2.default.createElement(_semanticUiReact.Comment.Metadata, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 122
        }
    }, _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 123
        }
    }, 'Today at 5:42PM')), _react2.default.createElement(_semanticUiReact.Comment.Text, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 125
        }
    }, 'Patient just visit us 3 times last months'), _react2.default.createElement(_semanticUiReact.Comment.Actions, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 126
        }
    }, _react2.default.createElement(_semanticUiReact.Comment.Action, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 127
        }
    }, 'Reply'))))));
};

exports.default = Newer;