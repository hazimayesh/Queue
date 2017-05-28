import { gql, graphql } from 'react-apollo'
import PostUpvoter from './PostUpvoter'
import PostDownvoter from './PostDownvoter'
import { Card, Icon, Image,Button,Statistic,Grid } from 'semantic-ui-react'
const POSTS_PER_PAGE = 10
import GridExampleCentered from '../components/GridExampleCentered'

function PostList ({ data: { allPosts, loading, _allPostsMeta }, loadMorePosts }) {
    if (allPosts && allPosts.length) {
        const areMorePosts = allPosts.length < _allPostsMeta.count
        return (
            <section>
                <Grid  container relaxed columns={3}>

                    {allPosts.map((post, index) =>

                            <Grid.Column>
                                <Card key={post.id}>
                                    <Image src={post.url} />
                                    <Card.Content>
                                        <Card.Header>
                                            {post.title}
                                        </Card.Header>
                                        <Card.Meta>
        <span className='date'>
          Joined in 2015
        </span>
                                        </Card.Meta>
                                        <Card.Description>

                                            <PostDownvoter votes={post.votes} id = {post.id} />

                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <a >

                                            <Statistic>
                                                <Statistic.Label>Queue</Statistic.Label>
                                                <Statistic.Value>{post.votes}</Statistic.Value>
                                            </Statistic>


                                        </a>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>


                    )}

                </Grid>
                {areMorePosts ? <button onClick={() => loadMorePosts()}> {loading ? 'Loading...' : 'Show More'} </button> : ''}

            </section>
        )
    }
    return <div>Loading</div>
}

const allPosts = gql`
  query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      title
      votes
      url
        active
      createdAt
    },
    _allPostsMeta {
      count
    }
  }
`

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(allPosts, {
    options: {
        variables: {
            skip: 0,
            first: POSTS_PER_PAGE
        },
        pollInterval:2000
    },
    props: ({ data }) => ({
        data,
        loadMorePosts: () => {
            return data.fetchMore({

                updateQuery: (previousResult, { fetchMoreResult }) => {
                    if (!fetchMoreResult) {
                        return previousResult
                    }
                    return Object.assign({}, previousResult, {
                        // Append the new posts results to the old one
                        allPosts: [ ...fetchMoreResult.allPosts]
                    })
                }
            })
        }
    })
})(PostList)
