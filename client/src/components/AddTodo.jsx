import { useState } from "react";
import InputModal from "./InputModal";

const AddTodo = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="bg-green w-52 h-16 cursor-pointer text-xl font-semibold rounded-2xl border-2 border-black"
      >
        New Task
      </button>
      {open ? <InputModal open={open} setOpen={setOpen} /> : null}
    </>
  );
};

export default AddTodo;
