import React, {useState, useEffect, useMemo} from 'react'
import style from './Style/app.css'
import TaskList from './Components/TaskList'
import TaskForm from './Components/TaskForm'
import MyInput from './UI/Input/MyInput'

function App() {
  const [tasks, setTask] = useState([])

  useEffect(() => {
    if (localStorage.getItem('tasks')) {
      setTask(JSON.parse(localStorage.getItem('tasks')))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addNewTask = (newTask) => {
    setTask([...tasks, newTask])
  }

  const removeTask = (newTaskList) => {
    setTask(newTaskList)
  }

  const clearList = () => {
    setTask([])
    localStorage.removeItem('tasks')
  }

  const [search, setSeach] = useState('')

  const searchTasks = useMemo(() => {
    return [...tasks].filter(task => {
      task.title.includes(search)
    })
  }, [search, tasks])

  return (
    <div className="App">
      <TaskForm callback={addNewTask} clearCallback={clearList}/>
      {/* <hr style={{margin: "15px 0 10px 0"}}></hr>
      <MyInput
        value={search}
        onChange={e => setSeach(e.target.value)}
        placeholder='Найти задачу'
      /> */}
      <TaskList tasks={tasks} title='Список дел' remove={removeTask}/>
    </div>
  )    
}

export default App
