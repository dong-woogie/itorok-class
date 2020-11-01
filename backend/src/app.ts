import Koa from 'koa';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-koa';
import bodyParser from 'koa-bodyparser';
import 'reflect-metadata';
import cors from '@koa/cors';
import routes from './routes';
import schema from './graphql/schema';
const app = new Koa();

app.use(bodyParser());
app.use(routes.routes()).use(routes.allowedMethods());
app.use(cors({ origin: 'http://localhost:3000' }));

const apolloServer = new ApolloServer({ schema });

apolloServer.applyMiddleware({ app });

async function initialize() {
  try {
    await createConnection();
    console.log('Postgres RDBMS connection');
  } catch (e) {
    console.log(e);
  }
}

initialize();

export default app;
