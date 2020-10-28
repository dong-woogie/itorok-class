import Router from "koa-router";
import type {Context} from 'koa'
import auth from './auth'

const api = new Router();

api.use("/auth", auth.routes())

api.get("/", (ctx:Context) => {
  ctx.body = "api!";
});

export default api;
