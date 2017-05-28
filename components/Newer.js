

import React from 'react'
import { Card,Form,Button,Checkbox,Grid,Statistic,Icon,Image,Comment,Header,Divider } from 'semantic-ui-react'
const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]
const Newer = () => (

    <Card fluid color='violet' header='Option 1' background-color="yellow" raised >
        <Grid celled>
            <Grid.Row>
                <Grid.Column width={6}>
                    <Image src='http://res.cloudinary.com/daxd5mp1w/image/upload/v1495247810/OHPGOU0_l1vaaj.jpg' />
                </Grid.Column>
                <Grid.Column width={9}>
                    <Form>
                        <Form.Field>

                            <Form.Group widths='equal'>
                                <Form.Input label='First name' placeholder='First name' />
                                <Form.Input label='Last name' placeholder='Last name' />
                                <Form.Select label='Gender' options={options} placeholder='Gender' />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input label='Address' placeholder='First name' />
                                <Form.Input label='Contact' placeholder='Last name' />

                            </Form.Group>
                            <Form.Group widths='three'>
                                <Checkbox slider fluid label='Smoker    ' />
                                <Checkbox slider label='Chronic Disease' /> <Divider/>
                                <Checkbox slider label='Employed' />

                            </Form.Group>

                        </Form.Field>
                        <Form.Field>


                        </Form.Field>
                        <Form.Field>
                            <Form reply >
                                <label>Medical History</label>
                                <Form.TextArea />
                                <Button content='Save!' labelPosition='right' icon='edit'   color='facebook' />
                            </Form>
                            <Statistic floated>

                                <Statistic.Label>Average Time estimated is 5 minutes for every patient</Statistic.Label>
                            </Statistic>
                        </Form.Field>
                        <Button positive type='submit'>Next patient in Queue</Button>
                    </Form>
                </Grid.Column>
            </Grid.Row>


        </Grid>

        <Card.Content>


        </Card.Content>
        <Card.Content extra>
            <Checkbox toggle/>
        </Card.Content>

        <Statistic.Group widths='four'>
            <Statistic color='green'>
                <Statistic.Value>22</Statistic.Value>
                <Statistic.Label>Patients</Statistic.Label>
            </Statistic>

            <Statistic color='grey'>
                <Statistic.Value text>
                    One<br />
                    Hundred
                </Statistic.Value>
                <Statistic.Label>Signups in this month</Statistic.Label>
            </Statistic>

            <Statistic color='teal'>
                <Statistic.Value>

                    6

                </Statistic.Value>
                <Statistic.Label >patients seen today</Statistic.Label>
            </Statistic>

            <Statistic color='violet'>
                <Statistic.Value>

                    4

                </Statistic.Value>
                <Statistic.Label>Minutes per patient</Statistic.Label>
            </Statistic>
        </Statistic.Group>
        <Comment.Group>
            <Header as='h3' dividing><h1>Patients List</h1></Header>

            <Comment >
                <Comment.Avatar src='http://res.cloudinary.com/daxd5mp1w/image/upload/v1495250601/Untitled_2_rek00n.jpg' />
                <Comment.Content>
                    <Comment.Author as='a'>Hazem</Comment.Author>
                    <Comment.Metadata>
                        <div>Today at 5:01PM</div>
                    </Comment.Metadata>
                    <Comment.Text>is very comfortable</Comment.Text>
                    <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                </Comment.Content>
            </Comment>
            <Comment>
                <Comment.Avatar src='http://res.cloudinary.com/daxd5mp1w/image/upload/v1495250506/Untitled_1_l91vhy.jpg' />
                <Comment.Content>
                    <Comment.Author as='a'>Ahmed</Comment.Author>
                    <Comment.Metadata>
                        <div>Today at 5:42PM</div>
                    </Comment.Metadata>
                    <Comment.Text>Patient just visit us 3 times last months</Comment.Text>
                    <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                </Comment.Content>
            </Comment>

        </Comment.Group>

    </Card>

)

export default Newer

