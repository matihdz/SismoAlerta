import alertHTML from "../helpers/alertHTML";
import spinnerChargue from "./spinnerCharge";

export const getInfoEarthquakes = async (info) => {
  const AvoidInitialCharge = document.querySelector('#countryInp');

  if(AvoidInitialCharge.value !== ''){
    spinnerChargue('on');

    const url = `https://chilealerta.com/api/query/?user=matihdz&select=ultimos_sismos&minmagnitude=${info.minmagnitude}&limit=${info.amount}&country=${info.country}`;
    const res = await fetch( url );
    const allData = await res.json();
  
    spinnerChargue('off');
  

    const nameOfPropertyNeed = Object.keys(allData)[1];
    const specificData = [...allData[nameOfPropertyNeed]];  

    let infoEarthquakes;
    if(specificData.length > 100) {
      /* console.log(allData[nameOfPropertyNeed]) */
    } else {
      if(specificData) {
        infoEarthquakes = specificData.map(({
          id,
          chilean_time,
          local_time,
          magnitude,
          depth,
          latitude,
          longitude,
          reference,
          scale,
          source
        }) => {
          return {
            id,
            chilean_time,
            local_time,
            magnitude,
            depth,
            latitude,
            longitude,
            reference,
            scale,
            source
          }
        })
      }
    }

    if(infoEarthquakes) {
      if(infoEarthquakes.length === 0){
        alertHTML('error', 'No se encontraron resultados');
      }
    }

    return infoEarthquakes;
  }
  return [];
}





