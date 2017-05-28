'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _HeaderExampleUsersIcon = require('../components/HeaderExampleUsersIcon');

var _HeaderExampleUsersIcon2 = _interopRequireDefault(_HeaderExampleUsersIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\with-apollo\\components\\Header.js';

exports.default = function (_ref) {
  var pathname = _ref.pathname;
  return _react2.default.createElement('header', {
    'data-jsx': 2280026175,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_HeaderExampleUsersIcon2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('a', { className: pathname === '/' && 'is-active', 'data-jsx': 2280026175,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'Home')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/signin', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('a', { className: pathname === '/signin' && 'is-active', 'data-jsx': 2280026175,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'signin')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/dashboard', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement('a', { className: pathname === '/dashboard' && 'is-active', 'data-jsx': 2280026175,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, 'dashboard')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/controlpanel', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('a', { className: pathname === '/controlpanel' && 'is-active', 'data-jsx': 2280026175,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'controlpanel')), _react2.default.createElement(_style2.default, {
    styleId: 2280026175,
    css: 'header[data-jsx="2280026175"] {margin-bottom: 25px;}a[data-jsx="2280026175"] {font-size: 14px;margin-right: 15px;text-decoration: none;}.is-active[data-jsx="2280026175"] {text-decoration: underline;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmdCLEFBQ0YsK0JBQ2Msb0JBQ3JCLENBQ0UsMEJBQ2UsZ0JBQ0csbUJBQ0csc0JBQ3ZCLENBQ1csbUNBQ2lCLDJCQUM1QiIsImZpbGUiOiJjb21wb25lbnRzXFxIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiRjovd2l0aC1hcG9sbG8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZGVyRXhhbXBsZVVzZXJzSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlckV4YW1wbGVVc2Vyc0ljb24nXG5cblxuZXhwb3J0IGRlZmF1bHQgKHsgcGF0aG5hbWUgfSkgPT4gKFxuICA8aGVhZGVyPlxuICAgICAgPEhlYWRlckV4YW1wbGVVc2Vyc0ljb24vPlxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy8nPlxuICAgICAgPGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy8nICYmICdpcy1hY3RpdmUnfT5Ib21lPC9hPlxuICAgIDwvTGluaz5cblxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy9zaWduaW4nPlxuICAgICAgPGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy9zaWduaW4nICYmICdpcy1hY3RpdmUnfT5zaWduaW48L2E+XG4gICAgPC9MaW5rPlxuICAgICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nL2Rhc2hib2FyZCc+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy9kYXNoYm9hcmQnICYmICdpcy1hY3RpdmUnfT5kYXNoYm9hcmQ8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBwcmVmZXRjaCBocmVmPScvY29udHJvbHBhbmVsJz5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2NvbnRyb2xwYW5lbCcgJiYgJ2lzLWFjdGl2ZSd9PmNvbnRyb2xwYW5lbDwvYT5cbiAgICAgIDwvTGluaz5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGhlYWRlciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5pcy1hY3RpdmUge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvaGVhZGVyPlxuKVxuIl19 */\n/*@ sourceURL=components\\Header.js */'
  }));
};