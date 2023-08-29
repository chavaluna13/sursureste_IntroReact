import React from 'react'
import Navbar from './Components/Navbar/Navbar.js';

function App() {
  // TENEMOS NUESTRA LÓGICA
  //hacemos la llamada al endpoint de la api 
  fetch("https://rickandmortyapi.com/api/character")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))






  // TENEMOS NUESTROS COMPONENTES

  return (
    <>
     <Navbar brand="Rick and Morty"/>
    </>
  );
}

export default App;
