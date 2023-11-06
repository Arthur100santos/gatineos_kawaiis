//1 - importqar datatype
const {DataTypes} = require('sequelize')

//2 - importar o arquivo de connection
const db = require('../db/conn')

const User = require('../models/User')
const Publication = require('../models/Publication')

const Comments = db.define('comments',{
    comments:{
        type:DataTypes.STRING,
        require: true,
        allowNull: false
    },

})

User.belongsToMany(Publication,{through:'comments'})
Publication.belongsToMany(User, {through:'comments'})

module.exports = Comments