const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db-config/config.js')
const Books = require('../model/books-model.js')
const User = require('../model/users-model.js');

const Order = sequelize.define("Order", {
    book_id: { type: DataTypes.INTEGER, allowNull: false},
    quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1},
    userId: { type: DataTypes.INTEGER, allowNull: false }
})
Order.belongsTo(Books, { foreignKey: "book_id" })
Order.belongsTo(User, { foreignKey: 'userId' })
module.exports = Order;
