import './App.css'
import { Link, Route, Routes } from 'react-router-dom'

// como soluciono esto 👇
const Home = () => <h1>home</h1>

// 👇 componentes renderiza elementos
const SearchPage = () => {
   const tacos = [
     'cochinita',
     'chili',
     'pastor',
     'canasta'
   ]
 
   return (
     <div>
        <h1>SearchPages</h1>
        <ul>
          {tacos.map(taco => (
            <li key={taco}><Link to={`/tacos/${taco}`}>{taco}</Link></li>
          ))}
        </ul>
     </div>
   )
}

const Tacos = () => <h1>Tacos</h1>

function App() {  
  return (
    <div className="App">
      <header>
        <h1>TestRouter 🐵</h1>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/search-page'>Searchpage</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-page' element={<SearchPage />} />
        <Route path='/tacos/' element={<Tacos />} />
      </Routes>
    </div>
  )
}

export default App
