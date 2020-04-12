import React, { Component } from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Col, Label
} from 'reactstrap';
import { Link } from 'react-router-dom'
import { Control, LocalForm, Errors } from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val.length <= len); //check and make sure that length is within a range
const minLength = (len) => (val) => val && (val.length >= len); //same as maxLength

class CommentForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false
    }
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen //we are negating the value over here
    })
  }

  handleSubmit(values) {
    this.toggleModal() //we need the modal to close after the submit

    this.props.addComment(this.props.dishId, values.rating, values.author, values.comment)
  }

  render() {
    return (
      <div>
        <Button outline color="secondary" onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rating" md={12}>Rating</Label>
                <Col>
                  <Control.select defaultValue={1} model=".rating" name="rating"
                    className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="author" md={12}>Your Name</Label>
                <Col>
                  <Control.text model=".author" id="author" name="author"
                    placeholder="Your Name"
                    className="form-control"
                    validators={{
                      minLength: minLength(3), maxLength: maxLength(15)
                    }}
                  />
                  {/* this will display the error messages if any */}
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    messages={{
                      minLength: 'Must be greater than 2 characters',
                      maxLength: 'Must be 15 characters or less'
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment" md={12}>Comment</Label>
                <Col>
                  <Control.textarea model=".comment" id="comment" name="comment"
                    rows="6"
                    className="form-control" />
                </Col>
              </Row>
              <Row className="form-group">
                <Col>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

//writing {dish} because the dish will be received as props
//We write the user made functional components in CamelCase
function RenderDish({ dish }) {
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

//Functional components
function RenderComments({ comments, addComment, dishId }) {
  if (comments != null) {
    return (
      <div>
        <h4>Comments</h4>
        <ul className='list-unstyled'>
          {comments.map((comment) => {
            var comment_date = new Date(Date.parse(comment.date));
            return (
              //you can also use this in order to parse your date 
              //{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
              <li key={comment.id}>
                <p>{comment.comment}</p>
                {/* <p>-- {comment.author}, {comment_date.toLocaleString('default', { month: 'short' })} {comment_date.getDay()}, {comment_date.getFullYear()}</p> */}
                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(comment_date)} </p>
              </li>
            )
          })}
        </ul>
        {/* passing the dishId and the addComment action to the Commentform */}
        <CommentForm dishId={dishId} addComment={addComment} />
      </div>
    )
  }
  else {
    return (
      <div></div>
    )
  }
}

const DishDetail = props => {

  console.log('DishDetail render() invoked')

  if (props.dish != null) {
    return (
      <div className='container'>
        <div className='row'>
          <Breadcrumb>
            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className='col-12'>
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className='row'>
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments} addComment={props.addComment} dishId={props.dish.id} />
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div></div>
    )
  }
}

export default DishDetail