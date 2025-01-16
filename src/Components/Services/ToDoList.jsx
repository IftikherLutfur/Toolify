import { useState } from "react";
import { NavLink } from "react-router-dom";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]); // Corrected to an array
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
      <nav aria-label="breadcrumb" className="w-full flex justify-center p-4 dark:bg-gray-100 dark:text-gray-800">
	<ol className="flex h-8 space-x-2">
		<li className="flex items-center">
			<NavLink to={'/'}><a rel="noopener noreferrer"  title="Back to homepage" className="hover:underline">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 pr-1 dark:text-gray-600">
					<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
				</svg>
			</a></NavLink>
		</li>
		<li className="flex items-center space-x-2">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-400">
				<path d="M32 30.031h-32l16-28.061z"></path>
			</svg>
			<a rel="noopener noreferrer" className="flex items-center px-1 capitalize hover:underline">To Do List</a>
		</li>
		
	
	</ol>
</nav>
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
