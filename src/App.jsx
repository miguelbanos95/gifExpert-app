import { useState } from 'react'
import './App.css'
import AddCategory from "./components/AddCategory";

function App() {
  const [categories, setCategories] = useState([])

  const onAddCategory = () => {
    setCategories(['teta',...categories]);
  }


  return (
    <div className="App">
      {/* title */}
      <h1>Hola</h1>

      {/* input */}
      <AddCategory />

      {/* list of gifs */}
      <button onClick={ onAddCategory }>Add</button>
      <ol>
        { 
        categories.map((category, index) => { 
          return <li key={index}>{category}</li> })
        } 
      </ol>
    </div>
  )
}

export default App
