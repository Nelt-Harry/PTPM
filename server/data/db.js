const Book = require("../models/Book");
const Author = require("../models/Author");

const mongoDataMethods = {
    getAllBook: async (condition = null) => await condition === null ? Book.find(): Book.find(condition),
    getBookById: async (id) => await Book.findById(id),
    getAllAuthor: async () => await Author.find(),
    getAuthorById: async (id) => await Author.findById(id),
    createAuthor: async ({ name, age }) => await Author.create({ name, age }),
    createBook: async ({ name, gerne }) => await Book.create({ name, gerne }),
};

module.exports = mongoDataMethods;
