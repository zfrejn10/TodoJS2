import React from 'react'
import MyButton from '../UI/Button/MyButton'
import MyInput from '../UI/Input/MyInput'
import { useState } from 'react'

const TaskForm = ({callback, clearCallback}) => {

    const [task, setTask] = useState({title: '', body: ''})
    

    const addTask = (e) => {
      e.preventDefault()
      if (task.title && task.body) {
        const newTask = {
        ...task,
        id: Date.now(),
        done: false
      }
      callback(newTask)
      setTask({title: '', body: ''})
      }
      
    }

    const clearTaskList = (e) => {
      e.preventDefault()
      clearCallback()
    }

    return (
        <form>
          <MyInput 
            value={task.title}
            onChange={e => setTask({...task, title: e.target.value})}
            placeholder='Введите дело'
          ></MyInput>
          <MyInput 
            value={task.body}
            onChange={e => setTask({...task, body: e.target.value})}
            placeholder='Введите описание'
          ></MyInput>
          <MyButton
            onClick={addTask}
          >Добавить</MyButton>
          <MyButton
            onClick={clearTaskList}
            style={{marginLeft: 15}}
          >Очистить список</MyButton>
        </form>
    )
}

export default TaskForm