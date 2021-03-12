import { useState, useEffect } from 'react';
import getInfoOnemi from '../../helpers/getInfoOnemi';
import './OnemiReports.css'

const OnemiReports = () => {
  const [stateInfo, setStateInfo] = useState([]);

  useEffect( () => {
    getInfoOnemi()
      .then(data => setStateInfo(data))
  }, [])

  return (
    <>
      {
        stateInfo
        ? stateInfo.map( info => 
          (
            <article className="articleOR" key={info.id}>
              <h2 className="articleOR__region" >{info.alert_region}</h2>
              <p className="articleOR__info">- {info.post_title}.</p>
              <time className="articleOR__date" >{info.alert_date}</time>
            </article>
          )
        )
        : (<p>No se logró cargar la información, reinicie la página e inténtelo nuevamente.</p>)
      }
    </>
  )
}

export default OnemiReports;