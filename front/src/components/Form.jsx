import React, { useState } from "react";
import styles from "./Form.module.css";
import { validate } from "../assets/validation.js";

const Form = ({ login }) => {
  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });

    let validaciones = validate({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    setErrors(validaciones);

    const arrayDeErrores = Object.values(validaciones);

    if (arrayDeErrores.length === 0) {
      setBotonHabilitado(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let validaciones = validate(inputs);

    const arrayDeErrores = Object.values(validaciones);

    if (arrayDeErrores.length === 0) {
      // window.alert("Datos completos");
      // window.alert(inputs.email);
      login(inputs);
    } else {
      window.alert("Error en el usuario o clave");
    }
  };

  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [botonHabilitado, setBotonHabilitado] = useState(true);
  return (
    <div className={styles.divContenedor}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>EMAIL </label>
        </div>
        <div>
          <input
            type="text"
            name="email"
            value={inputs.email}
            onChange={handleChange}
          ></input>
          <p style={{ color: "red" }}>{errors.email ? errors.email : null}</p>
          {/* {errors.email ? <p style={{ color: "red" }}>{errors.email}</p> : null} */}
        </div>
        <div>
          <label>PASSWORD </label>
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
          ></input>
          <p style={{ color: "red" }}>
            {errors.password ? errors.password : null}
          </p>
          {/* {errors.password ? (
            <p style={{ color: "red" }}>{errors.password}</p>
          ) : null} */}
        </div>
        <button type="submit" disabled={botonHabilitado}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
