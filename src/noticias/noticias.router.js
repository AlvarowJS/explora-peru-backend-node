const router = require('express').Router()

const noticiaServices = require('./noticias.http')

router.route('/')
    .get(noticiaServices.getAll)

module.exports = {
    router
}