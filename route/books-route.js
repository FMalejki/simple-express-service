const express = require("express");
const router = express.Router();
const booksController = require("../controller/books-controller");

router.get("/books", booksController.getAllBooks);
router.get("/books/:id", booksController.getBooksByID);
router.post("/books", booksController.createBook);
router.delete("/books/:id", booksController.deleteBook);

module.exports = router;