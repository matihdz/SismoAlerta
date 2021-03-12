import alertHTML from '../../helpers/alertHTML';
import './ListEarthquakes.css';

const ListEarthquakes = ({result}) => {

  return (
    <>
      {
        result 
        ? result.map(info => (
          <article className="articleLE" key={info.id}>
            <h2 className="articleLE__place">{info.reference}</h2>
            <p className="articleLE__magnitude">Magnitud: {info.magnitude} {info.scale}</p>
            <p className="articleLE__latitude">Latitud: {info.latitude} {info.scale}</p>
            <p className="articleLE__longitude">Longitud: {info.longitude} {info.scale}</p>
            <p className="articleLE__depth">Profundidad: {info.depth} {info.scale}</p>
            <time className="articleLE__local-time">Hora Local: {info.local_time}</time>
            <time className="articleLE__chilean-time">Hora en Chile: {info.chilean_time}</time>
            <footer className="articleLE__source">Fuente: {info.source}</footer>
          </article>
        ))
        : alertHTML('error', 'Busquedas excedidas. Espere un momento antes de volver buscar.')
      }
    </>
  )
}

export default ListEarthquakes;