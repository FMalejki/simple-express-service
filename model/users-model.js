const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db-config/config.js');

const User = sequelize.define("User", {
    email: {type: DataTypes.STRING, allowNull: false, unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {type: DataTypes.STRING, allowNull: false}
})
module.exports = User
