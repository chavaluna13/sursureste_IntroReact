import React from 'react'
import './Counter.css'

//? EN REACT USAMOS AÚN CAMELCASE PARA CLASES Y FUNCIONES  
//? EN REACT PARA USAR CLASES DEBEMOS UTILIZAR EXTENDS REACT.COMPONENT 

class Counter extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                count: props.initCount // Count es el valor inicial de mi contador 
            }
            // El state se va a encargar de modificar el DOM por mi 
            // Lo que hace react es detectar los cambios en el state y los pone en la UI
        }

        //aquí vamos a trabajar el render 
        render(){
            // JSX LA COMBINACIÓN DE NUESTRO HTML & JAVASCRIPT
            // JSX NO RECONOCE class COMO ATRIBUTO DE HTML, EN SU LUGAR LO CAMBIAMOS POR className
            return (
                /* TODO NUESTRO HTML */
                <div className="counter-main">
                    <h5>{this.state.count}</h5> {/* LAS LLAVES EN MI JSX REPRESENTAN CÓDIGO DE JAVASCRIPT  */}
                    <div className="counter-button"> {/* ELEMENTO PADRE  */}
                    {/*  this.setState el único que puede cambiar el estado de mi componente */}

                            {/* ELEMENTOS HIJOS */}
                            <button 
                            onClick={()=> this.setState({count: this.state.count+1})}
                            > 
                            Agregar
                            </button>
                            <button 
                            onClick={()=> this.setState({count: this.state.count-1})}
                            > 
                            Disminuir 
                            </button>
                    </div>
                </div>
            )
        }
}

export default Counter