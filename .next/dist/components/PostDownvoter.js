'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _semanticUiReact = require('semantic-ui-react');

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