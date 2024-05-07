import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Articles from './components/Articles'
import { Route, Routes } from 'react-router-dom'
import Article from './components/Article'

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
      <Route
      path='/articles/:article_id'
      element={<Article/>}
      ></Route>
    </Routes>
    </>
  )
}

export default App
