import Koa from "koa";
import { createConnection, getManager, getRepository } from "typeorm";
import { ApolloServer, gql } from "apollo-server-koa";
import bodyParser from "koa-bodyparser";
import "reflect-metadata";
import routes from "./routes";
import { User } from "./entity/User";
import schema from "./graphql/schema";
const app = new Koa();

app.use(bodyParser());
app.use(routes.routes()).use(routes.allowedMethods());

const apolloServer = new ApolloServer({ schema });

apolloServer.applyMiddleware({ app });

async function initialize() {
  try {
    const connection = await createConnection();
    // const user = new User();
    // user.email = "ljasdlkjaslkdasd@naver.com";
    // user.is_certified = false;
    // await connection.manager.save(user);
    console.log("Postgres RDBMS connection");
  } catch (e) {
    console.log(e);
  }
}

initialize();

export default app;
