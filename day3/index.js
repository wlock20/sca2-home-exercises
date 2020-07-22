const express = require("express")
const path = require("path")
const app = express()

app.use(express.static(__dirname + "/public"))
app.use(express.static(__dirname + "/assets"))
const views = path.join(__dirname, "views")

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: views })
});

app.get("/about", (req, res) => {
  res.sendFile("about.html", { root: views })
});

app.get("/FAQ", (req, res) => {
  res.sendFile("FAQ.html", { root: views })
});

app.get("/team", (req, res) => {
  res.sendFile("team.html", { root: views })
});

app.listen(3000)
console.log("Running at port 3000")
