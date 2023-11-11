import logo from '.logo.svg';
import './App.css';
import { PrimerComponente } from './components/PrimerComponente';
import { SegundoComponente } from './componentes/SegundoComponente';


function App() {
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="app-logo" alt="logo" /> 
        <p>Esto es un repaso de React con Victor </p>

        <PrimerComponente />
        <hr />

        <SegundoCoponente />
      </header>
    </div>
  )
    
  
}

export default App;
