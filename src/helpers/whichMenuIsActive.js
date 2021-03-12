const whichMenuIsActive = (btnActive) => {
  const activeClass = document.querySelector('.btn-active');
  const existingSection = document.querySelector('.section-active');

  if(btnActive) {
    if(!btnActive.classList.contains('btn-active')){

      const classNameOfSectionToShow = btnActive.classList.item(0);
      const sectionActive = document.querySelectorAll(`.${classNameOfSectionToShow}`)[1];

      if(activeClass) {
        btnToDisable(activeClass)
        sectionToDisable(existingSection)
      }

      btnToEnable(btnActive)
      sectionToEnable(sectionActive)

    }

  }

}

const btnToEnable = (btn) => {
  btn.classList.remove('btn-inactive');
  btn.classList.add('btn-active');
}
const btnToDisable = (btn) => {
  btn.classList.remove('btn-active');
  btn.classList.add('btn-inactive')
}

const sectionToEnable = (stn) => {
  stn.classList.remove('section-inactive')
  stn.classList.add('section-active')
}
const sectionToDisable = (stn) => {
  stn.classList.remove('section-active');
  stn.classList.add('section-inactive');
}


export default whichMenuIsActive