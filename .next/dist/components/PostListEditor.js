'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _PostUpvoter = require('./PostUpvoter');

var _PostUpvoter2 = _interopRequireDefault(_PostUpvoter);

var _PostDownvoter = require('./PostDownvoter');

var _PostDownvoter2 = _interopRequireDefault(_PostDownvoter);

var _semanticUiReact = require('semantic-ui-react');

var _GridExampleCentered = require('../components/GridExampleCentered');

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