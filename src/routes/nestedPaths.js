export default async function (app, opts) {
  app.get('/users/:id/lessons/:lessonsId', (req, res) => {
    const {id, lessonsId} = req.params
  res.send(`Course ID: ${id} ; Lesson ID: ${lessonsId}`)
})
}
