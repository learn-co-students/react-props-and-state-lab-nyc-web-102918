import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    const petList = this.props.pets.map(pet => {
      return <Pet
               key={pet.id}
               id={pet.id}
               name={pet.name}
               type={pet.type}
               age={pet.age}
               weight={pet.weight}
               gender={pet.gender}
               isAdopted={pet.isAdopted}
               onAdoptPet={this.props.onAdoptPet}
             />
    })
    return <div className="ui cards">{petList}</div>
  }
}

export default PetBrowser
