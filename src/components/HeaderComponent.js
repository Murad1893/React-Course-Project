import React, { Component } from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap'
import { NavLink } from 'react-router-dom';

export class Header extends Component {

  //we need to store some information hence made as a class component
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false
    }

    this.toggleNav = this.toggleNav.bind(this) //we could either specify it as an arrow function in onClick = {()=>..} or we can bind like this
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen //we are negating the value over here
    })
  }

  render() {
    //ReactFragment or <> helps us to group together multiple elements. We can also use a <div> but this will introduce another node in the virtual DOM hence we use <> here
    return (
      <>
        <Navbar dark expand='md'> {/**so the navbar will be shown here in its full form for medium onward sizes */}
          <div className="container">
            {/**Button to toggle the navbar */}
            <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
            <NavbarBrand className='mr-auto' href="/">
              <img src='assets/images/logo.png' height='30' width='41' alt='Ristorante Con Fusion'></img>
            </NavbarBrand>
            {/**we will toggle this based on this isOpen variable in our state */}
            <Collapse isOpen={this.state.isNavOpen} navbar> {/**this will allow to toggle this part of the component based on the screen size */}
              <Nav navbar>
                <NavItem>
                  <NavLink className='nav-link' to='/home'>
                    <span className='fa fa-home fa-lg'></span> Home

                </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/aboutus'>
                    <span className='fa fa-info fa-lg'></span> About Us

                </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/menu'>
                    <span className='fa fa-list fa-lg'></span> Menu

                </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/contactus'>
                    <span className='fa fa-address-card fa-lg'></span> Contact Us

                </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
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
