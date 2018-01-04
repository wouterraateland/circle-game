import Page from '../layouts/page'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Hand from '../components/hand'

const LinkPage = ({url: {query: {og}}}) => (
  <Page>
    <Head>
      <meta name="twitter:card" content={og.twitterCard} />
      <meta name="twitter:site" content={og.twitterSite} />
      <meta name="twitter:title" content={og.twitterTitle} />
      <meta name="twitter:description" content={og.twitterDescription} />
      <meta name="twitter:image" content={og.twitterImage ? og.twitterImage.url : null} />
      <meta name="twitter:image:width" content={og.twitterImage ? og.twitterImage.width : null} />
      <meta name="twitter:image:height" content={og.twitterImage ? og.twitterImage.height : null} />
      <meta name="twitter:image:alt" content={og.twitterImage ? og.twitterImage.alt : null} />
      <meta property="og:type" content={og.ogType} />
      <meta property="og:image" content={og.ogImage ? og.ogImage.url : null} />
      <meta property="og:image:height" content={og.ogImage ? og.ogImage.width : null} />
      <meta property="og:image:width" content={og.ogImage ? og.ogImage.height : null} />
      <meta property="og:image:alt" content={og.ogImage ? og.ogImage.alt : null} />
      <meta property="og:title" content={og.ogTitle} />
      <meta property="og:description" content={og.ogDescription} />
      <meta property="og:url" content={og.ogUrl} />
      <meta property="og:site_name" content={og.ogUrl} />
    </Head>
    <Hand />
    <div className="wrapper">
      <p>You got flashed!</p>
      <Link href="/create">
        <button>Flash your friends now</button>
      </Link>
    </div>
    <style jsx>{`
      div {
        position: absolute;
        left: 0;
        right: 0; bottom: 0;

        padding: 1em;
      }

      p {
        font-size: 2em;
        text-align: center;
      }

      button {
        display: block;
        width: 100%;
        padding: 1em;
        border: .1em solid;
        border-radius: .5em;

        text-transform: uppercase;
        font-family: 'Kanit', sans-serif;
        font-weight: bold;
        font-size: 1.2em;
        letter-spacing: .1em;

        color: #fe0;
      }
    `}</style>
  </Page>
)

export default LinkPage
