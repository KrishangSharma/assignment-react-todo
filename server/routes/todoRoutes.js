// Package Imports
const router = require("express").Router();
const {
  addTodo,
  deleteTodo,
  markAsComplete,
  getAllTodos,
  searchQuery,
} = require("../controllers/todoController");

//? @ROUTE  todo/new
//? @ACCESS PUBLLIC
//? @METHOD POST
router.post("/new", addTodo);

//? @ROUTE  todo/:id
//? @ACCESS PUBLLIC
//? @METHOD DELETE
router.delete("/:id", deleteTodo);

//? @ROUTE  todo/:id
//? @ACCESS PUBLLIC
//? @METHOD PATCH
router.patch("/:id", markAsComplete);

//? @ROUTE  todo/all
//? @ACCESS PUBLLIC
//? @METHOD GET
router.get("/all", getAllTodos);

//? @ROUTE  todo/:query
//? @ACCESS PUBLLIC
//? @METHOD GET
router.get("/search/:query", searchQuery);

module.exports = router;
