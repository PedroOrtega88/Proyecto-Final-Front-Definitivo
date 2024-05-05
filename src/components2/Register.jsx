import React from 'react';

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // logica para sericdor
    console.log('Datos del formulario de registro enviados');
  };

  return (
    <div>
      <h2>Registrarse</h2>
      <ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nombre de usuario:</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Registrarse</button>
      </form>
      </ul>
    </div>
  );
};

export default Register;