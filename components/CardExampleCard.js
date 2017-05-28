import React from 'react'
import { Card, Icon, Image,Button,Statistic } from 'semantic-ui-react'
import PostUpvoter from './PostUpvoter'

class CardExampleCard extends React.Component {

    render(){

        return(
            <Card color="violet">
                <Image src={this.props.url} />
                <Card.Content>
                    <Card.Header>
                        {this.props.title}
                    </Card.Header>
                    <Card.Meta>
        <span className='date'>
          Joined in 2015
        </span>
                    </Card.Meta>
                    <Card.Description>
                        <PostUpvoter/>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a >

                        <Statistic>
                            <Statistic.Label>Queue</Statistic.Label>
                            <Statistic.Value>{this.props.votes}</Statistic.Value>
                        </Statistic>

                    </a>
                </Card.Content>
            </Card>)
    }}

export default CardExampleCard