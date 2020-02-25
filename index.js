const express = require("express");
const app = express();
// import "./app.css";

app.get("/", (req, res) => res.send("<div style='background-color: pink'>Whassup World?</div><div class='erinsDiv'>Hi Erin!</div>"));

app.listen(5000, () => console.log("Server running on port 5000"))