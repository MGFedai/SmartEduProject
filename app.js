const express = require("express");
const app = express();
//template engine
app.set("view engine", "ejs");
// Middlewares
app.use(express.static("public"));

//routers
app.get("/", (req, res) => {
  res.status(200).render('index',{
  pane_name:"index"});
});
app.get("/about", (req, res) => {
    res.status(200).render('about',{
    pane_name:"about"});
});
app.get("/contact", (req, res) => {
  res.status(200).render('contact');
});
app.get("/courses", (req, res) => {
  res.status(200).render('courses');
});
app.get("/dashboard", (req, res) => {
  res.status(200).render('dashboard');
});
app.get("/login", (req, res) => {
  res.status(200).render('login');
});
app.get("/register", (req, res) => {
  res.status(200).render('register');
});
app.get("/course-single", (req, res) => {
    res.status(200).render('course-single');
  });

const port = 3000;
app.listen(port, () => {
  console.log(`app started on port ${port}`);
});
