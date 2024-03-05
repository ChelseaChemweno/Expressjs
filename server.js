const express = require("express");
//create the server/app
const app = express();
//define the  server routes
//templating language es6
app.get("/", (req, res) => {
  //database logic
  res.render("home.ejs", { uname: "chelsea" });
});
app.get("/login", (req, res) => {
  res.render("login.ejs");
});
//start/run your app
app.listen(8003, () => {
  console.log("Server is running on port 8003");
});
//explicit and implict reurns in functions
//watch  name of the serever file  to restart the server (---watch server.js )
//Sam Meech ard (Express Js tutorials)
