import 'bootstrap/dist/css/bootstrap.min.css'
import { useState , useEffect} from 'react';
import Todo from './components/Todo';

function App() {
  const [tasks,addTask]=useState([])

  useEffect(()=>{
     const getTask = async()=>{
      const dt = await fetchTask()
      addTask(dt)
    }
    getTask()
  },[]);

  const fetchTask= async()=>{
    const res= await fetch('http://localhost:5000/tasks')
    const data= await res.json()
    return data
  }
  const deleteTask=async(id)=>{
    await fetch(`http://localhost:5000/tasks/${id}`,{ method: 'DELETE'})
    
    addTask(tasks.filter((task)=>task.id !== id));
  }
  const onAdd= async(task)=>{
    const id=Math.floor(Math.random()*100);
    const newTask={id,...task};
    const res=await fetch('http://localhost:5000/tasks/',
    { 
      method: "POST" ,
       headers:{
         "Content-type" : "application/json"
        }, 
        body: JSON.stringify(newTask)
      })
    const data=await res.json()
    addTask([...tasks,data])
  }
  return (
    <div >
    <Todo onAdd={onAdd} tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
