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
      { og.twitterImage
        ? (
          <meta name="twitter:image" content={og.twitterImage.url} />
          <meta name="twitter:image:width" content={og.twitterImage.width} />
          <meta name="twitter:image:height" content={og.twitterImage.height} />
          <meta name="twitter:image:alt" content={og.twitterImage.alt} />
        )
        : null }
      <meta property="og:type" content={og.ogType} />
      { og.ogImage
        ? (
          <meta property="og:image" content={og.ogImage.url} />
          <meta property="og:image:height" content={og.ogImage.width} />
          <meta property="og:image:width" content={og.ogImage.height} />
          <meta property="og:image:alt" content={og.ogImage.alt} />
        )
        : null }
      <meta property="og:title" content={og.ogTitle} />
      <meta property="og:description" content={og.ogDescription} />
      <meta property="og:url" content={og.ogUrl} />
      <meta property="og:site_name" content={og.ogUrl} />
    </Head>
    <p>You got flashed!</p>
    <Hand />
    <Link href="/create">
      <button>Flash your friends now</button>
    </Link>
    <style jsx>{`
      p {
        font-size: 2em;
        text-align: center;
      }

      button {
        position: absolute;
        left: 0;
        right: 0; bottom: 0;

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
