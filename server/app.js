const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");

// Load schema and resolvers
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

// Load MongoDataMethods
const mongoDataMethods = require("./data/db");

const app = express();
let apolloServer = null;

async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        context: () => ({ mongoDataMethods }),
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();

// Connect DB
const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://tiensy:Xl9EZwMht2wCJRMp@cluster0.a0fwayl.mongodb.net/?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("DB connected");
    } catch (error) {
        console.log(error);
    }
};

connectDB();

app.listen({ port: 4000 }, () => {
    console.log(
        `server is run at: http://localhost:4000${apolloServer.graphqlPath}`
    );
});
