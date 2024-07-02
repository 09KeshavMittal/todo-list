import React, { useState } from 'react'

const AddTodo = (props) => {
    const[title,setTitle] =useState("");
    const[desc,setDesc] =useState("");
    const submit = (e)=>{
        function handleSubmit(e) {
            e.preventDefault(); //Page will not load 
            console.log('You clicked submit.');
        }
        // e.preventdefault(); // 
        if(!title || !desc){
            alert("Title or Description cannot be Blank");
        }
        props.addTodo(title,desc);
    };

  return (
    <div claasName="container my-3">
        <h3>Add Todo</h3>
    <form onSubmit={submit}>
    <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title </label>
    <input type="text" value={title} onChange={(e)=> {setTitle(e.target.value)}} readonly className="form-control" id="title" placeholder='Task Title Here'/>
    </div>
    <div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo Descption</label>
    <input type="text" value={desc} onChange={(e)=> {setDesc(e.target.value)}} className="form-control" id="desc" placeholder="Write Your Task Here"/>
    </div>
    
    <button type="submit" className="btn btn-sm btn-success mb-3" >Add Task</button>
    
    </form>
    </div>
  )
}

export default AddTodo
