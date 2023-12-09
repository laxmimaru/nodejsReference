const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const app = express();

const authors = [
  { id: 1, name: "author1" },
  { id: 2, name: "author2" },
  { id: 3, name: "author3" },
];

const books = [
  { id: 1, name: "name1", authorId: 1 },
  { id: 2, name: "name2", authorId: 2 },
  { id: 3, name: "name3", authorId: 3 },
  { id: 4, name: "name4", authorId: 1 },
  { id: 5, name: "name5", authorId: 2 },
  { id: 6, name: "name6", authorId: 3 },
];

const {
  GraphQLSchema,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
} = require("graphql");

const BookType = new GraphQLObjectType({
  name: "Book",
  description: "This respresents a book written by an author",
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    authorId: { type: GraphQLNonNull(GraphQLInt) },
    author: {
      type: AuthorType,
      resolve: (book) => authors.find((author) => author.id === book.authorId),
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  description: "This respresents  an author",
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    books: {
      type: GraphQLList(BookType),
      resolve: (author) => books.filter((book) => book.authorId === author.id),
    },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root query",
  fields: () => ({
    book: {
      type: BookType,
      description: "A single book",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (parent, args) => books.find((book) => book.id === args.id),
    },
    books: {
      type: new GraphQLList(BookType),
      description: "List of all books",
      resolve: () => books,
    },
    authors: {
      type: GraphQLList(AuthorType),
      description: "List of authors",
      resolve: () => authors,
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
});
app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true,
  })
);

app.listen(5000, () => console.log("serever running on port 5000"));
