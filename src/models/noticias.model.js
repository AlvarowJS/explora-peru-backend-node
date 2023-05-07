const { DataTypes } = require("sequelize");

const { db } = require("../utils/database");

const Noticia = db.define("noticias", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    titulo: {        
        type: DataTypes.STRING,
    },
    nota: {    
        type: DataTypes.STRING,
    },
    titulo_ingles: {        
        type: DataTypes.STRING,
    },
    nota_ingles: {        
        type: DataTypes.STRING,
    },
    img: {
        type: DataTypes.STRING,        
    }    
});

module.export = Noticia;