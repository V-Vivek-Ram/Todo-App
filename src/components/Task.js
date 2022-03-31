import React from 'react'
import {FaTimes} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

const Task = ({ task, onDelete }) => {
  return (
    <div className='task container-fluid highlight'>
       <h3>{task.task}
       <FaTimes className='float-end icon' style={{ color: 'green', width: 10}} onClick={()=>onDelete(task.id)}/></h3>
       <p>{task.time}</p>
    </div>
  )
}

export default Task