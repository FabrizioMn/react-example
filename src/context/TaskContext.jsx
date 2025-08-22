import { tasks as data } from "../data/task";
import { useState, useEffect,createContext } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((n) => n.id != taskId));
  }

  return (
    <TaskContext.Provider value={{ createTask, deleteTask, tasks }}>
      <>{props.children}</>
    </TaskContext.Provider>
  );
}