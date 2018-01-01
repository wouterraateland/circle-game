import Head from 'next/head'
import Header from '../components/header'

const Page = ({ children }) => (
  <div>
    <Head>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>The Circle Game</title>
    </Head>
    <Header />
    <div className="body">
      {children}
    </div>
  </div>
)

export default Page
