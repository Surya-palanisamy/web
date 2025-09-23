const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 3001;
app.use(cookieParser());
app.get("/", (req, res) => {
  res.cookie("role", "guest"); 
  res.send(`
    <h2>Welcome to Cookie Monster</h2>
    <p>Your role is: <b>guest</b></p>
    <p>Hint: Sometimes cookies are more powerful than they look!</p>
  `);
});

app.get("/admin", (req, res) => {
  const role = req.cookies.role; 
  if (role === "admin") {
    res.send("Congratulations! Here is the flag: robot txt file");
  } else {
    res.send("Access denied. Only admin can see the flag!");
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
