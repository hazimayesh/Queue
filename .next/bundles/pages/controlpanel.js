
          window.__NEXT_REGISTER_PAGE('/controlpanel', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 1067:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(987);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(982);

var _semanticUiReact = __webpack_require__(620);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\with-apollo\\components\\PostDownvoter.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    mutation updatePost($id: ID!, $votes: Int,$active:Boolean) {\n        updatePost(id: $id, votes: $votes,active:$active) {\n            id\n            votes\n            active\n        }\n    }\n'], ['\n    mutation updatePost($id: ID!, $votes: Int,$active:Boolean) {\n        updatePost(id: $id, votes: $votes,active:$active) {\n            id\n            votes\n            active\n        }\n    }\n']);

function PostDownvoter(_ref) {
    var upvote = _ref.upvote,
        votes = _ref.votes,
        id = _ref.id,
        active = _ref.active;

    return _react2.default.createElement(_semanticUiReact.Button, { toggle: true, active: active, onClick: function onClick() {
            return upvote(id, votes - 1, !active);
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, 'Next');
}

var upvotePost = (0, _reactApollo.gql)(_templateObject);

exports.default = (0, _reactApollo.graphql)(upvotePost, {
    props: function props(_ref2) {
        var ownProps = _ref2.ownProps,
            mutate = _ref2.mutate;
        return {
            upvote: function upvote(id, votes, active) {
                return mutate({
                    variables: { id: id, votes: votes, active: active },
                    optimisticResponse: {
                        updatePost: {
                            id: ownProps.id,
                            votes: ownProps.votes - 1,
                            active: !ownProps.active
                        }
                    }
                });
            }
        };
    }
})(PostDownvoter);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "F:\\with-apollo\\components\\PostDownvoter.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "F:\\with-apollo\\components\\PostDownvoter.js"); } } })();

/***/ }),

/***/ 1068:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(94);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(91);

var _assign2 = _interopRequireDefault(_assign);

var _taggedTemplateLiteral2 = __webpack_require__(987);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(982);

var _PostUpvoter = __webpack_require__(1069);

var _PostUpvoter2 = _interopRequireDefault(_PostUpvoter);

var _PostDownvoter = __webpack_require__(1067);

var _PostDownvoter2 = _interopRequireDefault(_PostDownvoter);

var _semanticUiReact = __webpack_require__(620);

var _GridExampleCentered = __webpack_require__(894);

var _GridExampleCentered2 = _interopRequireDefault(_GridExampleCentered);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\with-apollo\\components\\PostListEditor.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query allPosts($first: Int!, $skip: Int!) {\n    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {\n      id\n      title\n      votes\n      url\n        active\n      createdAt\n    },\n    _allPostsMeta {\n      count\n    }\n  }\n'], ['\n  query allPosts($first: Int!, $skip: Int!) {\n    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {\n      id\n      title\n      votes\n      url\n        active\n      createdAt\n    },\n    _allPostsMeta {\n      count\n    }\n  }\n']);

var POSTS_PER_PAGE = 10;


function PostList(_ref) {
    var _ref$data = _ref.data,
        allPosts = _ref$data.allPosts,
        loading = _ref$data.loading,
        _allPostsMeta = _ref$data._allPostsMeta,
        loadMorePosts = _ref.loadMorePosts;

    if (allPosts && allPosts.length) {
        var areMorePosts = allPosts.length < _allPostsMeta.count;
        return _react2.default.createElement('section', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 12
            }
        }, _react2.default.createElement(_semanticUiReact.Grid, { container: true, relaxed: true, columns: 3, __source: {
                fileName: _jsxFileName,
                lineNumber: 13
            }
        }, allPosts.map(function (post, index) {
            return _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, _react2.default.createElement(_semanticUiReact.Card, { key: post.id, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement(_semanticUiReact.Image, { src: post.url, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }), _react2.default.createElement(_semanticUiReact.Card.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, post.title), _react2.default.createElement(_semanticUiReact.Card.Meta, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, _react2.default.createElement('span', { className: 'date', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, 'Joined in 2015')), _react2.default.createElement(_semanticUiReact.Card.Description, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement(_PostDownvoter2.default, { votes: post.votes, id: post.id, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }))), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement(_semanticUiReact.Statistic, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement(_semanticUiReact.Statistic.Label, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, 'Queue'), _react2.default.createElement(_semanticUiReact.Statistic.Value, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, post.votes))))));
        })), areMorePosts ? _react2.default.createElement('button', { onClick: function onClick() {
                return loadMorePosts();
            }, __source: {
                fileName: _jsxFileName,
                lineNumber: 53
            }
        }, ' ', loading ? 'Loading...' : 'Show More', ' ') : '');
    }
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 58
        }
    }, 'Loading');
}

var allPosts = (0, _reactApollo.gql)(_templateObject);

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
exports.default = (0, _reactApollo.graphql)(allPosts, {
    options: {
        variables: {
            skip: 0,
            first: POSTS_PER_PAGE
        },
        pollInterval: 2000
    },
    props: function props(_ref2) {
        var data = _ref2.data;
        return {
            data: data,
            loadMorePosts: function loadMorePosts() {
                return data.fetchMore({

                    updateQuery: function updateQuery(previousResult, _ref3) {
                        var fetchMoreResult = _ref3.fetchMoreResult;

                        if (!fetchMoreResult) {
                            return previousResult;
                        }
                        return (0, _assign2.default)({}, previousResult, {
                            // Append the new posts results to the old one
                            allPosts: [].concat((0, _toConsumableArray3.default)(fetchMoreResult.allPosts))
                        });
                    }
                });
            }
        };
    }
})(PostList);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "F:\\with-apollo\\components\\PostListEditor.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "F:\\with-apollo\\components\\PostListEditor.js"); } } })();

