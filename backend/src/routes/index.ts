import Router from "koa-router";
import api from "./api";
import auth from "./auth";

const routes = new Router();

routes.use("/api", api.routes());
routes.use("/auth", auth.routes());

routes.get("/", (ctx) => {
  ctx.body = "hello world";
});

export default routes;
