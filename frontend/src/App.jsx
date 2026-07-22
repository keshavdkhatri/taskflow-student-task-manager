import React, { useState } from 'react';
import './index.css';
import TaskCard from './components/TaskCard';
import TaskForm from './components/TaskForm';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleCreateTask = (newTaskData) => {
    console.log('Task submitted (frontend only):', newTaskData);
    setIsFormOpen(false); // Close modal on submit
  };

  // Dummy data for initial UI layout
  const dummyTasks = [
    {
      _id: '1',
      title: 'Complete React Dashboard',
      description: 'Build the initial UI layout for the TaskFlow application using React and plain CSS.',
      priority: 'High',
      status: 'In Progress',
      dueDate: new Date(new Date().getTime() + 86400000).toISOString(),
    },
    {
      _id: '2',
      title: 'Review MongoDB Schema',
      description: 'Check if the Mongoose schema covers all required fields from the PRD.',
      priority: 'Medium',
      status: 'Pending',
      dueDate: new Date(new Date().getTime() + 86400000 * 2).toISOString(),
    },
    {
      _id: '3',
      title: 'Set up Express API',
      description: 'Implement CRUD routes and controllers for the backend API.',
      priority: 'High',
      status: 'Completed',
      dueDate: new Date(new Date().getTime() - 86400000).toISOString(),
    },
    {
      _id: '4',
      title: 'Walk the dog',
      description: 'Take Max to the park for his evening walk.',
      priority: 'Low',
      status: 'Pending',
    }
  ];

  return (
    <div className="app-container">
      <header className="dashboard-header">
        <div>
          <h1>TaskFlow</h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Organize your academic and daily tasks</p>
        </div>
        <button className="btn-primary" onClick={() => setIsFormOpen(true)}>
          + New Task
        </button>
      </header>

      <div className="dashboard-controls">
        <input 
          type="text" 
          placeholder="Search tasks by title..." 
          className="search-input"
        />
        <select className="filter-select">
          <option value="All">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <select className="filter-select">
          <option value="asc">Due Date (Asc)</option>
          <option value="desc">Due Date (Desc)</option>
        </select>
      </div>

      <div className="tasks-grid">
        {dummyTasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>

      {isFormOpen && (
        <TaskForm 
          onClose={() => setIsFormOpen(false)} 
          onSubmit={handleCreateTask} 
        />
      )}
    </div>
  );
}

export default App;
