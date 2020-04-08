import React, { Component } from 'react'
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap'
export class Header extends Component {
  render() {
    //ReactFragment or <> helps us to group together multiple elements. We can also use a <div> but this will introduce another node in the virtual DOM hence we use <> here
    return (
      <>
        <Navbar dark>
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
          <div className='container'>
            <div className='row row-header'>
              <div className='col-12 col-sm-6'>
                <h1>Ristorante con Fusion</h1>
                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </>
    )
  }
}

export default Header
