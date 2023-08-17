import React from 'react'
import Sensei from './Components/Sensei';
import './App.css';

// TAMBIÉN PODEMOS UTILIZAR UNA CLASE DE ES6 PARA DEFINIR UN COMPONENTE 

class App extends React.Component {
    constructor(){
      super() // es necesario cuando necesitamos acceder a algunas variables de alguna clase padre

      //estado inicial
      this.state ={
        name: "Felipe",
        email: "felipeluna@gmail.com",
        ocupation: "Code Sensei at Devf"
      }
    }
  render (){
    return(
        <div className="App">
          {/* PROPS (QUE VIENE DE PROPIEDADES) SON DATOS QUE DEVUELVE UN ELEMENTO DE REACT  */}
            <h1>Props en React! </h1>
            <Sensei name={this.state.name} email={this.state.email} ocupation={this.state.ocupation}/> 
            <button onClick={()=> this.setState({name:"Cesar", email:"cesar@gmail.com"})}>Actualizar</button>
        </div>
    )
  }
}

export default App