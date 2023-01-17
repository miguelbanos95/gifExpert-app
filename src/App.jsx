import { useState } from 'react'
import './App.css'
import AddCategory from "./components/AddCategory";
import GifGrid from './components/GifGrid';


function App() {
  const [categories, setCategories] = useState([])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }
  
  return (
    <div className="App">

      {/* title */}
      <h1>Hola</h1>

      {/* input */}
      <AddCategory onNewCategory={onAddCategory} />

      {/* list of gifs */}
      {
        categories.map((category) => (
          <GifGrid category={category} key={category} />
        )) 
      }
      
    </div>
  )
}

export default App
