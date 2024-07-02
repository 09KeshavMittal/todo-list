import React from 'react'

const footer = () => {
  let footerStyle= {
    position: "relative",
    top: "100vh",
    width: "100%",
    
  }
  return (
    
    <footer className="bg-dark text-light py-3 px-5" style={footerStyle}>
      <p className="text-center">Copyright &copy; MyTodoList.com</p>
      <p className="text-center">Developed with ❤️ by <a href="https://github.com/09KeshavMittal/">Keshav Mittal</a></p>
      
    </footer>
  )
}

export default footer
