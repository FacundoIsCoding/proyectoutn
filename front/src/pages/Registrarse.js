import React from "react";
import './Paquetes';

const Registrarse = () => {
  return (
    <>
    <div className="registro">
      <h1 className="registrarse">Registrarse</h1>
      <br></br>
      <p className="oracion">Por favor complete la información solicitada</p>
      <fieldset>
        <label className="campo" for="primer-nombre">
          Nombre: <input id="primer-nombre" type="text" required />
        </label>
        <label className="campo" for="apellido">
          Apellido: <input id="apellido" type="text" required />
        </label>
        <label className="email" for="email">
          Ingrese su Email: <input id="email" type="email" required />
        </label>
        <label className="contraseña" for="nueva-contraseña">
          Contraseña:{" "}
          <input
            id="nueva-contraseña"
            type="password"
            pattern="[a-z0-5]{8,}"
            required
          />
        </label>
        <input type="submit" value="Enviar" />
      </fieldset>
      <fill_template/>
      </div>
    </>
  );
};

export default Registrarse;