import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks, title, remove}) => {
    return (
        <div>
          <h1 style={{textAlign: 'center'}}>{title}</h1>
          {tasks.map( (task) =>
          <TaskItem task={task} key={task.id} tasks={tasks} remove={remove}/>
          )}
        </div>
    )
}

export default TaskList