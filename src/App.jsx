import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Articles from './components/Articles'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route 
      path='/articles'
      element={<Articles/>}
      ></Route>
    </Routes>
    </>
  )
}

export default App
