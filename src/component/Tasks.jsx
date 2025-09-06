function Tasks({ tasks, deleteTask }) {
  return (
    <div className="flex flex-col gap-2 w-10/12">
      {tasks.map((t, index) => (
        <div
          key={index}
          className="flex justify-between items-center bg-indigo-600 rounded-[3px] min-h-10 px-3 text-amber-50 mb-2"
        >
          <span>{t}</span>
          <div className="flex gap-2">
            <button 
              className="hover:text-indigo-300 cursor-pointer" 
              onClick={() => deleteTask(index)}  
            >
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Tasks
