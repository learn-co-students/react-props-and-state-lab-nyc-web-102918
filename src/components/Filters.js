import React from 'react'



// Should receive an onChangeType callback prop. This callback prop gets called whenever
// the value of the <select> element changes with the value of the <select>
// Should receive an onFindPetsClick callback prop. This callback prop gets called when the
//  users clicks the 'Find pets' button.
// aqui es props porque viene de su padre por eso usare algo como this.props

class Filters extends React.Component {
// aqui debo hacer esto porque basicamente estoy agarrando lo que el usuario seleccione en el UI
// y se lo paso a mi funcion que espera un argumento
  handleChange = (e) => {
    this.props.onChangeType(e.target.value)
  }


  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={this.handleChange}name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.props.onFindPetsClick} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
// @channel Here is the link to the repo for our recipe app! https://github.com/victoria-huang/recipe-app-react-review
//
// To fetch for all categories: https://www.themealdb.com/api/json/v1/1/categories.php
// To fetch for recipes in a category: https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
// For instance,
// ```fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${CATEGORY_HERE}`)```
//
// Deliverables:
// 1) As a user, I should see all categories on page load on the left column
// 2) When I click on “find recipes”, I should see the middle column populate with recipes from that category
// 3) When I click on a recipe in the middle column, I should add a REFERENCE (not the entire object, just an unique identifier) to my recipes, and this recipe should appear in the right most column
// 4) When I click on a recipe in the right column, this should remove the recipe from my recipes
// 5) When I type in the filter box, I should filter the categories by name
