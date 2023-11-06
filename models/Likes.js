//1 - importqar datatype
const {DataTypes} = require('sequelize')

//2 - importar o arquivo de connection
const db = require('../db/conn')

const User = require('../models/User')
const Publication = require('../models/Publication')

const Likes = db.define('likes',{
    id:{
        type:DataTypes.STRING,
        require: true,
        primaryKey: true
    },

})

User.belongsToMany(Publication,{through:'likes'})
Publication.belongsToMany(User, {through:'likes'})

module.exports = Likes