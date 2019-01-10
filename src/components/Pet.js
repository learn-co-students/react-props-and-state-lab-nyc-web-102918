import React from 'react'

class Pet extends React.Component {


  handleClick = (e) => {
    this.props.onAdoptPet(this.props.id)
  }
  render() {

    let adoptButton
    if (this.props.isAdopted) {
      adoptButton = <button className="ui disabled button">Already adopted</button>
    }
    else {
      adoptButton = <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
    }
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.gender}
            {this.props.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {adoptButton}
        </div>
      </div>
    )
  }
}

export default Pet
