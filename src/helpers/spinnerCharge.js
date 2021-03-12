import '../css/spinner.css';

const spinnerChargue = (state) => {
  const selectForm = document.querySelector('#formSE');
  if(selectForm){
    const spinner = document.createElement('div');
    spinner.classList.add('spinnerChargue');
    spinner.innerHTML = `
    <div class="sk-chase">
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
    </div>
    `

    if(state === 'on' && !spinner){
      selectForm.appendChild(spinner);
    }
    if(state === 'off' && spinner){
      if(document.querySelector('.spinnerChargue')){
        document.querySelector('.spinnerChargue').remove();
      }

    }
  }

}

export default spinnerChargue;