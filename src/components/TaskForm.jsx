import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const { createTask } = useContext(TaskContext);

  const mandarForm = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={mandarForm} className="bg-slate-800 p-10 mb-4 rounded-md ">
      <h1 className="text-2xl font-bold text-white mb-3 text-center">Crea tu Tareas</h1>
        <input className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
        className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
       <div className="flex justify-center">
         <button className="bg-red-500 hover:bg-red-300 px-10 py-2 rounded-md text-white ">Guardar</button>
       </div>
      </form>
    </div>
  );
}

export default TaskForm;
