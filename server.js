require('dotenv').config()

const express = require('express')
const next = require('next')
const ogs = require('open-graph-scraper')
const bitly = require('bitly')(process.env.BITLY_KEY)

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.post('/shorten/:url(*)', async (req, res) => {
    try {
      const link = await bitly.shorten(`http://circlegame.nl/link/${req.params.url}`)
      res.send(link)
    } catch(e) {
      console.error(e)
      res.send(e)
    }
  })

  server.get('/link/:url(*)', (req, res) => {
    ogs({url: req.params.url}, (err, ogRes) => {
      const actualPage = '/link'
      const queryParams = err ? { error: ogRes} : { og: ogRes.data }
      app.render(req, res, actualPage, queryParams)
    })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })


  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
