import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import { router } from "./routes/loginRoutes";
import "./controllers/LoginController";
import { router as controllerRouter } from "./controllers/decorators/controller";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({ keys: ["akfdhbkweifuyvxjkznv,mnvjhjhbaiipLK>Kjegyru"] })
);
app.use(router);
app.use(controllerRouter);

app.listen(3000, () => {
  console.log("Listening to port: 3000");
});
