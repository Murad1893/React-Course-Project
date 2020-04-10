import React, { Component } from 'react'
import {
  Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label
} from 'reactstrap'
import { NavLink } from 'react-router-dom';

export class Header extends Component {

  //we need to store some information hence made as a class component
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false //this will keep track of whether the modal is open or not
    }

    this.toggleNav = this.toggleNav.bind(this) //we could either specify it as an arrow function in onClick = {()=>..} or we can bind like this
    this.toggleModal = this.toggleModal.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen //we are negating the value over here
    })
  }

  //same as toggleNav
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen //we are negating the value over here
    })
  }

  handleLogin(event) { //this recevies the information in the event
    this.toggleModal() //closing the modal once we want to handle login
    alert("Username: " + this.username.value + " Password: " + this.password.value + " Remember: " + this.remember.checked)
    event.preventDefailt();
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
              {/* this ml-auto will push this button to the right */}
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <Button onClick={this.toggleModal}><span className='fa fa-sign-in fa-lg'></span> Login</Button>
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
        {/* same as the modal we used in bootstrap 
        UNCONTROLLED FORMS --------- for this we will user innerRef in order to extract values from the DOM state*/}
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader>Login Modal</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor='username'>Username</Label>
                <Input type='text' id='username' name='username' innerRef={(input) => this.username = input}></Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='password'>Password</Label>
                <Input type='password' id='password' name='password' innerRef={(input) => this.password = input}></Input>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input} /> Remember me
                </Label>
              </FormGroup>
              <Button type='submit' value='submit' color='primary'>Login</Button>
            </Form>
          </ModalBody>
        </Modal>
      </>
    )
  }
}

export default Header
