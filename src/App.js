import { useRef, useState } from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';

function App() {

  const addTaskRef = useRef()
  const [text,setText] = useState('ADD TASK')
  const [updateTaskId,setUpdateTaskId] = useState(null)

  const focusInputfield = (taskId) => {
    if(addTaskRef.current){
      addTaskRef.current.focus()
      setText('UPDATE TASK')
      // console.log("In app compo",taskId);
      setUpdateTaskId(taskId)
      console.log("isnt'it");
    }
  }
  return (
    <>
      <AddTask ref={addTaskRef} text={text} setText={setText} updateTaskId={updateTaskId} onUpdateClick={focusInputfield}/>
      <TaskList onUpdateClick={focusInputfield}/>
    </>
  );
}

export default App;
