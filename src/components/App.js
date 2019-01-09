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

  onChangeType = (type) => {
    this.setState({
      filters: {
        type: type
      }
    })
  }

  onFindPetsClick = () => {
    let query
    this.state.filters.type === "all" ? query = "" : query = `?type=${this.state.filters.type}`

    fetch(`/api/pets${query}`)
    .then(r => r.json())
    .then(data => {
      this.setState({
        pets: data
      })
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

    // fetch(`/api/pets/${petId}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   },
    //   body: {
    //     isAdopted: true
    //   }
    // })
    // .then(r => r.json())
    // .then(data => {
    //   const newPets = this.state.pets.map(pet => {
    //     if (pet.id === data.id) {
    //       return {
    //         ...pet,
    //         isAdopted: true
    //       }
    //     } else {
    //       return pet
    //     }
    //   })
    //
    //   this.setState({
    //     pets: newPets
    //   })
    // })
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
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
