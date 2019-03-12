import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      },
      isAdopted: false
    }
  }

  onChangeType = (value) => {
    this.setState({
      filters: {type: value}
    })
  }

  onFindPetsClick = (e) => {
    let url = this.state.filters.type === 'all' ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`

    fetch(url)
    .then(r => r.json())
    .then(data => this.setState({pets: data}))
  }

  onAdoptPet = (petId) => {
    let adoptedPet = this.state.pets.find(pet => pet.id === petId)
    console.log(petId)
    let adoptedPetIdx = this.state.pets.findIndex( pet => pet === adoptedPet)
    let updatedPets = [...this.state.pets]
    updatedPets[adoptedPetIdx].isAdopted = true
    this.setState({pets: updatedPets})
    console.log(updatedPets)
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
              onChangeType={this.onChangeType}
              onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
              onAdoptPet={this.onAdoptPet}
              pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
