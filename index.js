const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const expressGraphQL = require('express-graphql')

const db = require('./config/keys').mongoURI;

const User = require("./models/User");
const Post = require("./models/Post");
const schema = require("./schema/schema");

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// app.get("/", (req, res) => res.send("<div style='display: inline-block; background-color: pink; width: 50px; height: 50px; cursor: pointer;'></div><div style='display: inline-block; background-color: cornflowerblue; width: 50px; height: 50px; cursor: pointer;'></div>"));

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);


// ---------------------------------

app.use(bodyParser.json());

// ---------------------------------

// CODE FOR ADDING NEW USERS / POSTS ETC

// app.use(
//   bodyParser.urlencoded({
//     extended: true
//   })
// );

// const router = express.Router();

// ---------------------------------

// const createNewUser = router.post("/new", (req, res) => {
//   User.findOne({ email: req.body.email }).then(user => {
//     if (user) {
//       // Throw a 400 error if the email address already exists
//       return res
//         .status(400)
//         .json({ email: "A user has already registered with this address" });
//     } else {
//       // Otherwise create a new user
//       console.log(req.body);
//       const newUserObj = new User({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password
//       });

//       newUserObj
//         .save()
//         .then(savedUser => res.json(savedUser))
//         .catch(err => console.log(err));
//     }
//   });
// });

// ---------------------------------

// const createNewPost = router.post("/new", (req, res) => {
//   const newPost = new Post({
//     title: req.body.title,
//     body: req.body.body,
//     date: req.body.date,
//     author: req.body.author
//   });

//   newPost
//     .save()
//     .then(savedPost => res.json(savedPost))
//     .catch(err => console.log(err));
// });

// app.use("/posts", createNewPost);
// app.use("/users", createNewUser);

app.listen(5000, () => console.log("Server running on port 5000"));