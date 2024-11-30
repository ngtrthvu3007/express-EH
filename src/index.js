import express from "express";
import dotenv from "dotenv";
import { defaultErrorHandler } from "./middlewares/defaultErrorHandler.js";
import { databaseConnection } from "./services/database.services.js";
import userRouter from "./routers/user.routes.js";
import eventRouter from "./routers/event.routes.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

databaseConnection();
app.use(express.json());

app.use("/user", userRouter);
app.use("/event", eventRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log("Server is ready on port: ", port);
});

app.use(defaultErrorHandler);
