import cookie from "cookie";

export default function handler(req, res) {
  const cookies = req.headers.cookie ? cookie.parse(req.headers.cookie) : {};
  const role = cookies.role;

  if (role === "admin") {
    res.status(200).send("Congratulations! Here is the flag: robot txt file");
  } else {
    res.status(403).send("Access denied. Only admin can see the flag!");
  }
}
