import { ApolloError, gql, IResolvers } from "apollo-server-koa";
import { getManager, getRepository } from "typeorm";
import { User } from "../entity/User";
import { UserProfile } from "../entity/UserProfile";

export const typeDef = gql`
  type Profile {
    display_name: String
    short_bio: String
    about: String
  }

  type User {
    id: ID!
    email: String
    profile: Profile
  }

  extend type Query {
    hello: String
    user(id: ID): User
    users: [User]
  }

  extend type Mutation {
    register(email: String, username: String): Boolean
  }
`;

export const resolvers: IResolvers<any, any> = {
  Query: {
    hello: () => "woogie!",
    user: async (parent: any, { id }: { id: string }) => getUserById(id),
    users: () => getUsers(),
  },

  Mutation: {
    register: (_, args) => createAccount(args),
  },
};

async function getUserById(id: string) {
  const user = await User.findOne(id, { relations: ["profile"] });
  return user;
}

async function getUsers() {
  const user = await getRepository(User).createQueryBuilder("user").getMany();
  return user;
}

async function createAccount(args: { email: string; username: string }) {
  try {
    const manager = await getManager();
    const exist = await manager.findOne(User, { email: args.email });
    if (exist) throw new Error("존재하는 이메일입니다.");

    const user = new User();
    const userProfile = new UserProfile();

    user.username = args.username;
    user.email = args.email;

    // userProfile.fk_user_id = user.id;
    // userProfile.short_bio = args.shortBio
    // userProfile.display_name = args.displayName

    await manager.save(user);
    await manager.save(userProfile);

    return true;
  } catch (e) {
    throw new ApolloError(e.message);
  }
}

//register qeury
//login query
export const Mutations = {};
