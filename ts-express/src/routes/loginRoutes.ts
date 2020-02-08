import { Router, Request, Response } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get("/", (req: Request, res: Response) => {
  if (req.session?.loggedIn) {
    res.send(`
      <div>
      <div>
      <p>You are logged In!</p>
      </div>
    
      <a href="/logout">Logout</a>
      </div>
    `);
  } else {
    res.send(`
      <div>
      <div>
      <p>You are Not logged In!</p>
      </div>
    
      <a href="/login">Login</a>
      </div>
    `);
  }
});

router.get("/login", (req: Request, res: Response) => {
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
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === "a@b.com" && password === "pass") {
    req.session = { loggedIn: true };
    res.redirect("/");
  } else {
    res.send("Invalid Email or Password");
  }
});

router.get("/logout", (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect("/");
});

export { router };
