import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

const backgroundColor = '#000'
const primaryColor = '#fff'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <style>{`
            @import url(https://fonts.googleapis.com/css?family=Kanit:800|Raleway);

            *,
            *::before,
            *::after {
              box-sizing: border-box;
            }

            html, body {
              padding: 0;
              margin: 0;
            }

            body {
              font-family: Raleway, sans-serif;
              line-height: 1;

              background: ${backgroundColor};
              color: ${primaryColor};
            }

            h1, h2, h3, h4, h5, h6 {
              font-family: Kanit, sans-serif;
              font-weight: bold;
              text-transform: uppercase;

              letter-spacing: .1em;
            }

            img {
              max-width: 100%;
              max-height: 100%;
            }

            button,
            input,
            select,
            textarea {
              border: none;

              font: inherit;
              text-align: inherit;

              background: none;
              color: inherit;
            }

            button:focus,
            input:focus,
            select:focus,
            textarea:focus {
              outline: none;
            }

            button {
              display: block;
              width: 100%;
              padding: .9em;
              border: .1em solid;
              border-radius: .5em;

              text-align: center;
              text-transform: uppercase;
              font-family: Kanit, sans-serif;
              font-weight: bold;
              font-size: 1.2em;
              letter-spacing: .1em;

              color: #fe0;
            }

            .body {
              padding: 1em;
            }

            .wrapper {
              max-width: 100vmin;
              margin: auto;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
