import sanitize from 'sanitize-html'

export default async function (app, opts) {
app.get('/users/:id', (req, res) => {
  const escapedId = sanitize(req.params.id)
  res.type('html')
  res.send(`<h1>${escapedId}</h1>`)
})
}
