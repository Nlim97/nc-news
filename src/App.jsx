import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Articles from './components/Articles'
import { Route, Routes } from 'react-router-dom'
import Article from './components/Article'
import Comments from './components/Comments'
import Topics from './components/Topics'
import Error from './components/ErrorPage'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route
      path='/'
      ></Route>
      <Route 
      path='/articles'
      element={<Articles/>}
      ></Route>
      <Route
      path='/articles/:article_id'
      element={<Article/>}
      ></Route>
      <Route
      path='/articles/:article_id/comments'
      element={<Comments/>}></Route>
      <Route
      path='/topics'
      element={<Topics/>}></Route>
      <Route
      path='/topics/:topic'
      element={<Articles/>}></Route>
      <Route
      path='*'
      element={<Error/>}
      ></Route>
    </Routes>
    </>
  )
}

export default App
