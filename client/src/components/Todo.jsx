// Package Imports
import axios from "axios";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import ReplayIcon from "@mui/icons-material/Replay";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Todo = ({ todo }) => {
  const completeTodo = async (id) => {
    try {
      const url = `http://localhost:5000/todo/${id}`;

      // Make the req
      const res = await axios.patch(url);
      location.reload();
    } catch (err) {
      toast.error(err.message);
      console.log(err.message);
    }
  };
  const deleteTodo = async (id) => {
    try {
      const url = `http://localhost:5000/todo/${id}`;

      // Make the req
      const res = await axios.delete(url);
      location.reload();
    } catch (err) {
      toast.error(err.message);
      console.log(err.message);
    }
  };

  return (
    <div
      className={`group w-full p-2 text-lg font-medium flex items-center justify-between rounded-2xl ${
        todo.isCompleted ? "bg-pink-800" : "bg-purple"
      } border-2 border-black`}
    >
      <p className={`${todo.isCompleted ? "line-through" : null}`}>
        {" "}
        {todo.title}{" "}
      </p>
      <div className="w-32 flex items-center justify-between todo-actions opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <span className="bg-green p-3 rounded-xl cursor-pointer border-2 border-black">
          {todo.isCompleted ? (
            <ReplayIcon onClick={() => completeTodo(todo._id)} />
          ) : (
            <CheckCircleOutlineIcon onClick={() => completeTodo(todo._id)} />
          )}
        </span>
        <span className="bg-red p-3 rounded-xl cursor-pointer border-2 border-black">
          <DeleteIcon onClick={() => deleteTodo(todo._id)} />
        </span>
      </div>
    </div>
  );
};

export default Todo;

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
};
