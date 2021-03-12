const getInfoOnemi = async () => {
  const url = `https://chilealerta.com/api/query/?user=demo&select=onemi`;
  const res = await fetch( url );
  const { onemi } = await res.json();

  let id = 0;
  let infoOnemi;
  if(onemi) {
    infoOnemi = onemi.map( ({alert_date, alert_region, post_title}) => {
      id += 1;
      return {
        id,
        alert_date,
        alert_region,
        post_title,
      }
    })
  } 

  return infoOnemi;
}

export default getInfoOnemi;