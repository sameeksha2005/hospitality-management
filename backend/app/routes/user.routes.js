module.exports = app => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/users", users.create);

  // Retrieve all Users
  router.get("/users/", users.findAll);

  // Retrieve all contact Users
  router.get("/users/contact", users.findAllPublished);

  // Retrieve a single User with id
  router.get("/users/:id", users.findOne);

  // Update a User with id
  router.put("/users/:id", users.update);

  // Delete a User with id
  router.delete("/users/:id", users.delete);

  // Delete all Users
  router.delete("/users/", users.deleteAll);

  app.use('/api', router);


};