/***/ }),

/***/ 1069:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(987);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(982);

var _semanticUiReact = __webpack_require__(620);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\with-apollo\\components\\PostUpvoter.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  mutation updatePost($id: ID!, $votes: Int,$active:Boolean) {\n    updatePost(id: $id, votes: $votes,active:$active) {\n      id\n      votes\n        active\n    }\n  }\n'], ['\n  mutation updatePost($id: ID!, $votes: Int,$active:Boolean) {\n    updatePost(id: $id, votes: $votes,active:$active) {\n      id\n      votes\n        active\n    }\n  }\n']);

function PostUpvoter(_ref) {
  var upvote = _ref.upvote,
      votes = _ref.votes,
      id = _ref.id,
      active = _ref.active;

  return _react2.default.createElement(_semanticUiReact.Button, { toggle: true, active: active, onClick: function onClick() {
      return upvote(id, votes + 1, !active);
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, 'Book Now!');
}

var upvotePost = (0, _reactApollo.gql)(_templateObject);

exports.default = (0, _reactApollo.graphql)(upvotePost, {
  props: function props(_ref2) {
    var ownProps = _ref2.ownProps,
        mutate = _ref2.mutate;
    return {
      upvote: function upvote(id, votes, active) {
        return mutate({
          variables: { id: id, votes: votes, active: active },
          optimisticResponse: {
            updatePost: {
              id: ownProps.id,
              votes: ownProps.votes + 1,
              active: !ownProps.active
            }
          }
        });
      }
    };
  }
})(PostUpvoter);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "F:\\with-apollo\\components\\PostUpvoter.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "F:\\with-apollo\\components\\PostUpvoter.js"); } } })();

/***/ }),

/***/ 1070:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(94);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(91);

var _assign2 = _interopRequireDefault(_assign);

var _taggedTemplateLiteral2 = __webpack_require__(987);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(982);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\with-apollo\\components\\Submit.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  mutation createPost($title: String!, $url: String!) {\n    createPost(title: $title, url: $url) {\n      id\n      title\n      votes\n      url\n      createdAt\n    }\n  }\n'], ['\n  mutation createPost($title: String!, $url: String!) {\n    createPost(title: $title, url: $url) {\n      id\n      title\n      votes\n      url\n      createdAt\n    }\n  }\n']);

function Submit(_ref) {
  var createPost = _ref.createPost;

  function handleSubmit(e) {
    e.preventDefault();

    var title = e.target.elements.title.value;
    var url = e.target.elements.url.value;

    if (title === '' || url === '') {
      window.alert('Both fields are required.');
      return false;
    }

    // prepend http if missing from url
    if (!url.match(/^[a-zA-Z]+:\/\//)) {
      url = 'http://' + url;
    }

    createPost(title, url);

    // reset form
    e.target.elements.title.value = '';
    e.target.elements.url.value = '';
  }

  return _react2.default.createElement('form', { onSubmit: handleSubmit, __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, 'Submit'), _react2.default.createElement('input', { placeholder: 'title', name: 'title', __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), _react2.default.createElement('input', { placeholder: 'url', name: 'url', __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), _react2.default.createElement('button', { type: 'submit', __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, 'Submit'));
}

var createPost = (0, _reactApollo.gql)(_templateObject);

exports.default = (0, _reactApollo.graphql)(createPost, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      createPost: function createPost(title, url) {
        return mutate({
          variables: { title: title, url: url },
          updateQueries: {
            allPosts: function allPosts(previousResult, _ref3) {
              var mutationResult = _ref3.mutationResult;

              var newPost = mutationResult.data.createPost;
              return (0, _assign2.default)({}, previousResult, {
                // Append the new post
                allPosts: [newPost].concat((0, _toConsumableArray3.default)(previousResult.allPosts))
              });
            }
          }
        });
      }
    };
  }
})(Submit);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "F:\\with-apollo\\components\\Submit.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "F:\\with-apollo\\components\\Submit.js"); } } })();

/***/ }),

/***/ 1071:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initApollo;

var _reactApollo = __webpack_require__(982);

var _isomorphicFetch = __webpack_require__(1053);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = _isomorphicFetch2.default;
}

function create(initialState) {
  return new _reactApollo.ApolloClient({
    initialState: initialState,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    networkInterface: (0, _reactApollo.createNetworkInterface)({
      uri: 'https://api.graph.cool/simple/v1/cj2twy8m8qru90179c4hdpdpw' })

  });
}

function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "F:\\with-apollo\\lib\\initApollo.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "F:\\with-apollo\\lib\\initApollo.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56), __webpack_require__(61)))

/***/ }),

/***/ 1072:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(93);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(82);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(982);

var _initApollo = __webpack_require__(1071);

