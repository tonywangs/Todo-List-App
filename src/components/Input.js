import React,  { useState } from 'react' 
import firebase from '../Firebase'

function Input() {

  const [task, setTask] = useState('') // <–– creating state variable

  function handleChange(e) {
    setTask(e.target.value) // <–– updating the state value
  }

  function handleClick() {
    const todoRef = firebase.database().ref('todo') // <—— creating a reference in database
    const newTodoRef = todoRef.push()
    const todo = {
      task,
      completed: false
    }
    newTodoRef.set(todo)
    setTask("")             
   }
  
  return (
    <div classname="input"> 
      <input type="text" placeholder="Enter a Todo..." value={task} onChange={handleChange} />
      <button className="add-btn" onClick={handleClick}>
      <i className="fa fa-plus-circle" aria-hidden="true"></i><span id="btn-text">Add Todo</span> 
      </button>
    </div>
  )
}

export default Input