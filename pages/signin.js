import App from '../components/App'
import Header from '../components/Header'
import Head from 'next/head'
import GridExampleCentered from '../components/GridExampleCentered'
import Newer from '../components/Newer'

export default (props) => (
    <App>
        <Head>
            <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header pathname={props.url.pathname} />
        
        <GridExampleCentered/>


    </App>
)