var _initApollo2 = _interopRequireDefault(_initApollo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\with-apollo\\lib\\withData.js';

exports.default = function (ComposedComponent) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    (0, _inherits3.default)(WithData, _React$Component);

    (0, _createClass3.default)(WithData, null, [{
      key: 'getInitialProps',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
          var serverState, composedInitialProps, apollo, url, app, state;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  serverState = {};

                  // Evaluate the composed component's getInitialProps()

                  composedInitialProps = {};

                  if (!ComposedComponent.getInitialProps) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 5;
                  return ComposedComponent.getInitialProps(ctx);

                case 5:
                  composedInitialProps = _context.sent;

                case 6:
                  if (process.browser) {
                    _context.next = 14;
                    break;
                  }

                  apollo = (0, _initApollo2.default)();
                  // Provide the `url` prop data in case a graphql query uses it

                  url = { query: ctx.query, pathname: ctx.pathname };

                  // Run all graphql queries

                  app = _react2.default.createElement(_reactApollo.ApolloProvider, { client: apollo, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 31
                    }
                  }, _react2.default.createElement(ComposedComponent, (0, _extends3.default)({ url: url }, composedInitialProps, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 32
                    }
                  })));
                  _context.next = 12;
                  return (0, _reactApollo.getDataFromTree)(app);

                case 12:

                  // Extract query data from the Apollo's store
                  state = apollo.getInitialState();

                  serverState = {
                    apollo: { // Make sure to only include Apollo's data state
                      data: state.data
                    }
                  };

                case 14:
                  return _context.abrupt('return', (0, _extends3.default)({
                    serverState: serverState
                  }, composedInitialProps));

                case 15:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function WithData(props) {
      (0, _classCallCheck3.default)(this, WithData);

      var _this = (0, _possibleConstructorReturn3.default)(this, (WithData.__proto__ || (0, _getPrototypeOf2.default)(WithData)).call(this, props));

      _this.apollo = (0, _initApollo2.default)(_this.props.serverState);
      return _this;
    }

    (0, _createClass3.default)(WithData, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(_reactApollo.ApolloProvider, { client: this.apollo, __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, _react2.default.createElement(ComposedComponent, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        })));
      }
    }]);

    return WithData;
  }(_react2.default.Component), _class.displayName = 'WithData(' + ComposedComponent.displayName + ')', _class.propTypes = {
    serverState: _propTypes2.default.object.isRequired
  }, _temp;
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "F:\\with-apollo\\lib\\withData.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "F:\\with-apollo\\lib\\withData.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56)))

/***/ }),

/***/ 1079:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(893);

var _App2 = _interopRequireDefault(_App);

var _Header = __webpack_require__(895);

var _Header2 = _interopRequireDefault(_Header);

var _Submit = __webpack_require__(1070);

var _Submit2 = _interopRequireDefault(_Submit);

var _PostListEditor = __webpack_require__(1068);

var _PostListEditor2 = _interopRequireDefault(_PostListEditor);

var _withData = __webpack_require__(1072);

var _withData2 = _interopRequireDefault(_withData);

var _CardExampleCard = __webpack_require__(1080);

var _CardExampleCard2 = _interopRequireDefault(_CardExampleCard);

var _head = __webpack_require__(199);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "F:\\with-apollo\\pages\\controlpanel.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "F:\\with-apollo\\pages\\controlpanel.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/controlpanel")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 1080:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(620);

var _PostUpvoter = __webpack_require__(1069);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "F:\\with-apollo\\components\\CardExampleCard.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "F:\\with-apollo\\components\\CardExampleCard.js"); } } })();

/***/ }),

/***/ 1081:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1079);


/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "F:\\with-apollo\\components\\App.js";

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, children);
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "F:\\with-apollo\\components\\App.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "F:\\with-apollo\\components\\App.js"); } } })();

/***/ }),

/***/ 894:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(620);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "F:\\with-apollo\\components\\GridExampleCentered.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "F:\\with-apollo\\components\\GridExampleCentered.js"); } } })();

/***/ }),

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(975);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(892);

var _link2 = _interopRequireDefault(_link);

var _HeaderExampleUsersIcon = __webpack_require__(896);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "F:\\with-apollo\\components\\Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "F:\\with-apollo\\components\\Header.js"); } } })();

/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(620);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "F:\\with-apollo\\components\\HeaderExampleUsersIcon.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "F:\\with-apollo\\components\\HeaderExampleUsersIcon.js"); } } })();

