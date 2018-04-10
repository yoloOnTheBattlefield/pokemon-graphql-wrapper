import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import typeDefs from "./schemas";
import resolvers from "./resolvers";
import redis from "redis";
import util from "util";
const redisUrl = "redis://127.0.0.1:6379";
const pokeApi = "http://pokeapi.co/api/v2";
const client = redis.createClient(redisUrl);
client.get = util.promisify(client.get);

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({ schema, context: { pokeApi, redis: client } })
);

// GraphiQL, a visual editor for queries
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

// Start the server
app.listen(5000, () => {
  console.log("Go to http://localhost:5000/graphiql to run queries!");
});
