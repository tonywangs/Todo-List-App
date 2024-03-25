import React from 'react'
import firebase from '../Firebase'

function Todo({ todo }) {
  const completedStyle = {
    fontStyle: "italic",
    opacity: 0.4,
    textDecoration: "line-through"
  }

  function completeTodo() {
    const todoRef = firebase.database().ref('todo')
    todoRef.child(todo.id).update({
      completed: !todo.completed
    })
  }
  function deleteTodo() {
    const todoRef = firebase.database().ref('todo')
    todoRef.child(todo.id).remove()
  }

  return (
    <div className="todo-item">
      <div className="task">
        <input type="checkbox" onClick={ completeTodo }checked={todo.completed}/>
        <p style={todo.completed ? completedStyle:null} >{todo.task}</p>
      </div>
      <div className="buttons">
        <button className="del-btn" onClick={ deleteTodo }><i className="fa fa-trash" aria-hidden="true"></i></button>
      </div>
    </div>
  )
}

export default Todo
