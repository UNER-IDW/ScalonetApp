import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Componentes 
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import Home from './components/Home';
import JugadorList from './components/jugador/Jugador-List';
import ConvocatoriaList from './components/convocatoria/Convocatoria-List'; 
import SobreMi from './components/SobreMi';

function App() {
  return ( 
    <div className='body'> 
      <Header/> 
      <Router>
        <Routes>
          <Route exact path='/' Component={Home} /> 
          <Route exact path='/home' Component={Home} /> 
          <Route exact path='/jugadores' Component={JugadorList} /> 
          <Route exact path='/convocatorias' Component={ConvocatoriaList} /> 
          <Route exact path='/sobre-mi' Component={SobreMi} />
        </Routes>
      </Router>
      <Footer/>
    </div>

    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> 
        <p>
          BIENVENIDO QUERIDO GRAN AMIGO DADDY 
        </p> 
        <h1>
          LA RECALCADA
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
}

export default App;
