import React from 'react'
import TodoItem from "./TodoItem";
const todos = (props) => {
  return (
    <div className="Container">
      <h3 className="my-10">Todos </h3>
      {props.todos.length==0 ? "No Tasks Hurraayyy!!": 
      props.todos.map((todo)=>{
        return <TodoItem todo={todo} key={todo.sr} onDelete={props.onDelete}/>
      })
    }
    </div>
  )
}

export default todos
