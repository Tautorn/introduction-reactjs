import React, { Fragment } from "react"
import ReactDOM from "react-dom"
import "./styles.css"

const element = 'Digital Innovation'
const element2 = <h1>Olá Turma =D</h1>

function App() {
  return (
    <div>
      {element}
      {element2}
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
