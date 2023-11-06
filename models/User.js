//1 - importqar datatype
const {DataTypes} = require('sequelize')

//2 - importar o arquivo de connection
const db = require('../db/conn')

const User = db.define('user',{
    name:{
        type:DataTypes.STRING,
        require: true,
        allowNull: false,
    },
    email:{
        type:DataTypes.STRING,
        require: true,
        allowNull: false,
        unique: true
    },
    password:{
        type:DataTypes.STRING,
        require: true,
        allowNull: false,
    },
})

module.exports = User