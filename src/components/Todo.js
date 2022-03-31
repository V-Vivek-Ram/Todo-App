import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { useState } from 'react'
import TaskList from './TaskList'

const Todo = ({tasks,onDelete,onAdd}) => {

    const [task,setTask]=useState('')
    const [time,setTime]=useState('')

    const onClick=()=>{
        if(!task){
            alert("Enter a task !!!")
            return
        }
        
        onAdd({task,time})
        setTask('')
        setTime('')
    }
  return (
    <div className='box text-center container-fluid'>
      <h1 className='text-center'>Todo List</h1>
      <label className='my-3 mx-2'><strong>TASK</strong></label>
      <input type="text" value={task} onChange={(t)=>setTask(t.target.value)}/><br></br>
      <label className='my-3 mx-2'><strong>TIME</strong></label>
      <input type="text" value={time} onChange={(ti)=>setTime(ti.target.value)}/><br></br>
      <button className='btn btn-success' onClick={onClick}>Add</button>
      <TaskList tasks={tasks} onDelete={onDelete}/>
    </div>
  )
}

export default Todo