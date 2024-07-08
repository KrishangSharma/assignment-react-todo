import axios from "axios";
import Todo from "./Todo";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // Get the Todos
  const getTodos = async () => {
    try {
      const url = "http://localhost:5000/todo/all";

      const res = await axios.get(url);

      setTodos(res.data);
    } catch (err) {
      toast.error(err.message);
      console.log(err.message);
    }
  };

  // Sort the todos based on completion
  const sortedTodos = todos.sort((a, b) => a.isCompleted - b.isCompleted);

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="w-1/2 m-auto py-5 flex flex-col gap-4">
      <h2 className="text-3xl font-semibold">
        {todos.length > 0 ? "Your Todos" : "Nothing to show here :("}
      </h2>
      {sortedTodos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
