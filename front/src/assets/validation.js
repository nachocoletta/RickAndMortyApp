const validate = (inputs) => {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPassword = /\d+/g;
  let errors = {};

  if (!regexEmail.test(inputs.email)) {
    errors.email = "Debe ingresar un email valido";
  }

  if (inputs.email.length > 35) {
    errors.email = "El mail no puede tener mas de 35 caracteres";
  }

  if (inputs.password.length < 6 || inputs.password.length > 10) {
    errors.password =
      "La clave no debe tener menos de 6 caracteres ni mas de 10";
  }

  if (!regexPassword.test(inputs.password)) {
    errors.password = "La clave debe contener al menos un numero";
  }
  return errors;
};
module.exports = { validate };
