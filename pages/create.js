import { Component } from 'react'
import Page from '../layouts/page'
import Link from 'next/link'

import classNames from 'classnames'

export default class CreationPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      link: '',
      shortLink: '',
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.copy = this.copy.bind(this)
  }

  async onSubmit(event) {
    event.preventDefault()
    const url = event.target['uri'].value

    const res = await fetch(`/shorten/${url}`, { method: 'POST' })
    const json = await res.json()

    if (json.status_code === 200) {
      this.setState({
        error: null,
        shortLink: json.data.url,
      })
    } else {
      this.setState({
        error: json.status_txt,
        shortLink: '',
      })
    }
  }

  onChange(event) {
    this.setState({
      link: event.target.value
    })
  }

  copy(event) {
    event.target.select()

    try {
      const successful = document.execCommand('copy')
      console.log(`Copying text ${successful ? 'successful' : 'failed'}`)
    } catch (err) {
      console.error('Unable to copy')
    }
  }

  render() {
    const { error, link, shortLink } = this.state

    return (
      <Page>
        <div className="wrapper">
          <form onSubmit={this.onSubmit}>
            <label>
              <input
                className={classNames({empty: !link})}
                name="uri"
                value={link}
                onChange={this.onChange}
              />
              <span>Paste a link</span>
            </label>
            <button type="submit">Transform</button>
          </form>
          {shortLink
            ? <div>
              <label>
                <input value={shortLink} readOnly onClick={this.copy} />
                <span>Your transformed link</span>
              </label>
              <p>Now share this link with your friends to flash them!</p>
            </div>
            : null }
            {error
              ? <p>There was an error creating your link, try again.</p>
              : null }
        </div>

        <style jsx>{`
          p {
            font-size: 1.5em;
            text-align: center;
          }

          form {
          }

          label {
            display: block;
            padding: 1em 0;
            margin: 1em 0;

            text-align: center;
          }

          input {
            display: block;
            width: 100%;
            padding: 1em 0 .5em;
            border-bottom: .1em solid;

            font-family: 'Kanit', sans-serif;
            font-weight: bold;
          }

          input + span {
            display: block;
            margin: -3.6em 0 3.6em;
            line-height: 1em;

            transition: margin .2s ease-out;
          }

          input.empty:not(:focus) + span {
            margin: -1.6em 0 1.6em;
          }
        `}</style>
      </Page>
    )
  }
}
