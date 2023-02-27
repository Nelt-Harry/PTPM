const { books, authors } = require("../data/static");
const Author = require("../models/Author");
const Book = require("../models/Book");

const resolvers = {
    Query: {
        books: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAllBook(),

        book: async (parent, args, context) =>
            await context.mongoDataMethods.getBookById(args.id),

        authors: async (parent, args, context) =>
            await context.mongoDataMethods.getAllAuthor(),

        author: async (parent, args, context) =>
            await context.mongoDataMethods.getAuthorById(args.id),
    },

    Book: {
        author: async ({ authorId }, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAuthorById(authorId),
    },

    Author: {
        books: async ({ id }, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAllBook({ authorId: id }),
    },

    Mutation: {
        createAuthor: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.createAuthor(args),
        createBook: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.createBook(args),
    },
};

module.exports = resolvers;
