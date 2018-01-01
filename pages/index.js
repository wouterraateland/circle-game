import Page from '../layouts/page'
import Link from 'next/link'
import Header from '../components/header'
import Hand from '../components/hand'

export default () => (
  <Page>
    <Hand />
    <h2>Flash your friends by sharing fake links over WhatsApp and other social media.</h2>
    <Link href="/create">
      <button>Start flashing now</button>
    </Link>
    <style jsx>{`
      h2 {
        position: absolute;
        left: 0;
        right: 0; bottom: 4em;
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

        text-align: center;
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
