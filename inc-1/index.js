const express = require('express')
const axios = require('axios')

const app = express()

const catApi = axios.create({
  baseURL: 'http://thecatapi.com'
})

const onCatch = res => err => {
  console.log(err)
  res.status(500).send(err)
}

// TODO: get the kitten img and insert it
// app.get()

app.listen(3000, _ => console.log(`UP!`))
