import React, {useEffect, useState} from 'react'
import Navbar from './Components/Navbar/Navbar.js';

function App() {
  // TENEMOS NUESTRA LÓGICA
 
  //LE INDICO QUE MI ESTADO ESTÁ VACIO Y QUE SE VA A LLENAR/POBLAR DE LOS DATOS QUE VIENEN DE LA API
  const [character, setResults] = useState([])

  // indico la ruta o el endpoint de la api 
  const URI = "https://rickandmortyapi.com/api/character"

  const getCharacters = (URI) => {
    fetch(URI)
    //esta respuesta la tenemos que convertir a un objeto de javascript
    .then((response) => response.json())
    .then((data) => setResults(data.results))
    .catch((error) => console.log(error))
  }

  // CON DEPENDENCIA VACIA, LA LLAMADA SE EJECUTA UNA VEZ EN LO QUE SE CARGA MI COMPONENTE
  // Y SE RENDERIZA.
  useEffect(() => {
    getCharacters(URI)//CUANDO SE CARGUE EL COMPONENTE, LLAMA AL METODO Y EJECUTA LA FUNCIÓN ANTERIOR
  }, [])






  // TENEMOS NUESTROS COMPONENTES

  return (
    <>
     <Navbar brand="Rick and Morty"/>
    </>
  );
}

export default App;
