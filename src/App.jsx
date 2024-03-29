import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";


function App() {
  return (
      <BrowserRouter className="App">
          <Navbar/>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/favs" element={<Favs/>}/>
            <Route path="*" element={<h3>Error</h3>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
