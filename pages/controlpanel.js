import App from '../components/App'
import Header from '../components/Header'
import Submit from '../components/Submit'
import PostListEditor from '../components/PostListEditor'
import withData from '../lib/withData'
import CardExampleCard from '../components/CardExampleCard'
import Head from 'next/head'

export default withData((props) => (
    <App>
        <Head>
            <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header pathname={props.url.pathname} />

        <PostListEditor />
    </App>
))
