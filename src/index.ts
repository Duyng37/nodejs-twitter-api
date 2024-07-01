import express from 'express'
import usersRouter from './routes/users.routes'

const app = express()

const port = 3000

app.post('/', (req, res) => {
  res.send('Hello World! 2')
})

app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
