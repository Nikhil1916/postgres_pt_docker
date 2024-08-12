import express from "express";
import mainRouter from "./Router";
const app = express();
const port = 3000;
app.use(express.json());
app.use("/",mainRouter);
app.listen(port, () => {
  console.log("listening on port " + port);
});
