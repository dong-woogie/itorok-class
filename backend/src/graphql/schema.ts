import { gql, IResolvers, makeExecutableSchema } from "apollo-server-koa";
import merge from "lodash/merge";
import * as user from "./user";

const typeDef = gql`
  scalar JSON
  scalar Date
  type Query {
    _version: String
  }

  type Mutation {
    _empty: String
  }
`;

const resolver = {
  Query: {
    _version: () => "1.0",
  },
  Mutation: {},
};

export default makeExecutableSchema({
  typeDefs: [typeDef, user.typeDef],
  resolvers: merge(resolver, user.resolvers),
});
