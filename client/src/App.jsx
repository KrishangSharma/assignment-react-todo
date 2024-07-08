// Package Imports
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { ToastContainer } from "react-toastify";
// Toastify CSS
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="w-full h-screen py-5 bg-background text-black">
      <ToastContainer />
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
