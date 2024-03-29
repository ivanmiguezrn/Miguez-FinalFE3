import React from "react";
import { useContextGlobal } from "./utils/globalcontext";


const Card = ({ children, item }) => {
  const {dispatch, state} = useContextGlobal();
  const{doctorSelected, favs} = state;
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    let datos = ``;
    if(item == undefined){
      dispatch({type: 'ADD_FAV', payload: doctorSelected})
      datos = `Se agregó al dentista ${doctorSelected.name} a favoritos`
    } else {
      dispatch({type: 'ADD_FAV', payload: item})
      datos = `Se agregó al dentista ${item.name} a favoritos`
    }
    
    alert(datos);
  }
  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favs));
  }, [state.favs])
  
  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        {children}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;