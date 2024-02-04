// App.js
import { useRef, useState } from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';

function App() {
  const addTaskRef = useRef();
  const [text, setText] = useState('ADD TASK');
  const [updateTaskId, setUpdateTaskId] = useState(null);
  // const [isCancelClicked, setIsCancelClicked] = useState(false);
  const [updateDone, setUpdateDone] = useState(false);

  const onUpdateClick = (taskId) => {
    if (addTaskRef.current) {
      addTaskRef.current.focus();
      setText('UPDATE TASK');
      setUpdateTaskId(taskId);
      // setIsCancelClicked(false);
    }
  };

  const onCancelUpdateClick = () => {
    setText('ADD TASK');
    // setIsCancelClicked(true);
  };

  return (
    <>
      <AddTask
        ref={addTaskRef}
        text={text}
        setText={setText}
        updatedTaskId={updateTaskId}
        // isCancelClicked={isCancelClicked}
        setUpdateDone={setUpdateDone}
      />
      <TaskList
        onUpdateClick={onUpdateClick}
        onCancelUpdateClick={onCancelUpdateClick}
        updateDone={updateDone}
      />
    </>
  );
}

export default App;
