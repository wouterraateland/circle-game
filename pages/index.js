import Page from '../layouts/page'
import Link from 'next/link'
import Header from '../components/header'
import Hand from '../components/hand'

export default () => (
  <Page>
    <Hand />
    <div className="wrapper">
      <h2>Flash your friends by sharing fake links over WhatsApp and other social media.</h2>
      <Link href="/create">
        <button>Start flashing now</button>
      </Link>
      <p>Happy to hear any suggestions at <a href="mailto:wouterraateland@gmail.com" target="_blank">wouterraateland@gmail.com</a></p>
    </div>
    <style jsx>{`
      div {
        position: absolute;
        left: 0;
        right: 0; bottom: 0;
        padding: 1em;
      }
      h2 {
        margin-bottom: 2em;
      }

      p {
        margin-top: 1em;
        text-align: center;
        font-size: .75em;
      }
    `}</style>
  </Page>
)
