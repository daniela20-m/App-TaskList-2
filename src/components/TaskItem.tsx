import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

interface TaskItemProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, title, description, completed }) => {
  const { toggleTask, updateTask, deleteTask } = useTaskContext(); // Cambié editTask por updateTask
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleEdit = () => {
    const updatedTask = {
      id,
      title: newTitle,
      description: newDescription,
      completed,
    };
    updateTask(id, updatedTask); // Usamos updateTask aquí
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div onClick={() => toggleTask(id)} className="flex-1 cursor-pointer">
          <h3 className={`${completed ? "line-through" : ""} font-bold`}>{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      )}
      <button onClick={() => deleteTask(id)} className="bg-red-500 text-white px-2 py-1 rounded">
        Delete
      </button>
      <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-2 py-1 rounded">
        Edit
      </button>
    </div>
  );
};

export default TaskItem;
