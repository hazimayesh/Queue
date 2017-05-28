import React from 'react'
import { gql, graphql } from 'react-apollo'
import {Button} from 'semantic-ui-react'

function PostDownvoter ({ upvote, votes, id,active }) {
    return (
        <Button toggle active={active} onClick={() => upvote(id, votes - 1,!active)}>
            Next

        </Button>
    )
}

const upvotePost = gql`
    mutation updatePost($id: ID!, $votes: Int,$active:Boolean) {
        updatePost(id: $id, votes: $votes,active:$active) {
            id
            votes
            active
        }
    }
`

export default graphql(upvotePost, {
    props: ({ ownProps, mutate }) => ({
        upvote: (id, votes,active) => mutate({
            variables: { id, votes,active },
            optimisticResponse: {
                updatePost: {
                    id: ownProps.id,
                    votes: ownProps.votes - 1,
                    active:!ownProps.active
                }
            }
        })
    })
})(PostDownvoter)
