import "./env";
import app from "./app";

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`start server port is ${PORT}`);
});
