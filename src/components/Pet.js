import React from 'react'

class Pet extends React.Component {
  render() {
    // aqui estoy creando una variable para guardar el valor del genero si es male le asigno ese valor
    // de otra manera le asigno el otro signo

   let gender = this.props.pet.gender === 'male' ? '♂' : '♀'
   let button;
   if (this.props.pet.isAdopted) {
     button = <button className="ui disabled button">Already adopted</button>
   } else {
     button = <button
                 onClick={() => {this.props.onAdoptPet(this.props.pet.id)}}
                 className="ui primary button">Adopt pet</button>
   }


    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender}
            PET NAME {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {button}
        </div>
      </div>
    )
  }
}

export default Pet
