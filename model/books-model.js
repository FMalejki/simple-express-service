const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db-config/config.js')

const Book = sequelize.define("Book", {
    title: { type: DataTypes.STRING, allowNull: false},
    author:  { type: DataTypes.STRING, allowNull: false},
    year: { type: DataTypes.DATE, allowNull: false},
})

module.exports = Book;