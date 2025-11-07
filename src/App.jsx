import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Contacto from './components/Contact/Contact.jsx'
import Home from './components/Home/Home.jsx'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/seccion/Productos' element={<ItemListContainer children={'Listado de productos'}/> } />
            <Route path='/seccion/Contacto' element={<Contacto/>} />
          </Routes>
          <ItemListContainer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
