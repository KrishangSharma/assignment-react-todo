import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

const InputModal = ({ open, setOpen }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async () => {
    try {
      const url = "http://localhost:5000/todo/new";
      // Data to send
      if (!title) {
        toast.error("Todo title cannot be empty!");
        return;
      }
      const data = {
        title,
      };
      // Make the request
      const res = await axios.post(url, data, {
        config: {
          "Content-type": "application/json",
        },
      });

      setTitle("");
      setOpen(false);
      location.reload();
    } catch (err) {
      toast.error(err.message);
      console.log(err.message);
    }
  };

  return (
    <>
      {open ? (
        <>
          <div className="absolute w-full h-full flex items-center top-0 left-0 bg-black/60 ">
            <div className="w-1/2 p-5 m-auto flex flex-col gap-5 bg-background ">
              <div className="flex items-center justify-between ">
                <h2 className="text-3xl font-semibold">Add a Task</h2>
                <span className="w-16 h-16 flex items-center cursor-pointer ">
                  <CloseIcon fontSize="large" onClick={() => setOpen(!open)} />
                </span>
              </div>
              <div className="flex ">
                <input
                  type="text"
                  name="query"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Add a Task..."
                  className="w-5/6 h-16 px-5 text-lg rounded-l-2xl bg-yellow text-black font-semibold placeholder-slate-700 border-2 border-black"
                />
                <span className="w-16 h-16 flex items-center justify-center bg-black text-white rounded-r-2xl cursor-pointer">
                  <DoneIcon fontSize="large" onClick={handleSubmit} />
                </span>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default InputModal;
