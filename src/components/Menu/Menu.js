import { useState, useEffect } from 'react';
import whichMenuIsActive from '../../helpers/whichMenuIsActive'

import OnemiReports from '../OnemiReports/OnemiReports';
import SearchEarthquakes from '../SearchEarthquakes/SearchEarthquakes';

import './Menu.css'

const Menu = () => {

  const [menuActive, setMenuActive] = useState();

  useEffect( () => {
    whichMenuIsActive(menuActive)
  }, [menuActive])

  return (
    <div className="menu">
      <div className="nav">
        <button 
          className="SE btn-active nav__btn"
          onClick={(e) => {setMenuActive(e.target)}}
        >
          Buscador de Sismos
        </button>
        <button 
          className="OR btn-inactive nav__btn--OR"
          onClick={(e) => {setMenuActive(e.target)}}
        >
            Onemi Informa
        </button>
      </div>

      <section className="SE section-active menu__section"> <SearchEarthquakes/> </section>
      <section className="OR section-inactive menu__section"> <OnemiReports/> </section>
    </div>
  )
}

export default Menu;