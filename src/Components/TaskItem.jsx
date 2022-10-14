import React from 'react'
import MyButton from '../UI/Button/MyButton'

const TaskItem = ({task, remove, tasks}) => {
    const removeTask = () => {
        const removeTaskList = [...tasks].filter(item => {
            return item.id !== task.id
        })
        remove(removeTaskList)
    }

    const doneBtn = () => {
        const doneTask = [...tasks].map(item => {
            if (item.id === task.id) {
                item.done = !item.done
                return item 
            } 
            return item
        })
        remove(doneTask)
    }

    return (
        <div key={task.id} className={"task" + " " + task.done}>
            <div className="taskContent">
                <strong>{task.title}</strong>
                <div>{task.body}</div>
            </div>
            <div className="taskBtns">
                <MyButton 
                    onClick={doneBtn}
                    style={{marginRight: 15}}
                >Готово</MyButton>
                <MyButton
                  onClick={removeTask}
                >Удалить</MyButton>
            </div>
        </div>
    )
}

export default TaskItem