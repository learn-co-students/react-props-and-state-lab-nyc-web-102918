import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

const petURL = '/api/pets'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  updateFilters = (newType) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: newType
      }
    })
  }

  fetchPets = () => {
    let param = this.state.filters.type === 'all' ? '' : `?type=${this.state.filters.type}`
    fetch(petURL + param)
      .then(res => res.json())
      .then(data => {
        this.setState({
          pets: data
        })
      })
  }

  adoptPet = (id) => {
    const updatedPets = [...this.state.pets]
    updatedPets.map(pet => {
      if (pet.id == id) {
        pet.isAdopted = !pet.isAdopted
      }
    })
    this.setState({
      pets: updatedPets
    })
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
                onChangeType={this.updateFilters}
                onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
