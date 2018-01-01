import Link from 'next/link'

export default () => (
  <div className="header">
    <Link href="/">
      <div className="hamburger" />
    </Link>
    <h1>The Circle Game</h1>
    <style jsx>{`
      .header {
        padding: 1em;
        text-align: center;
      }

      .hamburger {
        position: relative;
        width: 1em;
        height: 1em;

        float: left;
      }

      .hamburger::before,
      .hamburger::after {
        content: '';

        position: absolute;
        left: 0;

        height: .2em;

        background-color: currentColor;
      }

      .hamburger::before {
        bottom: .6em;
        width: 1em;
      }

      .hamburger::after {
        top: .6em;
        width: .7em;
      }

      h1 {
        margin: 0;

        font-size: 1em;

        color: #fe0;
      }
    `}</style>
  </div>
)
