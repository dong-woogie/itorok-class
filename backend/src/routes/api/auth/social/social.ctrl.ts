import { Context, Middleware } from 'koa';
import { generateSocialLoginLink } from '../../../../lib/social';
import { getGithubAccessToken, getGithubProfile } from '../../../../lib/social/github';

const { GITHUB_ID, GITHUB_SECRET } = process.env;

if (!GITHUB_ID || !GITHUB_SECRET) {
  throw new Error('GITHUB ENVVAR is missing');
}

export const socialRedirect = (ctx: Context) => {
  const { provider } = ctx.params;
  const { next } = ctx.query;
  const loginUrl = generateSocialLoginLink(provider, next);
  ctx.redirect(loginUrl);
};

export const githubCallback: Middleware = async (ctx, next) => {
  const { code }: { code: string } = ctx.query;
  if (!code) {
    ctx.status = 400;
    return;
  }
  try {
    const accessToken = await getGithubAccessToken({
      code,
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    });
    const profile = await getGithubProfile(accessToken);

    ctx.state.profile = profile;
    ctx.state.provider = 'github';
    ctx.state.accessToken = accessToken;
    ctx.state.socialAccount = '';

    next();
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const socialCallback: Middleware = async ctx => {};
