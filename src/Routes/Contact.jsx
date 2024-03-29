
import Form from '../Components/Form'
import React, {useState} from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage]= useState('');

    const handleSubmit = (event) => {
      event.preventDefault();

      if (nombre.length < 5 || !email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
        setErrorMessage('Por favor verifique su información nuevamente');
      } else {

        setSuccessMessage(`Gracias ${nombre}, te contactaremos cuanto antes vía mail`);

        setNombre('');
        setEmail('');

        console.log('Datos enviados:', { nombre, email });
      }
    };
  
  return (
     <div style={{ backgroundColor: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#333' }}>
        <h1>Contacto</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre completo:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
        {successMessage && <p>{successMessage}</p>}
      </div>
    );
  };






export default Contact