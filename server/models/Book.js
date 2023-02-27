const mongoose = require("mongoose");
const schema = mongoose.schema;

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    gerne: {
        type: String,
    },
    authorId: {
        type: String,
    },
});

module.exports = mongoose.model("books", BookSchema);
