const courses = [
    {id: 1, name: 'Java-script', description: 'Изучение основ программирования на языке js'
    },
    {id: 2, name: 'Python', description: 'Изучение основ программирования на Python'},
    {id: 3, name: 'PHP', description: 'Пишем код на PHP'}
]


export default async function (app, opts) {
  app.get('/courses', (req, res) => {
const {term} = req.query
let currentCourses = courses
if(term) {
    currentCourses = courses.filter(course => course.name.toLowerCase().includes(term.toLowerCase()))
}
res.view('../views/courses', {courses: currentCourses, term})
  }
)
app.post('/courses', (req,res) => {
   const {id,name,description} = req.body
const newCourse = {id, name, description}
courses.push(newCourse)
res.redirect('/courses')
})
  }