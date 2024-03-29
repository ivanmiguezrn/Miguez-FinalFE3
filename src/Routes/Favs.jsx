
import Card from "../Components/Card";
import React, {useState, useEffect} from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const [favs, setFavs] = useState([]);
  const [dentistas, setDentistas] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    setFavs(storedFavs);
  }, []);

  useEffect(() => {
    const fetchDentista = async (id) => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setDentistas(prevState => [...prevState, data]);
      } catch (error) {
        console.error('Error fetching dentist:', error);
      }
    };

    setDentistas([]);

    favs.forEach(id => {
      fetchDentista(id);
    });
  }, [favs])

    

  return (
    <div>
      <h1>Destacados</h1>
      <div className="dentist-grid">
        {dentistas.map(dentista => (
          <div key={dentista.id} className="dentist-card">
            <h2>{dentista.name}</h2>
            <p>Email: {dentista.email}</p>
            <p>Telefono: {dentista.phone}</p>
            <p>Sitio web: {dentista.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favs;
