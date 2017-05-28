import React from 'react'
import { Header, Icon, Image,Divider } from 'semantic-ui-react'

const HeaderExampleUsersIcon = () => (
    <div>
        <Header as='h2' icon textAlign='center' color='teal'>
            <Icon name='users' circular />
            <Header.Content>
                Hazem Ayesh
                <br/>
                +972597537085
            </Header.Content>
        </Header>
        <Divider />

    </div>
)

export default HeaderExampleUsersIcon