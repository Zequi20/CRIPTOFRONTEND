import './App.css'
import Login from './componentes/Login'
import Registro from './componentes/Registro'
import Tabla from './componentes/Tabla'
import ProtectedRoute from './utils/ProtectedRoute'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useLocalStorage} from 'react-use';

function App() {

  const [user] = useLocalStorage("user");

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={ <Login/>} />
        <Route path='registro' element={ <Registro/>} />
        <Route element={ <ProtectedRoute canActivate={user}/>}>
          <Route path='tabla' element={<Tabla/>}/>
        </Route>
      </Routes>   
    </BrowserRouter>
  )
}

export default App