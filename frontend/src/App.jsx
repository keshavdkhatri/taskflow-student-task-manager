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
  const [sortBy, setSortBy] = useState('Newest');

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

  const filteredTasks = tasks
    .filter(task => {
      const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = filterStatus === 'All' || task.status === filterStatus;
      const matchesPriority = filterPriority === 'All' || task.priority === filterPriority;
      return matchesSearch && matchesStatus && matchesPriority;
    })
    .sort((a, b) => {
      if (sortBy === 'Newest') {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else if (sortBy === 'Oldest') {
        return new Date(a.createdAt) - new Date(b.createdAt);
      } else if (sortBy === 'Due Date') {
        if (!a.dueDate && !b.dueDate) return 0;
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate) - new Date(b.dueDate);
      } else if (sortBy === 'Priority') {
        const priorityWeight = { 'High': 3, 'Medium': 2, 'Low': 1 };
        return (priorityWeight[b.priority] || 0) - (priorityWeight[a.priority] || 0);
      }
      return 0;
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
          aria-label="Search tasks"
          placeholder="Search tasks by title..." 
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select 
          className="filter-select"
          aria-label="Filter by Status"
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
          aria-label="Filter by Priority"
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
        >
          <option value="All">All Priorities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <select 
          className="filter-select"
          aria-label="Sort tasks"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
          <option value="Due Date">Due Date</option>
          <option value="Priority">Priority (High to Low)</option>
        </select>
      </div>

      {isLoading ? (
        <div className="loading-state">
          <p>Loading tasks...</p>
        </div>
      ) : error ? (
        <div className="error-state">
          <p>{error}</p>
        </div>
      ) : tasks.length === 0 ? (
        <div className="empty-state">
          <h3>No tasks yet</h3>
          <p>Create your first task to get started!</p>
        </div>
      ) : filteredTasks.length === 0 ? (
        <div className="empty-state">
          <h3>No matching tasks</h3>
          <p>Try adjusting your search or filters.</p>
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
