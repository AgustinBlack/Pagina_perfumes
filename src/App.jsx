import { useState } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <ItemListContainer/>
    </div>
    </>
  )
}

export default App
