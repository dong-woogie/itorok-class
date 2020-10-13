import Koa from "koa";
import { createConnection, getManager, getRepository } from "typeorm";
import { ApolloServer, gql } from "apollo-server-koa";
import bodyParser from "koa-bodyparser";
import routes from "./routes";
import { User } from "./entity/User";
const app = new Koa();

app.use(bodyParser());
app.use(routes.routes()).use(routes.allowedMethods());

const typeDefs = gql`
  type User {
    id: ID!
    email: String
  }

  type Query {
    hello: String
    user(id: ID): User
    users: [User]
  }
`;

const resolvers = {
  Query: {
    hello: () => "woogie!",

    user: async (parent: any, { id }: { id: string }) => getUserById(id),
    users: () => getUsers(),
  },
};

async function getUserById(id: string) {
  const user = await getManager()
    .createQueryBuilder(User, "user")
    .where("id = :id", { id })
    .getOne();
  return user;
}

async function getUsers() {
  const user = await getRepository(User).createQueryBuilder("user").getMany();
  return user;
}

const apolloServer = new ApolloServer({ resolvers, typeDefs });

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
