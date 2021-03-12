import { useEffect, useState } from "react";
import { getInfoEarthquakes } from "../../helpers/getInfoEarthquakes";

import { HiSearch } from "react-icons/hi";
import ListEarthquakes from '../ListEarthquakes/ListEarthquakes';
import validateForm from '../../helpers/validateForm';
import './SearchEarthquakes.css';


const SearchEarthquakes = () => {
  const [infoToSearch, setInfoToSearch] = useState({})
  const [result, setResult] = useState([])

  const searchParameters = (e) => {
    e.preventDefault();
    setInfoToSearch({
      country: e.target[0].value.toLowerCase(),
      minmagnitude: e.target[1].value,
      amount: e.target[2].value
    })
  } 

  useEffect( () => {
    if(validateForm(infoToSearch)){
      getInfoEarthquakes(infoToSearch)
        .then(res => {
          setResult(res)
        })
    } 
  }, [infoToSearch])
  
  return (
    <>
      <form id="formSE" className="formSE" onSubmit={searchParameters}>
        <label htmlFor="countryInp" className="formSE__label">País</label>
        <input id="countryInp" className="formSE__input" type="text"/>
        <label htmlFor="mmInp" className="formSE__label">Magnitud mínima</label>
        <input id="mmInp" className="formSE__input" type="number"/>
        <label htmlFor="amountInp" className="formSE__label">Cantidad</label>
        <input id="amountInp" className="formSE__input" type="number"/>
        <button className="formSE__btnSearch">
          <HiSearch/>
        </button>
      </form>
      <main>
        <ListEarthquakes result={result}/>
      </main>
    </>
  )
}

export default SearchEarthquakes;