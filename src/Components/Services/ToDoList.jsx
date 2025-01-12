import { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState(["Eat breakfast", "Lunch on time"]); // Corrected to an array
  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim()) { // Avoid adding empty tasks
      setTasks((t) => [...t, newTask]);
      setNewTask(''); // Clear input after adding
    }
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const newTasks = [...tasks];
      const temp = newTasks[index];
      newTasks[index] = newTasks[index - 1];
      newTasks[index - 1] = temp;
      setTasks(newTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const newTasks = [...tasks];
      const temp = newTasks[index];
      newTasks[index] = newTasks[index + 1];
      newTasks[index + 1] = temp;
      setTasks(newTasks);
    }
  }

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold">To Do List</h1>

      <div className="flex justify-center mt-5">
        <div>
          <input
            type="text"
            placeholder="Enter a task"
            value={newTask}
            onChange={handleInputChange}
            className="border-[1px] p-1 border-black  rounded-sm"
          />
          <button
            className="add-btn border-[1px] p-1 bg-blue-600 text-white px-3"
            onClick={addTask}
          >
            Add
          </button>
        </div>
      </div>

      <div className="mt-5">
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className=" items-center text-white py-1">
              <div className="flex bg-black gap-7 justify-center">
             <div className="py-3"> <span className="text-xl font-semibold ">{task}</span></div>
              <div className="py-3 text-xl">
                <button
                  className="mr-2 bg-red-600"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
                <button
                  className="mr-2 text-xl bg-blue-500"
                  onClick={() => moveTaskUp(index)}
                >
                 ☝️
                </button>
                <button className=" text-xl bg-blue-500"
                  onClick={() => moveTaskDown(index)}
                >
                  👇
                </button>
              </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
