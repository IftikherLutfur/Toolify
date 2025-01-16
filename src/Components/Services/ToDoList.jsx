import { useState } from "react";
import { NavLink } from "react-router-dom";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Handle input change
  const handleInputChange = (event) => setNewTask(event.target.value);

  // Add new task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
  };

  // Delete task
  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  // Move task up
  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
      setTasks(updatedTasks);
    }
  };

  // Move task down
  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6">
      {/* Navigation */}
      <nav aria-label="breadcrumb" className="bg-white shadow py-4">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <NavLink to="/" className="hover:underline text-blue-600">
                Home
              </NavLink>
            </li>
            <li>/</li>
            <li className="text-gray-600">To Do List</li>
          </ol>
        </div>
      </nav>

      {/* Title */}
      <h1 className="text-center text-3xl font-bold mt-6">To Do List</h1>

      {/* Add Task Section */}
      <div className="flex justify-center mt-8">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter a task"
            value={newTask}
            onChange={handleInputChange}
            className="border rounded-lg p-2 w-64 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTask}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Task
          </button>
        </div>
      </div>

      {/* Task List */}
      <div className="mt-8">
        <ul className="max-w-2xl mx-auto space-y-4">
          {tasks.map((task, index) => (
            <li key={index} className="bg-white shadow rounded-lg flex items-center justify-between p-4">
              <span className="text-lg font-medium">{task}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => moveTaskUp(index)}
                  className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label={`Move ${task} up`}
                >
                  ☝️
                </button>
                <button
                  onClick={() => moveTaskDown(index)}
                  className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label={`Move ${task} down`}
                >
                  👇
                </button>
                <button
                  onClick={() => deleteTask(index)}
                  className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                  aria-label={`Delete ${task}`}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
