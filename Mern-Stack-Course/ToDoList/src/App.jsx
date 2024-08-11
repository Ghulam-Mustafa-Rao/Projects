import { useEffect, useState } from 'react';
import './App.css'
import Task from './Components/Task'

function App() {

  const [tasks, setTasks] = useState(loadTasks);

  const [input, setInput] = useState("")
  function handleInput(e)
  {
    setInput(e.target.value);
    console.log(input);
  }

  function AddTask()
  {
    if (input.trim() !== "") {
      const newTask = {
        key: tasks.length, 
        id: tasks.length, // generate an id based on the array length
        value: input
      };
      setTasks([...tasks, newTask]); // Add the new task to the array
      setInput(""); // Clear the input field after adding
      console.log(tasks);
    }

  }
 
  function handleDelete(id) {
    setTasks(tasks.filter(task => task.id != id)); // Remove the task by id
  }

  function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  }
  
  // Handle changes to tasks and save to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function OnTaskValueChanged(id,newValue)
  {
    const updatedTasks = tasks.map(task =>{
      if(task.id === id )
        { 
          return { ...task, value: newValue }
        }
      else
          return task
  });
    setTasks(updatedTasks);
  }
 
  return (
    <>
       <div className='border-1 border-solid bg-white shadow-2xl p-10 max-w-[600px] m-auto'>
        <h1 className='font-extrabold text-4xl'>TODO LIST</h1>
        <hr />
        <div className='my-5 flex flex-row flex-erap'>
        <input type='text' className='bg-gray-50 border border-black text-gray-900 text-sm rounded-lg w-full p-2.5'
              value={input} onChange={handleInput} />
        <button onClick={AddTask} className='ml-2 bg-[#1adb4e] p-2.5 px-5 sm:px-20 rounded-xl'> ADD </button>
        
        </div>
        <hr />
        {
          tasks.length > 0 ?
        <div className='bg-gray-50 border border-black text-gray-900 text-sm rounded-lg w-full p-2.5'>
        {tasks.map(task => (
          <Task 
            key={task.id} 
            id={task.id} 
            value={task.value} 
            handleDelete={handleDelete} 
            OnTaskValueChanged = {OnTaskValueChanged}
          />
        ))}
        </div>
        :
        <span></span>
        } 
       </div>
    </>
  )
}

<<<<<<< HEAD
export default App
=======
export default React.memo(App)
>>>>>>> 1aac80a (Weather On React Added)
