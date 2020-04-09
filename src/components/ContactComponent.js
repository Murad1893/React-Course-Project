import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap'
import { Link } from 'react-router-dom'


class Contact extends Component {

  constructor(props) {
    super(props)
    //setting up some properties to be linked with our form
    this.state = {
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contactType: 'Tel.', //this will be used for the form control
      message: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this); //binding instead of using arrow function
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target; //we retrieve the target input
    const value = target.type === 'checkbox' ? target.checked : target.value; //if the changed one is textbox then do this
    const name = target.name //retrieving that which target has been changed

    this.setState({
      //hence we are keeping the name of the input fields same as that of our state attributes
      [name]: value
    })
  }

  //instead of bind you can also do like this
  handleSubmit = (event) => {
    //whenever we submit a form we need to remove the default behaviour of the submit hence we do this here
    alert('Current state is: ' + JSON.stringify(this.state))
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className='row'>
          <Breadcrumb>
            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
          <div className='col-12'>
            <h3>Contact Us</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road<br />
                          Clear Water Bay, Kowloon<br />
                          HONG KONG<br />
              <i className="fa fa-phone"></i>: +852 1234 5678<br />
              <i className="fa fa-fax"></i>: +852 8765 4321<br />
              <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
              <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
              <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
            </div>
          </div>
        </div>

        <div className='row row-content'>
          <div className='col-12'>
            <h3>Send us Your Feedback</h3>
          </div>
          <div className='col-12 col-md-9'>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                {/* this md={2} signifies the number of columns this label will use*/}
                {/* because this would be confused with the javascript 'for' hence we are using htmlFor here */}
                <Label htmlFor='firstname' md={2}>First Name</Label>
                {/* instead of col-md-10 we can also use like this */}
                <Col md={10}>
                  {/* by setting the value we are tying this to the state firstname */}
                  <Input type='text' id='firstname' name='firstname' placeholder='First Name' value={this.state.firstname} onChange={this.handleInputChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                {/* this md={2} signifies the number of columns this label will use*/}
                {/* because this would be confused with the javascript 'for' hence we are using htmlFor here */}
                <Label htmlFor='lastname' md={2}>Last Name</Label>
                {/* instead of col-md-10 we can also use like this */}
                <Col md={10}>
                  {/* by setting the value we are tying this to the state firstname */}
                  <Input type='text' id='lastname' name='lastname' placeholder='Last Name' value={this.state.lastname} onChange={this.handleInputChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                {/* this md={2} signifies the number of columns this label will use*/}
                {/* because this would be confused with the javascript 'for' hence we are using htmlFor here */}
                <Label htmlFor='telnum' md={2}>Contact Tel.</Label>
                {/* instead of col-md-10 we can also use like this */}
                <Col md={10}>
                  {/* by setting the value we are tying this to the state firstname */}
                  <Input type='tel' id='telnum' name='telnum' placeholder='Tel. Number' value={this.state.telnum} onChange={this.handleInputChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                {/* this md={2} signifies the number of columns this label will use*/}
                {/* because this would be confused with the javascript 'for' hence we are using htmlFor here */}
                <Label htmlFor='email' md={2}>Email</Label>
                {/* instead of col-md-10 we can also use like this */}
                <Col md={10}>
                  {/* by setting the value we are tying this to the state firstname */}
                  <Input type='email' id='email' name='email' placeholder='Email' value={this.state.email} onChange={this.handleInputChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                {/* we need to push this col to the right hence we give offset like this */}
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    {/* this is a form group with a check box */}
                    <Label check>
                      <Input type='checkbox' name='agree' checked={this.state.agree} onChange={this.handleInputChange} />{' '}<strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  {/* this is a dropdown selection menu */}
                  <Input type='select' name='contactType' value={this.state.contactType} onChange={this.handleInputChange}>
                    <option>Tel.</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="message" md={2}>Your Feedback</Label>
                <Col md={10}>
                  <Input type="textarea" id="message" name="message"
                    rows="12"
                    value={this.state.message}
                    onChange={this.handleInputChange}></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>

      </div>
    );
  }
}

export default Contact;