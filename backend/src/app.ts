import Koa from "koa";
import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server-koa";
import bodyParser from "koa-bodyparser";
import routes from "./routes";

const app = new Koa();

app.use(bodyParser());
app.use(routes.routes()).use(routes.allowedMethods());

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello World",
  },
};

const apolloServer = new ApolloServer({ resolvers, typeDefs });

apolloServer.applyMiddleware({ app });

async function initialize() {
  try {
    await createConnection();
    console.log("Postgres RDBMS connection");
  } catch (e) {
    console.log(e);
  }
}

initialize();

export default app;
