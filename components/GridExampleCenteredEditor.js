import React from 'react'
import { Grid, Image,Input,Button,Segment,Divider } from 'semantic-ui-react'

const GridExampleCenteredEditor = () => (
    <Grid centered columns={3}>
        <Grid.Column padded>


            <Input fluid placeholder='Username' />
            <Input fluid placeholder='Password' type='Password'/>
            <Input fluid placeholder='email'/>
            <Input fluid placeholder='Mobile'/>
            <Segment padded>
                <Button primary fluid>Login</Button>
                <Divider horizontal>Or</Divider>
                <Button secondary fluid>Sign Up Now</Button>
            </Segment>


        </Grid.Column>
    </Grid>)


export default GridExampleCenteredEditor