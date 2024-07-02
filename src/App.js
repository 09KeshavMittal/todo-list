import logo from './logo.svg';
import './App.css';
import Header from "./Mycomponents/Header";
import Todos from "./Mycomponents/Todos";
import Footer from "./Mycomponents/Footer";
import React, { useState } from 'react'; 

function App() {
  const onDelete=(todo)=>{
    console.log("I am onDelete of todo", todo);
    //Deleting this way in react does not work
    //let index=todos.indexof(index);
    //todos.splice(index, 1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }
//   let todos=[]
//   todos=[{
//     sr: 1,
//     task: "Apply for Internships",
//     desc: "Apply on Linkedin and Unstop"
//   },
//   {
//     sr: 2,
//     task: "Apply for Internships",
//     desc: "Go to Shopping "
//   },{
//     sr: 3,
//     task: "Apply for Internships",
//     desc: "Complete ReactJS Course"
//   },
// ]


  // Definig array and its fun. using state hook
  //setTodos is a fun here which updates todos everytime
  const [todos, setTodos] = useState([
    {
      sr: 1,
      task: "Apply for Internships",
      desc: "Apply on Linkedin and Unstop"
    },
    {
      sr: 2,
      task: "Apply for Internships",
      desc: "Go to Shopping "
    },{
      sr: 3,
      task: "Apply for Internships",
      desc: "Complete ReactJS Course"
    }
  ]);
  
  return (
    <>
    <Header  />
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
    
  );
}

export default App;
