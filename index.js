const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Home')
})
app.get('store', (req, res) => {
  res.send('Store')
})

app.listen(port, () => {
  console.log(`hello world ${port}`)
})