import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../Reducers/reducer";
import axios from "axios";
const initialState = {theme: false, data: [], favs: JSON.parse(localStorage.getItem('favs')) || [], doctorSelected: {}}

const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = `https://jsonplaceholder.typicode.com/users`;
  useEffect(() => {
    axios(url)
    .then(res => dispatch({type: 'GET_LIST', payload: res.data}))
  }, [])
  console.log(state);
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider
export const useContextGlobal = () => useContext(ContextGlobal);