//1 - importqar datatype
const {DataTypes} = require('sequelize')

//2 - importar o arquivo de connection
const db = require('../db/conn')

const Publication = db.define('publication',{
    publication:{
        type:DataTypes.STRING,
        require: true,
        allowNull: false,
    },
})

module.exports = Publication