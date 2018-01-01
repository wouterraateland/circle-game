import Page from '../layouts/page'
import Link from 'next/link'
import Header from '../components/header'
import Hand from '../components/hand'

const name = `Sigur`

export default () => (
  <Page>
    <p>{name} flashed you</p>
    <Hand />
    <Link href="/create">
      <button>Get {name} back now</button>
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
