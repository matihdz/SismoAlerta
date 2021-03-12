import Menu from '../components/Menu/Menu'
import './App.css'


const App = () => {

  return (
    <>
    <header className="header">
      <h1 className="header__title">Servicio Sismológico</h1>
      <p className="header__paragraph">
        Investiga los últimos sismos detectados en el mundo. 
        También consulta los recientes informes sobre prevenciones y alertas indicadas por <a target="_blank" rel="noreferrer" className="onemi-link" href="https://www.onemi.gov.cl/">ONEMI</a> según cada región de Chile.
      </p>
    </header>
    <Menu/>
    </>
  )
}

export default App;