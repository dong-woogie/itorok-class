import Router from 'koa-router';
import * as authCtrl from './auth.ctrl';
import social from './social';

const auth: Router = new Router();

auth.use('/social', social.routes());

auth.post('/register/local', authCtrl.createLocalAccount);
auth.post('login/local', authCtrl.localLogin);
auth.get('/check', authCtrl.check);

export default auth;
