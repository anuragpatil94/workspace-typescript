import { Router, Request, Response } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
  jel?: string;
}

const router = Router();

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
  if (email) {
    res.send(email.toLowerCase());
  } else {
    res.send("You must provide email");
  }
});

export { router };
