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

//App should pass a callback prop, onChangeType, to <Filters />.
//This callback needs to update <App />'s state.filters.type
// aqui la clave es la palabra update, eso esta directamente relacionado con setState
// la funcion acepta como argumento el nuevo valor que sera reemplazado
onChangeType = (animalType) =>{
  this.setState({filters:{
    ...this.state.filters,
      type: animalType
  }})

}

// <Filters /> needs a callback prop, onFindPetsClick. When the <Filters />
// component calls onFindPetsClick, <App /> should fetch a list of pets using fetch().
// fetch pets
// The URL of the API is /api/pets with an optional query parameter.
// Use app's state.filters to control/update this parameter
// If the type is 'all', send a request to /api/pets
// If the type is 'cat', send a request to /api/pets?type=cat. Do the same thing for dog and micropig.
// Finally set <App/>'s state.pets with the results of your fetch request so you can pass the pet data
// down as props to <PetBrowser />

onFindPetsClick = () => {
  // aqui utilizo un ternary porque depiendo si se cumple la condicion o no va a cambiar el valor
  // si type is all el fetch va a ir /api/pets en casocontrario va /api/pets?type.... el valor de cat
  // va hacer interpolado
  //condition ? true : false
  let url = this.state.filters.type === 'all' ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`

  fetch(url)
  .then( response => response.json())
  .then( data => {
    // aqui le paso mi data a este vector y lo inizialiso
    this.setState({pets: data})
  })

  //onAdoptPet es un funcion que es como un evento

}

onAdoptPet = (id) => {
  //aqui estoy creando una copia de mi pets vector
  const actualizadaPets = [...this.state.pets]
  actualizadaPets.map(pet => {
    if (pet.id == id) {
      pet.isAdopted = !pet.isAdopted
    }
  })
  // aqui actualizo el vector con los valores que quiero que retorno  mi map
  this.setState({
    pets: actualizadaPets
  })
}


//filters y petBrowser son child of app
// debo pasar onChangeType to the child
// debo siempre ir a los hijos y tambien incluir la funcion alla in order de poner aceptar la funcion en el otro archivo del
//child
// on my child le estoy pasando las funciones que necesita tener para que se pueda ejecutar en el control
// programa
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
