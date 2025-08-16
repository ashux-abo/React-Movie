import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState('light');
  return (
   <div className='container'>
    <Home theme={theme} setTheme={setTheme}/>
   </div>
  )
}

export default App
