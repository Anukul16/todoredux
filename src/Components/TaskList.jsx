import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../Features/Todos/todoSlice';
import EditNoteTwoToneIcon from '@mui/icons-material/EditNoteTwoTone';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Checkbox from '@mui/material/Checkbox';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

const TaskList = ({ onUpdateClick, onCancelUpdateClick, updateDone }) => {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();

  const [updateClickedStates, setUpdateClickedStates] = useState(tasks.map(() => false));
  const [updatingTaskId, setUpdatingTaskId] = useState(null);

  useEffect(() => {
    // Reset updateClickedStates when updateDone changes
    if (updateDone) {
      setUpdateClickedStates(tasks.map(() => false));
      setUpdatingTaskId(null);
    }
  }, [updateDone, tasks]);

  const handleDelete = (taskId) => {
    dispatch(removeTask(taskId));
  };

  const handleUpdate = (taskId, taskIndex) => {
    if (updatingTaskId) {
      alert('Plz cancel or update the task :)');
    } else {
      setUpdateClickedStates((prevStates) => {
        const newStates = [...prevStates];
        newStates[taskIndex] = true;

        return newStates;
      });
      setUpdatingTaskId(true);
      onUpdateClick(taskId);
    }
  };

  const cancelUpdate = (taskId, taskIndex) => {
    setUpdateClickedStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[taskIndex] = false;
      return newStates;
    });
    setUpdatingTaskId(null);
    onCancelUpdateClick(taskId);
  };

  return (
    <ul style={styles.taskList}>
      {tasks.map((task, index) => (
        <li key={task.id} style={styles.taskItem}>
          <Checkbox style={styles.checkbox} />
          <span style={styles.taskText}>{task.text}</span>
          {updateClickedStates[index] ? (
            <CloseSharpIcon onClick={() => cancelUpdate(task.id, index)} style={styles.updateButton} />
          ) : (
            <EditNoteTwoToneIcon onClick={() => handleUpdate(task.id, index)} style={styles.updateButton} />
          )}
          <DeleteRoundedIcon onClick={() => handleDelete(task.id)} style={styles.deleteButton} />
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
    position: 'relative',
    transition: 'background-color 0.3s ease',
  },
  taskItemHover: {
    background: '#2980b9',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    marginRight: 10,
  },
  checkbox: {
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
    transition: 'color 0.3s ease',
  },
  updateButtonHover: {
    color: '#e74c3c',
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
    transition: 'background-color 0.3s ease',
  },
  deleteButtonHover: {
    background: '#c0392b',
  },
};

export default TaskList;