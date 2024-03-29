
import Card from '../Components/Card'
import React, { useSatate, useEffect } from 'react';
import { Link } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {
  
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setDentists(data);
      } catch (error) {
        console.error('Error fetching dentists:', error);
      }
    };

  fetchData();
  }, []);


  const addToFavorites = (dentistId) => {

    if (!favorites.includes(dentistId)) {
      const updatedFavorites = [...favorites, dentistId];
      setFavorites(updatedFavorites);
    
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  return (
    <div style={{ backgroundColor: mode === 'dark' ? '#333' : '#fff', color: mode === 'dark' ? '#fff' : '#333' }}>
      <h1>Inicio</h1>
      <h1>Inicio</h1>
      <div className="dentist-grid">
        {dentists.map(dentist => (
          <div key={dentist.id} className="dentist-card">
            <h2>{dentist.name}</h2>
            <p>Username: {dentist.username}</p>
            <button onClick={() => addToFavorites(dentist.id)}>ADD FAV</button>
            <Link to={`/dentist/${dentist.id}`}>Ver más</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

  


