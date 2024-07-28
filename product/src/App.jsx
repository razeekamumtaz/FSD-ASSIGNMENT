
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Add from './components/Add'
function App() {

 return (
  <>
  <div>
     <Navbar/><br/>
    <Routes>
        <Route path="/home" element={<Home></Home>}/>
        <Route path='/add' element={<Add></Add>}></Route>
    </Routes>
    </div>
    </>
  )
}

export default App
