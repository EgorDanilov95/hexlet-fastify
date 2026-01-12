export default async function (app, opts) {
  app.get('/hello', async function (req, res) {
    const {name = 'World'} = req.query
    res.send(`Hello, ${name}`)
})
}
