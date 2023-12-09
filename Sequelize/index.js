const express = require("express");
const app = express();

const db = require("./models");

const { Fruits } = require("./models");

app.get("/insert", (req, res) => {
  Fruits.create({
    fruitCode: 30,
    fruitName: "papya",
    fruitColor: "orange red",
  })
    .then((fruit) => {
      console.log("fruit = ", fruit);
    })
    .catch((error) => {
      console.log("error = ", error);
    });

  res.send("record inserted successfully!");
});

app.get("/getFruits", (req, res) => {
  Fruits.findAll({where : {fruitCode:20}}).then((fruits) => {
    console.log("all fruits = ", fruits);
    res.send(fruits);
  });
});

app.get("/allFruits", (req, res) => {
    Fruits.findAll({
    attributes:['fruitName'] //display only required columns
    }).then((fruits) => {
      console.log("all fruits = ", fruits);
      res.send(fruits);
    });
  });

app.get("/delete", (req, res) => {
    Fruits.destroy({where : {fruitName:'orange'}}).then((fruits) => {
      console.log("all fruits = ", fruits);
      res.send(fruits);
    });
  });

db.sequelize.sync().then((req) => {
  app.listen(3001, () => {
    console.log("server running on port 3001 succesfully");
  });
});
