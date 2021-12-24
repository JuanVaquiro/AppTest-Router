import './App.css'
import { Link, Route, Routes, useParams, Outlet } from 'react-router-dom'

//Outlet componente (si la ruta esta anidada deje un espacio) 

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

const Tacos = () => {
  const { tacoName } = useParams()

  return (
    <div>
      <h1>Tacos</h1>
      {tacoName}
      <Link to="details"> Ir a los deatalles</Link>
      <Outlet />
    </div>
  );
}

const TacoDetails = () => {
  const { tacoName } = useParams()

  return(
      <h1>Taco Details {tacoName}</h1>
  )
}

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
        <Route path='/tacos/:tacoName' element={<Tacos />}>
          <Route path='details' element={<TacoDetails />} />
        </Route>
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  )
}
//ruta anidada 
export default App
