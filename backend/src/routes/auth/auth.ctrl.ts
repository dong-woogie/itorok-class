import type { Context } from "koa";
import { User } from "../../entity/User";
import { UserProfile } from "../../entity/UserProfile";

export const createLocalAccount = async (ctx: Context) => {
  type bodySchema = {
    email: string;
    password: string;
    username: string;
    display_name: string;
    short_bio: string;
    about: string;
  };
  const body: bodySchema = ctx.request.body;

  try {
    const userProfile = await UserProfile.create({
      display_name: body.display_name,
      short_bio: body.short_bio,
      about: body.about,
    }).save();

    await User.create({
      username: body.username,
      email: body.email,
      profile: userProfile,
    }).save();

    ctx.body = { success: true };
  } catch (e) {
    console.log(e.message);
    ctx.body = { success: false };
  }
};
