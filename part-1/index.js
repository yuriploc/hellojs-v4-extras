const express = require('express')
const axios = require('axios')

const app = express()

const onCatch = res => err => {
  console.log(err)
  res.status(500).send(err)
}

const catApi = axios.create({
  baseURL: 'http://thecatapi.com/api'
})

app.get('/my-kittens', (req, res) => {
  catApi
    .get('/images/get', {
      params: {
        api_key: process.env.CAT_API_KEY,
        format: 'html'
      }
    })
    .then(ret => {
      console.log(ret.data)
      res.status(200).send(ret.data)
    })
    .catch(onCatch(res))
})

app.listen(3000, _ => console.log('UP!'))
