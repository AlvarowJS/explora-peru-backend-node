const Noticia = require('./../models/noticias.model')

const getAllNoticias = async () => {
    const data = await Noticia.findAll()
    return data
}

module.exports = {
    getAllNoticias
}