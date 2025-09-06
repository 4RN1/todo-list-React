import Tasks from './component/tasks'
import './App.css'
import { useState } from 'react'

function App() {
  const [task , setTask] = useState('')
  const [tasks, setTasks] = useState([])

  function addTask() {
    if(task.trim() === "") return
    setTasks([...tasks , task])
    setTask('')
  } 

  function deleteTask(indexToDelete) {
    const newTasks = tasks.filter((t, index) => index !== indexToDelete)
    setTasks(newTasks)  // ✅ use setTasks, not setTask
  }

  return (
    <>
      {/* container */}
      <div className="min-h-[540px] w-[540px] mt-28 rounded-[10px] bg-indigo-950 flex flex-col items-center p-4">
        <h1 className='mt-8 text-4xl text-amber-50 font-medium mb-6'>Get Things Done!</h1>

        {/* input + button */}
        <div className='min-w-10/12 flex justify-center border border-indigo-700 rounded-[3px] h-10 mb-5'>
          <input 
            type="text" 
            placeholder='What is the task today?' 
            className='w-full text-amber-50 p-4 bg-transparent outline-none' 
            value={task} 
            onChange={(e) => setTask(e.target.value)} 
          />
          <button 
            className='w-25 bg-indigo-600 outline-none text-amber-50 rounded-[3px] hover:opacity-75 cursor-pointer' 
            onClick={addTask}
          >
            Add Task
          </button>
        </div>

        
        <Tasks tasks={tasks} deleteTask={deleteTask} />
      </div>
    </>
  )
}

export default App