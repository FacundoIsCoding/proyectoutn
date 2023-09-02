import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "./components/Navigation/navigation";
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Destinos from "./pages/Destinos";
import Habitaciones from "./pages/Habitaciones";
import Registrarse from "./pages/Registrarse";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [data, setData] = useState([])
  useEffect(()=> {
    fetch('http://localhost:5000/')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  })

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <>
     <Navigation/>
    <div className="App">
     </div>
  
    
     <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/servicios" element={<Servicios/>}/>
      <Route path="/destinos" element={<Destinos/>}/>
      <Route path="/habitaciones" element={<Habitaciones/>}/>
      <Route path="/registrarse" element={<Registrarse/>}/>
      <Route path="/paquetes" element={<fill_template/>}/>
    </Routes>
    </>
  
  
  );
}



export default App;
