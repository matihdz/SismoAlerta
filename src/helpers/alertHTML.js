import '../css/alerts.css'

const alertHTML = (type, msg) => {
  const alertIsExist = document.querySelector('.alert');
  const selectForm = document.querySelector('#formSE');

  if(!alertIsExist && selectForm){

    const alert = document.createElement('div');
    const paragraphAlert = document.createElement('div');
    alert.classList.add('alert');
    paragraphAlert.classList.add('paragraphAlert');
    paragraphAlert.textContent = msg;
    alert.appendChild(paragraphAlert);
  
    if(type === 'error'){
      alert.classList.add('errorMsg');
      selectForm.appendChild(alert);
    }

    setTimeout( () => {
      alert.remove();
    }, 3000)

  } else {
    alertIsExist.remove();
    alertHTML(type, msg);
  }
}

export default alertHTML;