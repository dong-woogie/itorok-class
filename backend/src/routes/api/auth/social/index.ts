import Router from 'koa-router';
import { socialRedirect, githubCallback, socialCallback } from './social.ctrl';
const social: Router = new Router();

// callback
social.get('/callback/github');

// social login
social.get('/redirect/:provider', socialRedirect);
social.get('/callback/github', githubCallback, socialCallback);

export default social;
