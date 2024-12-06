const Books = require('../model/books-model');

exports.getAllBooks = async (req, res) => {
    try {
        const allBooks = await Books.findAll();
        res.json(allBooks);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch books." });
    }
};

exports.getBooksByID = async (req, res) => {
    try {
        const book = await Books.findByPk(req.params.id);
        if (book !== null) {
            res.json(book);
        } else {
            res.status(404).json({ error: "Content not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch book by ID" });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const result = await Books.destroy({ where: { id: req.params.id } });
        if (result) {
            res.status(204).json({ message: "Book deleted"});
        } else {
            res.status(404).json({ error: "Content not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to delete book" });
    }
};

exports.createBook = async (req, res) => {
    try {
        const { title, author, year } = req.body;
        const newBook = await Books.create({ title, author, year });
        res.status(201).json({ message: "Book created", id: newBook.id });
    } catch (error) {
        res.status(500).json({ error: "Failed to create book" });
    }
};
