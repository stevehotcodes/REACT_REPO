import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [tasks, setTasks] = useState([
    {
       id:1,
       taskContent:'Watch a movie'
    },
    {
      id:2,
      taskContent:'Revisit on the concept of Linux fundamentals'
    }
  ]);
  

  const handleSubmit=(e)=>{
      e.preventDefault();
      setTasks([...tasks,{id:tasks.length+1,taskContent:e.target[0].value}])
      console.log(tasks)
      e.target[0].value=''

  }
  const handleDelete=(taskId)=>{
    // e.preventDefault()
    const newTask=tasks.map((task)=>{
      if(task.id===taskId){
          tasks.splice(task.id,1)
          console.log(task.id);
          return {...task}
      }
      return task
    })

    setTasks(newTask)
  }
  





  return (
    <div className='container'>
      <header>
          <h1>Hotcode's Todo List</h1>
          <form onSubmit={handleSubmit} >
            <input type="text" placeholder='Add task' />
              <button type="submit">Add task</button>
          </form>
      </header>
      <main className='tasks'>
        {
            tasks&&tasks.map((task)=>{
              return(
                <div key={task.id} className='task'>
                    <div className='task-content'>{task.taskContent}</div>
                    <div className='task-actions'>
                        <button type="button" className='Delete' onClick={()=>handleDelete(task.id)}>
                            Delete
                        </button>
                        <button type="button" className='complete'>
                          Mark as complete
                        </button>

                    </div>
                </div>
              )
            })
        }
          
      </main>


    </div>
  )
}

export default App
