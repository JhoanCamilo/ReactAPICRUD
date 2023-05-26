import './App.css'
import { ListarProductos } from './ListaProductos/Listado'
import {Formulario} from './PostForm/PostForm'
import {NavBar} from './NavBar/NavBar'
import { Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar/>}>
          <Route path='/' element={<ListarProductos/>}/>
          <Route path='/Create' element={<Formulario/>}/>
        </Route>
      </Routes>
      
      
    </>
  )
}

export default App
