import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

interface TaskListProps {
  filter: 'all' | 'completed' | 'pending';
}

const TaskList: React.FC<TaskListProps> = ({ filter }) => {
  const { tasks, toggleTask, updateTask, deleteTask } = useTaskContext();
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  const handleUpdate = (id: number) => {
    const updatedTask = { id, title: editedTitle, description: editedDescription, completed: false };
    updateTask(id, updatedTask);
    setEditingTaskId(null); // Exit edit mode
    setEditedTitle('');
    setEditedDescription('');
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4 text-left">Title</th>
            <th className="p-4 text-left">Description</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task) => (
            <tr key={task.id} className="border-b hover:bg-gray-50">
              <td className="p-4">
                {editingTaskId === task.id ? (
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg w-full"
                  />
                ) : (
                  task.title
                )}
              </td>
              <td className="p-4">
                {editingTaskId === task.id ? (
                  <textarea
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg w-full h-32 resize-none"
                  />
                ) : (
                  task.description
                )}
              </td>
              <td className="p-4">
                <button
                  className={`py-1 px-2 rounded ${task.completed ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
                  onClick={() => toggleTask(task.id)}
                >
                  {task.completed ? 'Completed' : 'Pending'}
                </button>
              </td>
              <td className="p-4">
                {editingTaskId === task.id ? (
                  <button
                    onClick={() => handleUpdate(task.id)}
                    className="py-1 px-2 bg-blue-500 text-white rounded"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => { setEditingTaskId(task.id); setEditedTitle(task.title); setEditedDescription(task.description); }}
                    className="py-1 px-2 bg-yellow-500 text-white rounded"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => deleteTask(task.id)}
                  className="ml-2 py-1 px-2 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
