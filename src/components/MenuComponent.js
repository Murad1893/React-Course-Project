import React, { Component } from 'react'
import { Media, NavItem } from 'reactstrap'
import {
  Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle
} from 'reactstrap';

export class Menu extends Component {

  constructor(props) {
    super(props)

    this.state = { //over here we can define variables related to this component
      //defining as a javascript object containing a list of dishes
      selectedDish: null
    }
  }

  onDishSelect(dish) {
    //you cannot change the state directly hence we need to use this.setState
    this.setState({
      selectedDish: dish //this will ensure that the selectedDish will be equal to dish on selection
    })
  }

  renderDish(dish) {
    if (dish != null) {
      //we are now rendering the dish in a different way
      return (
        <Card>
          <CardImg width='100%' src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }

  render() {

    //when we want to refer any value from the state, we can use this.state
    const menu = this.props.dishes.map(dish => {
      //iterating over the javascript object
      return (
        //key helps react to identify each element in this component uniquely while rendering
        //Whenever we render a list of items then we must assign it a key property to each items <div key={dish.id} className="col-12 mt-5">

        <div key={dish.id} className="col-12 col-md-5 m-1">
          {/*this classifies that each media tag will act as a list item*/}
          {/* <Media tag='li'>
            <Media left middle>
              <Media object src={dish.image} alt={dish.name}></Media>
            </Media>
            <Media body className='ml-5'>
              <Media heading>{dish.name}</Media>
              <p>{dish.description}</p>
            </Media>
          </Media> */}
          {/*you can also use arrow function here if there is parameter passed to it */}
          <Card onClick={() => { this.onDishSelect(dish) }}>
            <CardImg width='100%' src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      )
    });

    return (
      <div className="container">
        <div className='row'>
          {/*using javascript code within JSX using the {}*/}
          {menu}
        </div>
        <div className='row'>
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.state.selectedDish)}
          </div>
        </div>
      </div>
    )
  }
}

export default Menu
