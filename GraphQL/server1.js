const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const app = express();

const { GraphQLSchema, GraphQLString, GraphQLObjectType } = require("graphql");
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "newQuery",
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => "Welcome to first graphQL demo",
      },
    }),
  }),
});

app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true,
  })
);

app.listen(5000, () => console.log("serever running on port 5000"));
