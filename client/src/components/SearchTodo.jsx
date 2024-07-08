// Package Imports
import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import SearchIcon from "@mui/icons-material/Search";

const SearchTodo = ({ searchTodos }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    try {
      await searchTodos(query);
    } catch (err) {
      toast.error(err.message);
      console.log(err.message);
    }
  };

  return (
    <section className="w-full flex">
      <input
        type="text"
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search a Task..."
        className="w-3/4 h-16 px-5 text-lg rounded-l-2xl bg-yellow text-black font-semibold placeholder-slate-700 border-2 border-black"
      />
      <span className="w-16 h-16 flex items-center justify-center bg-black text-white rounded-r-2xl cursor-pointer">
        <SearchIcon fontSize="large" onClick={handleSearch} />
      </span>
    </section>
  );
};

export default SearchTodo;
SearchTodo.propTypes = {
  searchTodos: PropTypes.func,
};
