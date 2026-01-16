const courses = [
    {id: 1, name: 'Java-script', description: 'Изучение основ программирования на языке js'
    },
    {id: 2, name: 'Python', description: 'Изучение основ программирования на Python'},
    {id: 3, name: 'PHP', description: 'Пишем код на PHP'}
]


export default async function (app, opts) {
    app.get('/courses/new', (req, res) => {
  res.view('../views/courses-addForm')
})
}