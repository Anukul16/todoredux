import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../Features/Todos/todoSlice';
import EditNoteTwoToneIcon from '@mui/icons-material/EditNoteTwoTone';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const TaskList = ({ onUpdateClick }) => {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(removeTask(taskId));
  };

  const handleUpdate = (taskId) => {
    console.log("Update Button clicked..", taskId);
    onUpdateClick(taskId);
  };

  return (
    <ul style={styles.taskList}>
      {tasks.map((task) => (
        <li key={task.id} style={styles.taskItem}>
          <span style={styles.taskText}>{task.text}</span>
          <EditNoteTwoToneIcon onClick={() => handleUpdate(task.id)} style={styles.updateButton}/>

          <DeleteRoundedIcon onClick={() => handleDelete(task.id)} style={styles.deleteButton}/>
        </li>
      ))}
    </ul>
  );
};

const styles = {
  taskList: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
  },
  taskItem: {
    display: 'flex',
    alignItems: 'center',
    width: '50%',
    justifyContent: 'center',
    marginBottom: 10,
    padding: '10px',
    border: '1px solid #ecf0f1',
    borderRadius: '5px',
    background: '#3498db',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    color: 'white',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    marginRight: 10,
  },
  updateButton: {
    fontSize: 24,
    backgroundColor: '#2ecc71',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    padding: '8px 12px',
    marginLeft: '10px',
  },
  deleteButton: {
    fontSize: 24, 
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    padding: '8px 12px',
    marginLeft: '10px',
  },
};

export default TaskList