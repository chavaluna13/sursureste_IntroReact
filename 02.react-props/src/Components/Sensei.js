import React from 'react'

export default class Sensei extends React.Component {
    render (){
        console.log(this.props)
        return (
            <div style={
                {
                backgroundColor: 'lightblue',
                margin:15
            }
            }> 
             <h1>Hola {this.props.name}</h1>
             <h2>{this.props.email}</h2>
             <h3>{this.props.ocupation}</h3>
            </div>
        )
    }
}
