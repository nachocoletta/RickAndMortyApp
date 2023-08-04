import React from "react";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.errorContainer}>
      <img
        src="https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg" // Reemplaza esta URL con la URL de la imagen de error 404 que desees utilizar
        alt="Error 404"
        className={styles.errorImage}
      />
      <h1 className={styles.errorMessage}>Error 404 - Página no encontrada</h1>
      <h2 className={styles.errorDescription}>
        La página que estás buscando no se pudo encontrar. Por favor, verifica
        la URL o intenta nuevamente más tarde.
      </h2>
    </div>
  );
};

export default ErrorPage;
