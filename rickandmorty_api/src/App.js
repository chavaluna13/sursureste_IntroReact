import React, {useEffect, useState} from 'react'
import Navbar from './Components/Navbar/Navbar.js';
import Character from './Components/Character/Character.js';
import Pagination from './Components/Pagination/Pagination.js';

function App() {
  // TENEMOS NUESTRA LÓGICA
 
  //LE INDICO QUE MI ESTADO ESTÁ VACIO Y QUE SE VA A LLENAR/POBLAR DE LOS DATOS QUE VIENEN DE LA API
  const [character, setResults] = useState([])
  const [info, setInfo] = useState ({})

  // indico la ruta o el endpoint de la api 
  const URI = "https://rickandmortyapi.com/api/character"

  const getCharacters = (URI) => {
    fetch(URI)
    //esta respuesta la tenemos que convertir a un objeto de javascript
    .then((response) => response.json())
    .then((data) => {
      setResults(data.results)
      setInfo(data.info)
    })
    .catch((error) => console.log(error))
  }


// ESTÁS DOS NUEVAS FUNCIONES HARAN UNA NUEVA LLAMA A LA MISMA API
// PERO A DIFERENTES RUTAS 

const onPrevious = () => {
  getCharacters(info.prev)
}

const onNext = () => {
  getCharacters(info.next)
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

    <div className="container">
        {/* pasamos el array a la props */}
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      <Character character={character} />
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
    </div>

    </>
  );
}

export default App;
