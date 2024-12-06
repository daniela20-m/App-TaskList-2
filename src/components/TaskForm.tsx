import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

const TaskForm: React.FC = () => {
  const { addTask } = useTaskContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description) {
      addTask(title, description);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-center mb-4">Add a New Task</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
        />
        <button
          type="submit"
          className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
