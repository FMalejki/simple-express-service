const sequelize = require("./db-config/config");
const booksRoute = require("./route/books-route");
const express = require("express");
const app = express();
const ordersRoute = require("./route/orders-route");
const usersRoute = require("./route/users-route");
require('dotenv').config();


app.use(express.json());

sequelize.sync().then(() => {
    console.log("Database synced!");
});

app.use("/api", booksRoute);
app.use("/api", ordersRoute);
app.use("/api", usersRoute);

const User = require('./model/users-model');
const Order = require('./model/orders-model');
const Book = require('./model/books-model');

User.hasMany(Order, { foreignKey: 'id' });
Order.belongsTo(User, { foreignKey: 'userId' });
Order.belongsTo(Book, { foreignKey: 'book_id' });

module.exports = { User, Order, Book };


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
