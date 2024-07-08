// Component Import
import axios from "axios";
import AddTodo from "./AddTodo";
import { useState } from "react";
import { toast } from "react-toastify";
import SearchTodo from "./SearchTodo";
import SearchResult from "./SearchResult";

const Header = () => {
  const [result, setResult] = useState([]);

  // Get the Todos
  const searchTodos = async (q) => {
    try {
      const url = `http://localhost:5000/todo/search/${q}`;

      const res = await axios.get(url);

      setResult(res.data);
    } catch (err) {
      toast.error(err.message);
      console.log(err.message);
    }
  };
  return (
    <header className="w-1/2 mx-auto">
      <h1 className="text-5xl font-bold">Things to do:</h1>
      <div className="w-full py-12 m-auto flex items-center gap-10 justify-between border-b-2 border-black">
        <SearchTodo searchTodos={searchTodos} />
        <AddTodo />
      </div>
      <SearchResult result={result} />
    </header>
  );
};

export default Header;
