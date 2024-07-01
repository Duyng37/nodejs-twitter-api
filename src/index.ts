import express from 'express'

const app = express()
const router = express.Router()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

app.post('/', (req, res) => {
  res.send('Hello World! 2')
})

router.get('/tweets', (req, res) => {
  res.send('Tweets!')
})

app.use('/api', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
