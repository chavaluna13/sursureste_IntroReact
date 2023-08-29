import React from 'react'

const Character = ({character}) => {
  return (
    <div className="container" style={{margin: "30px"}}>
        <div className="row">
            { 
                character.map((item, index) => (
                    <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div className="card" style={{minWidth: "250px"}}>
                            <img className="card-img-top" src={item.image} alt="character"/>
                            <div className="card-body">
                                <h2 className="card-title">{item.name}</h2>
                                <h3 className="card-title">ID: {item.id}</h3>
                                <hr />
                                <p className="card-text">Species: {item.species}</p>
                                <p className="card-text">Gender: {item.gender}</p>
                                <p className="card-text">Location: {item.location.name}</p>
                                <p className="card-text">Status: {item.status}</p>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default Character