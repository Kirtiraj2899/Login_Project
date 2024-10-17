
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Employee from './Components/EmployeeComp/Employee'
import Login from './Components/LoginComp/Login'
import LoginFaild from './Components/LoginFaildComp.jsx/LoginFaild'

function App() {
  

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Employee" element={<Employee></Employee>}></Route>
      <Route path='/LoginFaild' element={<LoginFaild></LoginFaild>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
