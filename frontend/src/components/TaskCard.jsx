import React from 'react';

const TaskCard = ({ task, onEdit, onDelete }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'var(--priority-high)';
      case 'Medium': return 'var(--priority-medium)';
      case 'Low': return 'var(--priority-low)';
      default: return 'var(--text-secondary)';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'var(--status-completed)';
      case 'In Progress': return 'var(--status-progress)';
      case 'Pending': return 'var(--status-pending)';
      default: return 'var(--text-secondary)';
    }
  };

  return (
    <div className="task-card">
      <div className="task-header">
        <h3 className="task-title">{task.title}</h3>
      </div>
      
      {task.description && (
        <p className="task-desc">{task.description}</p>
      )}
      
      <div className="task-meta">
        <span 
          className="badge" 
          style={{ 
            backgroundColor: `${getPriorityColor(task.priority)}20`, // 20% opacity background
            color: getPriorityColor(task.priority) 
          }}
        >
          {task.priority}
        </span>
        <span 
          className="badge" 
          style={{ 
            backgroundColor: `${getStatusColor(task.status)}20`,
            color: getStatusColor(task.status) 
          }}
        >
          {task.status}
        </span>
        {task.dueDate && (
          <span className="badge badge-outline">
            {new Date(task.dueDate).toLocaleDateString()}
          </span>
        )}
      </div>

      <div className="task-actions">
        <button className="btn-secondary" onClick={() => onEdit(task)}>Edit</button>
        <button className="btn-secondary btn-danger" onClick={() => onDelete(task._id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;
