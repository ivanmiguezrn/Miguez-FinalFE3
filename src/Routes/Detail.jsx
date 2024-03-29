
import React, {useSatate, useEffect} from 'react';
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const DetalleDentista = () => {
  const { id } = useParams(); // Obtener el parámetro de la URL

  
  const [dentista, setDentista] = useState(null);

  // Obtener los datos del dentista al cargar el componente
  useEffect(() => {
    
    // Simulando la obtención de datos de la API
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/:id/${id}`);
        const data = await response.json();
        setDentista(data);
      } catch (error) {
        console.error('Error fetching dentist:', error);
      }
    };

    fetchData();
  }, [id]); 


  if (!dentista) {
   
    
  return <div>Cargando...</div>;
  }
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  <div>
      <h1>Detalle del Dentista</h1>
      <p>Nombre: {dentista.name}</p>
      <p>Email: {dentista.email}</p>
      <p>Telefono: {dentista.telefono}</p>
      <p>Sitio web: {dentista.website}</p>
    </div>
  
};

export default DetalleDentista;
  



