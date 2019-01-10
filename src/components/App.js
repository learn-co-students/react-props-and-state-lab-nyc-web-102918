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
      }
    }
  }

  handleChangeType = event => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  onAdoptPet = (petId) => {
    const newPets = this.state.pets.map(pet => {
      if (pet.id === petId) {
        return {
          ...pet,
          isAdopted: true
        }
      } else {
        return pet
      }
    })

    this.setState({
      pets: newPets
    })
  }

  handleFindPetsClick = () => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets')
      .then(res => res.json())
      .then(data => {
        this.setState({
          pets: data
        })
      })
    }
    else if (this.state.filters.type === 'cat') {
      fetch('/api/pets?type=cat')
      .then(res => res.json())
      .then(data => {
        this.setState({
          pets: data
        })
      })
    }
    else if (this.state.filters.type === 'dog') {
      fetch('/api/pets?type=dog')
      .then(res => res.json())
      .then(data => {
        this.setState({
          pets: data
        })
      })
    }
    else {
      fetch('/api/pets?type=micropig')
      .then(res => res.json())
      .then(data => {
        this.setState({
          pets: data
        })
      })
    }
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
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handleFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
