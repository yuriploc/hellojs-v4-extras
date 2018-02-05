const express = require('express')
const axios = require('axios')
const knex = require('./config').knex

const app = express()

const catApi = axios.create({
  baseURL: 'http://thecatapi.com/api'
})

const onCatch = res => err => {
  console.log(err)
  res.status(500).send(err)
}

const params = {
  format: 'html',
  api_key: process.env.CAT_API_KEY
}

app.get('/my-kittens', (req, res) =>
  catApi
    .get('/images/get', { params })
    .then(ret => {
      const regexp = /\?id\=\w+/g
      const omg = ret.data.match(regexp)
      const imgId = omg[0].split('=')[1]
      // TODO: insert/update
      res.status(200).send(ret.data)
    })
    .catch(onCatch(res))
)

knex.migrate.latest().then(_ => app.listen(3000, _ => console.log(`UP!`)))
