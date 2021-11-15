import { useState } from 'react'
import './App.css'

const Home = () : Element => <h1>home</h1>

const SearchPage = () : Element => <h1>SearchPage</h1>

function App() : Element {

  return (
    <div className="App">
      TestRouter 😎 🐵 💵
      <Home/>
      <SearchPage/>
    </div>
  )
}

export default App
