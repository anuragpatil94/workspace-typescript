import { Request, Response, NextFunction } from "express";
import { get, controller, post, bodyValidator } from "./decorators";

// interface RequestWithBody extends Request {
//   body: { [key: string]: string | undefined };
// }
@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(`
        <form method="POST">
          <div>
              <label>Email </label>
              <input name="email"/>
          </div>
          <div>
              <label>Password</label>
              <input name="password" type="password"/>
          </div>
          <button>Submit</submit>
        </form>
        `);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email === "a@b.com" && password === "pass") {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.send("Invalid Email or Password");
    }
  }
}

export default LoginController;
