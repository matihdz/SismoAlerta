import alertHTML from "./alertHTML";

const validateForm = (info) => {
  // if functions returns true is OK! (validated)
  if(!validateIsEmpty(info)) {
    alertHTML('error', 'Todos los campos son requeridos')
    return false;
  } else {
    if(!validateTextsInputs(info)){
      alertHTML('error', 'Números y simbolos no están permitidos')
      return false;
    } else {
      return true;
    }
  }
}

const validateIsEmpty = (info) => {
  return Object.values(info).every(p => p !== '');
}
const validateTextsInputs = (info) => {
  //Validate if text inputs not contains numbers and symbols
  const { country } = info;
  const regEx = /^[A-Z\s,\u00E0-\u00FC]+$/i;
  return regEx.test(country);
}

export default validateForm;