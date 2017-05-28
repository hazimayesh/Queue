import React from 'react'
import { Grid, Image,Input,Button,Segment,Divider } from 'semantic-ui-react'

const GridExampleCentered = () => (
    <Grid centered columns={3}>
        <Grid.Column padded>

            <Image src="http://res.cloudinary.com/daxd5mp1w/image/upload/v1495136252/OKLG6Y0_vuks0e.jpg" size='medium' shape='circular' centered />
            <br />
            <Input size='huge' icon='users' fluid placeholder='Username' />
            <br />
            <Input size="huge" icon='content' fluid placeholder='Password' type='Password'/>
            <br />
            <Input size="huge" icon='mail outline' fluid placeholder='Email'/>
            <br />
            <Input size="huge" icon="mobile"fluid placeholder='Mobile'/>

            <Segment padded>
                <Button primary fluid>Login</Button>
                <Divider horizontal>Or</Divider>
                <Button secondary fluid>Sign Up Now</Button>
            </Segment>


        </Grid.Column>
    </Grid>)


export default GridExampleCentered