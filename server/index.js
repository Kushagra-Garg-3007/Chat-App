require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const userRoutes=require('./routes/user.routes.js');

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("💻 Mondodb Connected"))
  .catch(err => console.error(err));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("home page");
});

app.use("/user",userRoutes);

app.listen(PORT, () => console.log("Server running on port " + PORT));