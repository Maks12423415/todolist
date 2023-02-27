const express = require("express");
const cors = require("cors");

const app = express();

const port = 3000;
app.use(cors());

var todos = [
  { name: "szkoła", daystoend: "12", done: false },
  { name: "co to c++", daystoend: "33", done: true },
  { name: "Nauka JavaScript", daystoend: "43", done: true },
  { name: "Go to gym", daystoend: "65", done: false },
];

app.get("/", function (req, res) {
  res.send("robie zielone");
});

app.get("/gettodos", function (req, res) {
  res.json(todos);
});

app.get("/addtodo/:nazwa/:dni", function (req, res) {
  const dni = req.params.dni;
  const nazwa = req.params.nazwa;
  const tmptodo = { name: nazwa, daystoend: dni, done: false };

  todos.push(tmptodo);
  //elo
  console.log("Dodano zadanko: " + "nazwa" + nazwa);
  res.send("ok");
});
app.listen(port, function () {
  console.log("Aplikacja działa na porcie: " + port);
});
