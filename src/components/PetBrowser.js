import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    return (
      <div>
        {this.props.pets.map(pet =>
          <div className="ui cards"><Pet onAdoptPet={this.props.onAdoptPet} key={pet.id} pet={pet}/></div>
        )}
      </div>
    )
  }
}

export default PetBrowser
