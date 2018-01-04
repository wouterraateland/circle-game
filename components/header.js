import Link from 'next/link'

export default () => (
  <div className="header">
    <Link href="/">
      <div className="circle" />
    </Link>
    <Link href="/">
      <h1>The Circle Game</h1>
    </Link>
    <style jsx>{`
      .header {
        padding: 1em;
        text-align: center;
      }

      .circle {
        position: relative;
        width: 1em;
        height: 1em;

        float: left;

        border: .2em solid;
        border-radius: 100%;
      }

      .circle::before,
      .circle::after {
        content: '';

        position: absolute;
        left: .3em;
        top: -.2em;

        height: .2em;
        border-radius: .1em;

        transform-origin: .1em .6em;

        background-color: currentColor;
      }

      .circle::before {
        width: 1em;
        transform: rotate(-45deg);
      }

      .circle::after {
        width: 1em;
        transform: rotate(-70deg);
      }

      h1 {
        margin: 0;

        font-size: 1em;

        color: #fe0;
      }
    `}</style>
  </div>
)
