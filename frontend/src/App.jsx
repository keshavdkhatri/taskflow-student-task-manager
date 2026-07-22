import React, { useState, useEffect } from 'react';
import './index.css';
import TaskCard from './components/TaskCard';
import TaskForm from './components/TaskForm';

const API_BASE_URL = 'http://localhost:5000/api';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formError, setFormError] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterPriority, setFilterPriority] = useState('All');

  const handleFormSubmit = async (taskData) => {
    setFormError(null);
    try {
      const isEdit = Boolean(taskData._id);
      const url = isEdit ? `${API_BASE_URL}/tasks/${taskData._id}` : `${API_BASE_URL}/tasks`;
      const method = isEdit ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });

      if (!response.ok) {
        throw new Error(`Failed to ${isEdit ? 'update' : 'create'} task on server`);
      }

      const savedTask = await response.json();
      
      setTasks(prevTasks => {
        if (isEdit) {
          // Replace the old task with the updated one
          return prevTasks.map(t => t._id === savedTask._id ? savedTask : t);
        } else {
          // Add the new task to the top
          return [savedTask, ...prevTasks];
        }
      });
      
      setIsFormOpen(false); // Close modal on success
      setTaskToEdit(null); // Reset edit state
    } catch (err) {
      setFormError(err.message);
    }
  };

  const handleDeleteTask = async (taskId) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;

    try {
      const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete task');
      }

      // Remove the deleted task from local state
      setTasks(prevTasks => prevTasks.filter(t => t._id !== taskId));
    } catch (err) {
      alert(err.message);
    }
  };


  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/tasks`);
        if (!response.ok) {
          throw new Error('Failed to fetch tasks from server');
        }
        const data = await response.json();
        setTasks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'All' || task.status === filterStatus;
    const matchesPriority = filterPriority === 'All' || task.priority === filterPriority;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <div className="app-container">
      <header className="dashboard-header">
        <div>
          <h1>TaskFlow</h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Organize your academic and daily tasks</p>
        </div>
        <button 
          className="btn-primary" 
          onClick={() => {
            setTaskToEdit(null);
            setIsFormOpen(true);
          }}
        >
          + New Task
        </button>
      </header>

      <div className="dashboard-controls">
        <input 
          type="text" 
          placeholder="Search tasks by title..." 
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select 
          className="filter-select"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <select 
          className="filter-select"
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
        >
          <option value="All">All Priorities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <select className="filter-select">
          <option value="asc">Due Date (Asc)</option>
          <option value="desc">Due Date (Desc)</option>
        </select>
      </div>

      {isLoading ? (
        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
          <p>Loading tasks...</p>
        </div>
      ) : error ? (
        <div style={{ textAlign: 'center', padding: '3rem', color: '#ef4444', backgroundColor: '#fef2f2', borderRadius: '8px' }}>
          <p>{error}</p>
        </div>
      ) : tasks.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
          <p>No tasks found. Create a new task to get started!</p>
        </div>
      ) : filteredTasks.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
          <p>No matching tasks found.</p>
        </div>
      ) : (
        <div className="tasks-grid">
          {filteredTasks.map((task) => (
            <TaskCard 
              key={task._id} 
              task={task} 
              onEdit={(t) => {
                setTaskToEdit(t);
                setIsFormOpen(true);
              }}
              onDelete={handleDeleteTask}
            />
          ))}
        </div>
      )}

      {isFormOpen && (
        <TaskForm 
          onClose={() => {
            setIsFormOpen(false);
            setFormError(null);
            setTaskToEdit(null);
          }} 
          onSubmit={handleFormSubmit}
          submitError={formError}
          initialData={taskToEdit}
        />
      )}
    </div>
  );
}

export default App;
