// Package Import
const Todo = require("../models/todoModel");

// Add Todo
const addTodo = async (req, res) => {
  try {
    const { title } = req.body;

    // Validate the data
    if (!title) {
      return res
        .status(400)
        .json({ message: "Required fields cannot be empty!" });
    }

    // Construct a new Todo Object
    const newTodo = new Todo({
      title,
    });

    // Save the object to DB
    const savedTodo = await newTodo.save();

    return res
      .status(200)
      .json({ message: "Todo added successfully!", savedTodo });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      message:
        "Server encountered an error while processing the request. Please try again later.",
    });
  }
};

// Mark a todo as Completed
const markAsComplete = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the requested Todo
    const todo = await Todo.findByIdAndUpdate(
      id,
      [{ $set: { isCompleted: { $not: "$isCompleted" } } }],
      { new: true }
    );
    if (!todo) {
      return res.status(404).json({ message: "Resource not found!" });
    }

    return res.status(200).json({ message: "Status Updated successfully!" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      message:
        "Server encountered an error while processing the request. Please try again later.",
    });
  }
};

// Delete Todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the requested Todo and delete it
    const deletedTodo = await Todo.findByIdAndDelete({ _id: id });
    if (!deleteTodo) {
      return res.status(404).json({ message: "Resource not found!" });
    }

    return res.status(200).json({ message: "Todo deleted!", deletedTodo });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      message:
        "Server encountered an error while processing the request. Please try again later.",
    });
  }
};

// Get All Todos
const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();

    return res.status(200).json(todos);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      message:
        "Server encountered an error while processing the request. Please try again later.",
    });
  }
};

// Search for a Task
const searchQuery = async (req, res) => {
  try {
    const { query } = req.params;

    if (!query) {
      return res.status(400).json({ message: "Query cannot be empty!" });
    }

    const result = await Todo.find({ title: { $regex: query, $options: "i" } });
    if (!result || result.length === 0) {
      return res.status(404).json({ message: `No tasks found for: ${query}` });
    }

    return res.status(200).json(result);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      message:
        "Server encountered an error while processing the request. Please try again later.",
    });
  }
};

module.exports = {
  addTodo,
  deleteTodo,
  markAsComplete,
  getAllTodos,
  searchQuery,
};