/***/ })

},[1081]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGNvbnRyb2xwYW5lbC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdERvd252b3Rlci5qcz82OGY5NGMwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdExpc3RFZGl0b3IuanM/NjhmOTRjMCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RVcHZvdGVyLmpzPzY4Zjk0YzAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdWJtaXQuanM/NjhmOTRjMCIsIndlYnBhY2s6Ly8vLi9saWIvaW5pdEFwb2xsby5qcz82OGY5NGMwIiwid2VicGFjazovLy8uL2xpYi93aXRoRGF0YS5qcz82OGY5NGMwIiwid2VicGFjazovLy8uL3BhZ2VzL2NvbnRyb2xwYW5lbC5qcz82OGY5NGMwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyZEV4YW1wbGVDYXJkLmpzPzY4Zjk0YzAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAuanM/NjhmOTRjMCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWRFeGFtcGxlQ2VudGVyZWQuanM/NjhmOTRjMCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz83MmIxMDU5Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyRXhhbXBsZVVzZXJzSWNvbi5qcz83MmIxMDU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdxbCwgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuZnVuY3Rpb24gUG9zdERvd252b3RlciAoeyB1cHZvdGUsIHZvdGVzLCBpZCxhY3RpdmUgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxCdXR0b24gdG9nZ2xlIGFjdGl2ZT17YWN0aXZlfSBvbkNsaWNrPXsoKSA9PiB1cHZvdGUoaWQsIHZvdGVzIC0gMSwhYWN0aXZlKX0+XG4gICAgICAgICAgICBOZXh0XG5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgKVxufVxuXG5jb25zdCB1cHZvdGVQb3N0ID0gZ3FsYFxuICAgIG11dGF0aW9uIHVwZGF0ZVBvc3QoJGlkOiBJRCEsICR2b3RlczogSW50LCRhY3RpdmU6Qm9vbGVhbikge1xuICAgICAgICB1cGRhdGVQb3N0KGlkOiAkaWQsIHZvdGVzOiAkdm90ZXMsYWN0aXZlOiRhY3RpdmUpIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB2b3Rlc1xuICAgICAgICAgICAgYWN0aXZlXG4gICAgICAgIH1cbiAgICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwodXB2b3RlUG9zdCwge1xuICAgIHByb3BzOiAoeyBvd25Qcm9wcywgbXV0YXRlIH0pID0+ICh7XG4gICAgICAgIHVwdm90ZTogKGlkLCB2b3RlcyxhY3RpdmUpID0+IG11dGF0ZSh7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IHsgaWQsIHZvdGVzLGFjdGl2ZSB9LFxuICAgICAgICAgICAgb3B0aW1pc3RpY1Jlc3BvbnNlOiB7XG4gICAgICAgICAgICAgICAgdXBkYXRlUG9zdDoge1xuICAgICAgICAgICAgICAgICAgICBpZDogb3duUHJvcHMuaWQsXG4gICAgICAgICAgICAgICAgICAgIHZvdGVzOiBvd25Qcm9wcy52b3RlcyAtIDEsXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTohb3duUHJvcHMuYWN0aXZlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59KShQb3N0RG93bnZvdGVyKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qb3N0RG93bnZvdGVyLmpzIiwiaW1wb3J0IHsgZ3FsLCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xyXG5pbXBvcnQgUG9zdFVwdm90ZXIgZnJvbSAnLi9Qb3N0VXB2b3RlcidcclxuaW1wb3J0IFBvc3REb3dudm90ZXIgZnJvbSAnLi9Qb3N0RG93bnZvdGVyJ1xyXG5pbXBvcnQgeyBDYXJkLCBJY29uLCBJbWFnZSxCdXR0b24sU3RhdGlzdGljLEdyaWQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuY29uc3QgUE9TVFNfUEVSX1BBR0UgPSAxMFxyXG5pbXBvcnQgR3JpZEV4YW1wbGVDZW50ZXJlZCBmcm9tICcuLi9jb21wb25lbnRzL0dyaWRFeGFtcGxlQ2VudGVyZWQnXHJcblxyXG5mdW5jdGlvbiBQb3N0TGlzdCAoeyBkYXRhOiB7IGFsbFBvc3RzLCBsb2FkaW5nLCBfYWxsUG9zdHNNZXRhIH0sIGxvYWRNb3JlUG9zdHMgfSkge1xyXG4gICAgaWYgKGFsbFBvc3RzICYmIGFsbFBvc3RzLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IGFyZU1vcmVQb3N0cyA9IGFsbFBvc3RzLmxlbmd0aCA8IF9hbGxQb3N0c01ldGEuY291bnRcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxHcmlkICBjb250YWluZXIgcmVsYXhlZCBjb2x1bW5zPXszfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2FsbFBvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17cG9zdC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3Bvc3QudXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLk1ldGE+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkYXRlJz5cclxuICAgICAgICAgIEpvaW5lZCBpbiAyMDE1XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLk1ldGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3REb3dudm90ZXIgdm90ZXM9e3Bvc3Qudm90ZXN9IGlkID0ge3Bvc3QuaWR9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXRpc3RpYz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXRpc3RpYy5MYWJlbD5RdWV1ZTwvU3RhdGlzdGljLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhdGlzdGljLlZhbHVlPntwb3N0LnZvdGVzfTwvU3RhdGlzdGljLlZhbHVlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhdGlzdGljPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIHthcmVNb3JlUG9zdHMgPyA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGxvYWRNb3JlUG9zdHMoKX0+IHtsb2FkaW5nID8gJ0xvYWRpbmcuLi4nIDogJ1Nob3cgTW9yZSd9IDwvYnV0dG9uPiA6ICcnfVxyXG5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj5cclxufVxyXG5cclxuY29uc3QgYWxsUG9zdHMgPSBncWxgXHJcbiAgcXVlcnkgYWxsUG9zdHMoJGZpcnN0OiBJbnQhLCAkc2tpcDogSW50ISkge1xyXG4gICAgYWxsUG9zdHMob3JkZXJCeTogY3JlYXRlZEF0X0RFU0MsIGZpcnN0OiAkZmlyc3QsIHNraXA6ICRza2lwKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIHZvdGVzXHJcbiAgICAgIHVybFxyXG4gICAgICAgIGFjdGl2ZVxyXG4gICAgICBjcmVhdGVkQXRcclxuICAgIH0sXHJcbiAgICBfYWxsUG9zdHNNZXRhIHtcclxuICAgICAgY291bnRcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbi8vIFRoZSBgZ3JhcGhxbGAgd3JhcHBlciBleGVjdXRlcyBhIEdyYXBoUUwgcXVlcnkgYW5kIG1ha2VzIHRoZSByZXN1bHRzXHJcbi8vIGF2YWlsYWJsZSBvbiB0aGUgYGRhdGFgIHByb3Agb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50IChQb3N0TGlzdClcclxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChhbGxQb3N0cywge1xyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICBza2lwOiAwLFxyXG4gICAgICAgICAgICBmaXJzdDogUE9TVFNfUEVSX1BBR0VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvbGxJbnRlcnZhbDoyMDAwXHJcbiAgICB9LFxyXG4gICAgcHJvcHM6ICh7IGRhdGEgfSkgPT4gKHtcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIGxvYWRNb3JlUG9zdHM6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGEuZmV0Y2hNb3JlKHtcclxuXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVRdWVyeTogKHByZXZpb3VzUmVzdWx0LCB7IGZldGNoTW9yZVJlc3VsdCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmZXRjaE1vcmVSZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzUmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2aW91c1Jlc3VsdCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBcHBlbmQgdGhlIG5ldyBwb3N0cyByZXN1bHRzIHRvIHRoZSBvbGQgb25lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFBvc3RzOiBbIC4uLmZldGNoTW9yZVJlc3VsdC5hbGxQb3N0c11cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pKFBvc3RMaXN0KVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1Bvc3RMaXN0RWRpdG9yLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ3FsLCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHtCdXR0b259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5mdW5jdGlvbiBQb3N0VXB2b3RlciAoeyB1cHZvdGUsIHZvdGVzLCBpZCxhY3RpdmUgfSkge1xuICByZXR1cm4gKFxuICAgIDxCdXR0b24gdG9nZ2xlIGFjdGl2ZT17YWN0aXZlfSBvbkNsaWNrPXsoKSA9PiB1cHZvdGUoaWQsIHZvdGVzICsgMSwhYWN0aXZlKX0+XG4gICAgICAgIEJvb2sgTm93IVxuXG4gICAgPC9CdXR0b24+XG4gIClcbn1cblxuY29uc3QgdXB2b3RlUG9zdCA9IGdxbGBcbiAgbXV0YXRpb24gdXBkYXRlUG9zdCgkaWQ6IElEISwgJHZvdGVzOiBJbnQsJGFjdGl2ZTpCb29sZWFuKSB7XG4gICAgdXBkYXRlUG9zdChpZDogJGlkLCB2b3RlczogJHZvdGVzLGFjdGl2ZTokYWN0aXZlKSB7XG4gICAgICBpZFxuICAgICAgdm90ZXNcbiAgICAgICAgYWN0aXZlXG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwodXB2b3RlUG9zdCwge1xuICBwcm9wczogKHsgb3duUHJvcHMsIG11dGF0ZSB9KSA9PiAoe1xuICAgIHVwdm90ZTogKGlkLCB2b3RlcyxhY3RpdmUpID0+IG11dGF0ZSh7XG4gICAgICB2YXJpYWJsZXM6IHsgaWQsIHZvdGVzLGFjdGl2ZSB9LFxuICAgICAgb3B0aW1pc3RpY1Jlc3BvbnNlOiB7XG4gICAgICAgIHVwZGF0ZVBvc3Q6IHtcbiAgICAgICAgICBpZDogb3duUHJvcHMuaWQsXG4gICAgICAgICAgdm90ZXM6IG93blByb3BzLnZvdGVzICsgMSxcbiAgICAgICAgICAgIGFjdGl2ZTohb3duUHJvcHMuYWN0aXZlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSkoUG9zdFVwdm90ZXIpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1Bvc3RVcHZvdGVyLmpzIiwiaW1wb3J0IHsgZ3FsLCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuXG5mdW5jdGlvbiBTdWJtaXQgKHsgY3JlYXRlUG9zdCB9KSB7XG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgbGV0IHRpdGxlID0gZS50YXJnZXQuZWxlbWVudHMudGl0bGUudmFsdWVcbiAgICBsZXQgdXJsID0gZS50YXJnZXQuZWxlbWVudHMudXJsLnZhbHVlXG5cbiAgICBpZiAodGl0bGUgPT09ICcnIHx8IHVybCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5hbGVydCgnQm90aCBmaWVsZHMgYXJlIHJlcXVpcmVkLicpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBwcmVwZW5kIGh0dHAgaWYgbWlzc2luZyBmcm9tIHVybFxuICAgIGlmICghdXJsLm1hdGNoKC9eW2EtekEtWl0rOlxcL1xcLy8pKSB7XG4gICAgICB1cmwgPSBgaHR0cDovLyR7dXJsfWBcbiAgICB9XG5cbiAgICBjcmVhdGVQb3N0KHRpdGxlLCB1cmwpXG5cbiAgICAvLyByZXNldCBmb3JtXG4gICAgZS50YXJnZXQuZWxlbWVudHMudGl0bGUudmFsdWUgPSAnJ1xuICAgIGUudGFyZ2V0LmVsZW1lbnRzLnVybC52YWx1ZSA9ICcnXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPGgxPlN1Ym1pdDwvaDE+XG4gICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9J3RpdGxlJyBuYW1lPSd0aXRsZScgLz5cbiAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj0ndXJsJyBuYW1lPSd1cmwnIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+U3VibWl0PC9idXR0b24+XG5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuY29uc3QgY3JlYXRlUG9zdCA9IGdxbGBcbiAgbXV0YXRpb24gY3JlYXRlUG9zdCgkdGl0bGU6IFN0cmluZyEsICR1cmw6IFN0cmluZyEpIHtcbiAgICBjcmVhdGVQb3N0KHRpdGxlOiAkdGl0bGUsIHVybDogJHVybCkge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICB2b3Rlc1xuICAgICAgdXJsXG4gICAgICBjcmVhdGVkQXRcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChjcmVhdGVQb3N0LCB7XG4gIHByb3BzOiAoeyBtdXRhdGUgfSkgPT4gKHtcbiAgICBjcmVhdGVQb3N0OiAodGl0bGUsIHVybCkgPT4gbXV0YXRlKHtcbiAgICAgIHZhcmlhYmxlczogeyB0aXRsZSwgdXJsIH0sXG4gICAgICB1cGRhdGVRdWVyaWVzOiB7XG4gICAgICAgIGFsbFBvc3RzOiAocHJldmlvdXNSZXN1bHQsIHsgbXV0YXRpb25SZXN1bHQgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1Bvc3QgPSBtdXRhdGlvblJlc3VsdC5kYXRhLmNyZWF0ZVBvc3RcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldmlvdXNSZXN1bHQsIHtcbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgbmV3IHBvc3RcbiAgICAgICAgICAgIGFsbFBvc3RzOiBbbmV3UG9zdCwgLi4ucHJldmlvdXNSZXN1bHQuYWxsUG9zdHNdXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KShTdWJtaXQpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1N1Ym1pdC5qcyIsImltcG9ydCB7IEFwb2xsb0NsaWVudCwgY3JlYXRlTmV0d29ya0ludGVyZmFjZSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuXG5sZXQgYXBvbGxvQ2xpZW50ID0gbnVsbFxuXG4vLyBQb2x5ZmlsbCBmZXRjaCgpIG9uIHRoZSBzZXJ2ZXIgKHVzZWQgYnkgYXBvbGxvLWNsaWVudClcbmlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gIGdsb2JhbC5mZXRjaCA9IGZldGNoXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZSAoaW5pdGlhbFN0YXRlKSB7XG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgc3NyTW9kZTogIXByb2Nlc3MuYnJvd3NlciwgLy8gRGlzYWJsZXMgZm9yY2VGZXRjaCBvbiB0aGUgc2VydmVyIChzbyBxdWVyaWVzIGFyZSBvbmx5IHJ1biBvbmNlKVxuICAgIG5ldHdvcmtJbnRlcmZhY2U6IGNyZWF0ZU5ldHdvcmtJbnRlcmZhY2Uoe1xuICAgICAgdXJpOiAnaHR0cHM6Ly9hcGkuZ3JhcGguY29vbC9zaW1wbGUvdjEvY2oydHd5OG04cXJ1OTAxNzljNGhkcGRwdycsIC8vIFNlcnZlciBVUkwgKG11c3QgYmUgYWJzb2x1dGUpXG5cbiAgICB9KSxcbiAgICAgIFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0QXBvbGxvIChpbml0aWFsU3RhdGUpIHtcbiAgLy8gTWFrZSBzdXJlIHRvIGNyZWF0ZSBhIG5ldyBjbGllbnQgZm9yIGV2ZXJ5IHNlcnZlci1zaWRlIHJlcXVlc3Qgc28gdGhhdCBkYXRhXG4gIC8vIGlzbid0IHNoYXJlZCBiZXR3ZWVuIGNvbm5lY3Rpb25zICh3aGljaCB3b3VsZCBiZSBiYWQpXG4gIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgcmV0dXJuIGNyZWF0ZShpbml0aWFsU3RhdGUpXG4gIH1cblxuICAvLyBSZXVzZSBjbGllbnQgb24gdGhlIGNsaWVudC1zaWRlXG4gIGlmICghYXBvbGxvQ2xpZW50KSB7XG4gICAgYXBvbGxvQ2xpZW50ID0gY3JlYXRlKGluaXRpYWxTdGF0ZSlcbiAgfVxuXG4gIHJldHVybiBhcG9sbG9DbGllbnRcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pbml0QXBvbGxvLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIsIGdldERhdGFGcm9tVHJlZSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBpbml0QXBvbGxvIGZyb20gJy4vaW5pdEFwb2xsbydcblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9zZWRDb21wb25lbnQgPT4ge1xuICByZXR1cm4gY2xhc3MgV2l0aERhdGEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9IGBXaXRoRGF0YSgke0NvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfSlgXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIHNlcnZlclN0YXRlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzIChjdHgpIHtcbiAgICAgIGxldCBzZXJ2ZXJTdGF0ZSA9IHt9XG5cbiAgICAgIC8vIEV2YWx1YXRlIHRoZSBjb21wb3NlZCBjb21wb25lbnQncyBnZXRJbml0aWFsUHJvcHMoKVxuICAgICAgbGV0IGNvbXBvc2VkSW5pdGlhbFByb3BzID0ge31cbiAgICAgIGlmIChDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgY29tcG9zZWRJbml0aWFsUHJvcHMgPSBhd2FpdCBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuICAgICAgfVxuXG4gICAgICAvLyBSdW4gYWxsIGdyYXBocWwgcXVlcmllcyBpbiB0aGUgY29tcG9uZW50IHRyZWVcbiAgICAgIC8vIGFuZCBleHRyYWN0IHRoZSByZXN1bHRpbmcgZGF0YVxuICAgICAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgY29uc3QgYXBvbGxvID0gaW5pdEFwb2xsbygpXG4gICAgICAgIC8vIFByb3ZpZGUgdGhlIGB1cmxgIHByb3AgZGF0YSBpbiBjYXNlIGEgZ3JhcGhxbCBxdWVyeSB1c2VzIGl0XG4gICAgICAgIGNvbnN0IHVybCA9IHtxdWVyeTogY3R4LnF1ZXJ5LCBwYXRobmFtZTogY3R4LnBhdGhuYW1lfVxuXG4gICAgICAgIC8vIFJ1biBhbGwgZ3JhcGhxbCBxdWVyaWVzXG4gICAgICAgIGNvbnN0IGFwcCA9IChcbiAgICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG99PlxuICAgICAgICAgICAgPENvbXBvc2VkQ29tcG9uZW50IHVybD17dXJsfSB7Li4uY29tcG9zZWRJbml0aWFsUHJvcHN9IC8+XG4gICAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICAgICAgKVxuICAgICAgICBhd2FpdCBnZXREYXRhRnJvbVRyZWUoYXBwKVxuXG4gICAgICAgIC8vIEV4dHJhY3QgcXVlcnkgZGF0YSBmcm9tIHRoZSBBcG9sbG8ncyBzdG9yZVxuICAgICAgICBjb25zdCBzdGF0ZSA9IGFwb2xsby5nZXRJbml0aWFsU3RhdGUoKVxuXG4gICAgICAgIHNlcnZlclN0YXRlID0ge1xuICAgICAgICAgIGFwb2xsbzogeyAvLyBNYWtlIHN1cmUgdG8gb25seSBpbmNsdWRlIEFwb2xsbydzIGRhdGEgc3RhdGVcbiAgICAgICAgICAgIGRhdGE6IHN0YXRlLmRhdGFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2VydmVyU3RhdGUsXG4gICAgICAgIC4uLmNvbXBvc2VkSW5pdGlhbFByb3BzXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcylcbiAgICAgIHRoaXMuYXBvbGxvID0gaW5pdEFwb2xsbyh0aGlzLnByb3BzLnNlcnZlclN0YXRlKVxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXt0aGlzLmFwb2xsb30+XG4gICAgICAgICAgPENvbXBvc2VkQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3dpdGhEYXRhLmpzIiwiaW1wb3J0IEFwcCBmcm9tICcuLi9jb21wb25lbnRzL0FwcCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcclxuaW1wb3J0IFN1Ym1pdCBmcm9tICcuLi9jb21wb25lbnRzL1N1Ym1pdCdcclxuaW1wb3J0IFBvc3RMaXN0RWRpdG9yIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdExpc3RFZGl0b3InXHJcbmltcG9ydCB3aXRoRGF0YSBmcm9tICcuLi9saWIvd2l0aERhdGEnXHJcbmltcG9ydCBDYXJkRXhhbXBsZUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkRXhhbXBsZUNhcmQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKChwcm9wcykgPT4gKFxyXG4gICAgPEFwcD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPScvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zZW1hbnRpYy11aS8yLjIuMi9zZW1hbnRpYy5taW4uY3NzJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxIZWFkZXIgcGF0aG5hbWU9e3Byb3BzLnVybC5wYXRobmFtZX0gLz5cclxuXHJcbiAgICAgICAgPFBvc3RMaXN0RWRpdG9yIC8+XHJcbiAgICA8L0FwcD5cclxuKSlcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY29udHJvbHBhbmVsLmpzP2VudHJ5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FyZCwgSWNvbiwgSW1hZ2UsQnV0dG9uLFN0YXRpc3RpYyB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IFBvc3RVcHZvdGVyIGZyb20gJy4vUG9zdFVwdm90ZXInXG5cbmNsYXNzIENhcmRFeGFtcGxlQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKXtcblxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8Q2FyZCBjb2xvcj1cInZpb2xldFwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3RoaXMucHJvcHMudXJsfSAvPlxuICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2RhdGUnPlxuICAgICAgICAgIEpvaW5lZCBpbiAyMDE1XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLk1ldGE+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RVcHZvdGVyLz5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XG4gICAgICAgICAgICAgICAgICAgIDxhID5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXRpc3RpYz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhdGlzdGljLkxhYmVsPlF1ZXVlPC9TdGF0aXN0aWMuTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXRpc3RpYy5WYWx1ZT57dGhpcy5wcm9wcy52b3Rlc308L1N0YXRpc3RpYy5WYWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhdGlzdGljPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgICAgIDwvQ2FyZD4pXG4gICAgfX1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZEV4YW1wbGVDYXJkXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9DYXJkRXhhbXBsZUNhcmQuanMiLCJleHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxtYWluPlxuICAgIHtjaGlsZHJlbn1cblxuICA8L21haW4+XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0FwcC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgR3JpZCwgSW1hZ2UsSW5wdXQsQnV0dG9uLFNlZ21lbnQsRGl2aWRlciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5cclxuY29uc3QgR3JpZEV4YW1wbGVDZW50ZXJlZCA9ICgpID0+IChcclxuICAgIDxHcmlkIGNlbnRlcmVkIGNvbHVtbnM9ezN9PlxyXG4gICAgICAgIDxHcmlkLkNvbHVtbiBwYWRkZWQ+XHJcblxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kYXhkNW1wMXcvaW1hZ2UvdXBsb2FkL3YxNDk1MTM2MjUyL09LTEc2WTBfdnVrczBlLmpwZ1wiIHNpemU9J21lZGl1bScgc2hhcGU9J2NpcmN1bGFyJyBjZW50ZXJlZCAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPElucHV0IHNpemU9J2h1Z2UnIGljb249J3VzZXJzJyBmbHVpZCBwbGFjZWhvbGRlcj0nVXNlcm5hbWUnIC8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8SW5wdXQgc2l6ZT1cImh1Z2VcIiBpY29uPSdjb250ZW50JyBmbHVpZCBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnIHR5cGU9J1Bhc3N3b3JkJy8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8SW5wdXQgc2l6ZT1cImh1Z2VcIiBpY29uPSdtYWlsIG91dGxpbmUnIGZsdWlkIHBsYWNlaG9sZGVyPSdFbWFpbCcvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPElucHV0IHNpemU9XCJodWdlXCIgaWNvbj1cIm1vYmlsZVwiZmx1aWQgcGxhY2Vob2xkZXI9J01vYmlsZScvPlxyXG5cclxuICAgICAgICAgICAgPFNlZ21lbnQgcGFkZGVkPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGZsdWlkPkxvZ2luPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciBob3Jpem9udGFsPk9yPC9EaXZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzZWNvbmRhcnkgZmx1aWQ+U2lnbiBVcCBOb3c8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9TZWdtZW50PlxyXG5cclxuXHJcbiAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgIDwvR3JpZD4pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JpZEV4YW1wbGVDZW50ZXJlZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvR3JpZEV4YW1wbGVDZW50ZXJlZC5qcyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkZXJFeGFtcGxlVXNlcnNJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyRXhhbXBsZVVzZXJzSWNvbidcblxuXG5leHBvcnQgZGVmYXVsdCAoeyBwYXRobmFtZSB9KSA9PiAoXG4gIDxoZWFkZXI+XG4gICAgICA8SGVhZGVyRXhhbXBsZVVzZXJzSWNvbi8+XG4gICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nLyc+XG4gICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnLycgJiYgJ2lzLWFjdGl2ZSd9PkhvbWU8L2E+XG4gICAgPC9MaW5rPlxuXG4gICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nL3NpZ25pbic+XG4gICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL3NpZ25pbicgJiYgJ2lzLWFjdGl2ZSd9PnNpZ25pbjwvYT5cbiAgICA8L0xpbms+XG4gICAgICA8TGluayBwcmVmZXRjaCBocmVmPScvZGFzaGJvYXJkJz5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2Rhc2hib2FyZCcgJiYgJ2lzLWFjdGl2ZSd9PmRhc2hib2FyZDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy9jb250cm9scGFuZWwnPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvY29udHJvbHBhbmVsJyAmJiAnaXMtYWN0aXZlJ30+Y29udHJvbHBhbmVsPC9hPlxuICAgICAgPC9MaW5rPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaGVhZGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgLmlzLWFjdGl2ZSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9oZWFkZXI+XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSGVhZGVyLCBJY29uLCBJbWFnZSxEaXZpZGVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcblxyXG5jb25zdCBIZWFkZXJFeGFtcGxlVXNlcnNJY29uID0gKCkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8SGVhZGVyIGFzPSdoMicgaWNvbiB0ZXh0QWxpZ249J2NlbnRlcicgY29sb3I9J3RlYWwnPlxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPSd1c2VycycgY2lyY3VsYXIgLz5cclxuICAgICAgICAgICAgPEhlYWRlci5Db250ZW50PlxyXG4gICAgICAgICAgICAgICAgSGF6ZW0gQXllc2hcclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICArOTcyNTk3NTM3MDg1XHJcbiAgICAgICAgICAgIDwvSGVhZGVyLkNvbnRlbnQ+XHJcbiAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuXHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyRXhhbXBsZVVzZXJzSWNvblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyRXhhbXBsZVVzZXJzSWNvbi5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBT0E7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUFBOztBQUNBOztBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBRkE7QUFGQTtBQUNBO0FBRkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBOztBQUFBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFJQTtBQUpBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQWFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBR0E7QUFDQTtBQWVBO0FBRUE7QUFBQTs7O0FBSUE7QUFFQTtBQUhBO0FBS0E7QUFOQTtBQU1BO0FBQUE7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFEQTtBQUtBO0FBVkE7QUFMQTtBQUNBO0FBVEE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQU9BO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFBQTs7QUFDQTs7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUZBO0FBRkE7QUFDQTtBQUZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBOzs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7OztBQUVBO0FBQ0E7QUFXQTtBQUNBO0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFEQTtBQUpBO0FBQ0E7QUFGQTtBQUZBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7O0FBR0E7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQVRBO0FBVUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7OztBQURBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFEQTtBQUFBO0FBTUE7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFYQTtBQUNBO0FBVUE7QUFYQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBWUE7QUFDQTtBQURBO0FBWkE7QUFDQTtBQURBO0FBaUJBO0FBakJBO0FBQUE7QUFrQkE7QUFDQTtBQW5CQTtBQW9CQTtBQUNBO0FBckJBO0FBQ0E7QUFzQkE7QUFDQTtBQXhCQTtBQXdCQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQXpCQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBL0JBO0FBQ0E7O0FBa0NBO0FBQUE7QUFEQTtBQUFBO0FBQ0E7QUFuQ0E7O0FBQUE7QUF5Q0E7QUFDQTtBQTFDQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBOENBO0FBOUNBO0FBQ0E7QUE2Q0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFqREE7QUFDQTs7QUFEQTtBQW9EQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFHQTtBQUhBO0FBQUE7QUF0REE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFKQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7OztBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBR0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUdBO0FBSEE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBRUE7QUFGQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7OztBQXpCQTtBQUNBO0FBZ0NBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUFBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYkE7QUFBQTtBQUFBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        