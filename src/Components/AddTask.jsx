
import React, { useState, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from '../Features/Todos/todoSlice';

const AddTask = ({ text, setText, updatedTaskId, setUpdateDone }, ref) => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task === '') {
      alert('Please enter some task');
      return;
    }
    if (text === 'UPDATE TASK') {
      dispatch(updateTask({ id: updatedTaskId, text: task }));
      setText('ADD TASK');
      setUpdateDone(true);
    } else {
      dispatch(addTask(task));
    }

    setTask('');
  };

  return (
    <div style={styles.container}>
      <div style={styles.centeredContent}>
        <input
          type="text"
          placeholder="Enter task name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
          ref={ref}
        />
        <button onClick={handleAddTask} style={styles.button}>
          {text}
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: '#2c3e50',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  centeredContent: {
    textAlign: 'center',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #3498db',
    borderRadius: '4px',
    marginRight: '10px',
    outline: 'none',
    color: '#2c3e50',
  },
  button: {
    padding: '10px 15px',
    fontSize: '16px',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default forwardRef(AddTask);