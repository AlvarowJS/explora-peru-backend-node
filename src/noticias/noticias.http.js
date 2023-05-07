const noticiaController = require('./noticias.controller')

const getAll = (req, res) => {
    noticiaController.getAllNoticias()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

module.exports = {
    getAll
}