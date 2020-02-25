const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require("express");
const app = express();

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("<div style='display: inline-block; background-color: pink; width: 50px; height: 50px; cursor: pointer;'></div><div style='display: inline-block; background-color: cornflowerblue; width: 50px; height: 50px; cursor: pointer;'></div>"));
app.use(bodyParser.json());

app.listen(5000, () => console.log("Server running on port 5000"));