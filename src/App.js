import './App.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate replace to="/sign-up" />}  />
      </Routes>
    </div>
  )
}

export default App;
