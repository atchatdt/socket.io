const Router = require('express').Router
const router = new Router()

const { getHomeClient } = require('../controller/client.controller')

router.get('/', getHomeClient)

module.exports = router