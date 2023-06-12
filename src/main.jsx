import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {CrudContext} from './/context/Context'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CrudContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CrudContext>
)
