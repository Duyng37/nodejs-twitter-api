import { Router } from 'express'

const usersRouter = Router()

usersRouter.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

usersRouter.get('/', (req, res) => {
  res.send('Hello World!')
})

export default usersRouter
