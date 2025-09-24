import cookie from "cookie";

export default function handler(req, res) {
  // Set cookie
  res.setHeader("Set-Cookie", cookie.serialize("role", "guest", { path: "/" }));
  res.status(200).send(`
    <h2>Welcome to Cookie Monster</h2>
    <p>Your role is: <b>guest</p>
  `);
}


