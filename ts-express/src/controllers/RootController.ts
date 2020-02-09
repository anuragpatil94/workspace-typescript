import { Request, Response, NextFunction } from "express";
import { get, controller, use } from "./decorators";

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  // if user is login and has session
  if (req.session?.loggedIn) {
    next();
    return;
  }
  res.status(403).send("Not Permitted to Protected Route");
}

@controller("")
export class RootController {
  @get("/")
  getRoot(req: Request, res: Response) {
    if (req.session?.loggedIn) {
      res.send(`
            <div>
            <div>
            <p>You are logged In!</p>
            </div>
          
            <a href="/auth/logout">Logout</a>
            </div>
          `);
    } else {
      res.send(`
            <div>
            <div>
            <p>You are Not logged In!</p>
            </div>
          
            <a href="/auth/login">Login</a>
            </div>
          `);
    }
  }

  @get("/protected")
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send("Welcome to Protected route, logged in user!");
  }
}
