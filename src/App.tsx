import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./context/TaskContext";
import './index.css';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all'); // Filtro de tareas

  // Cambiar el modo de la pantalla (claro u oscuro)
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("bg-gray-900", "text-white");
      document.body.classList.remove("bg-gray-100", "text-gray-900");
    } else {
      document.body.classList.add("bg-gray-100", "text-gray-900");
      document.body.classList.remove("bg-gray-900", "text-white");
    }
  }, [isDarkMode]);

  return (
    <TaskProvider>
      <div className="min-h-screen p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-center text-3xl font-bold">Task List</h1>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 bg-gray-300 rounded-full"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Filtro de tareas */}
        
        <div className="mb-4 flex justify-center space-x-4">
           <button
            className={`p-3 rounded-lg text-white ${filter === 'all' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'}`}
            onClick={() => setFilter('all')}
         >
        Todas
           </button>
          <button
            className={`p-3 rounded-lg text-white ${filter === 'completed' ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-300 hover:bg-gray-400'}`}
             onClick={() => setFilter('completed')}
          >
         Completadas
           </button>
          <button
            className={`p-3 rounded-lg text-white ${filter === 'pending' ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-300 hover:bg-gray-400'}`}
            onClick={() => setFilter('pending')}
          >
         Pendientes
        </button>
      </div>


        {/* Formulario para agregar nuevas tareas */}
        <TaskForm />

        {/* Lista de tareas filtrada */}
        <TaskList filter={filter} />
      </div>
    </TaskProvider>
  );
};

export default App;
