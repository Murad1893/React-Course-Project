import React, { Component } from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Col, Label
} from 'reactstrap';
import { Link } from 'react-router-dom'
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent'
import { baseUrl } from '../shared/baseUrl'
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

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

    this.props.postComment(this.props.dishId, values.rating, values.author, values.comment)
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
    <FadeTransform
      in
      transformProps={{
        exitTransform: 'scale(0.5) translateY(-50%)'
      }}>
      <Card>
        <CardImg top src={baseUrl + dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </FadeTransform>
  )
}

//Functional components
function RenderComments({ comments, postComment, dishId }) {
  if (comments != null) {
    return (
      <div>
        <h4>Comments</h4>
        <ul className='list-unstyled'>
          <Stagger in>
            {comments.map((comment) => {
              var comment_date = new Date(Date.parse(comment.date));
              return (
                //you can also use this in order to parse your date 
                //{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                <Fade in>
                  <li key={comment.id}>
                    <p>{comment.comment}</p>
                    {/* <p>-- {comment.author}, {comment_date.toLocaleString('default', { month: 'short' })} {comment_date.getDay()}, {comment_date.getFullYear()}</p> */}
                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(comment_date)} </p>
                  </li>
                </Fade>
              )
            })}
          </Stagger>
        </ul>
        {/* passing the dishId and the addComment action to the Commentform */}
        <CommentForm dishId={dishId} postComment={postComment} />
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

  //we are passing the isLoading and errMessage in the DishDetail component in props

  console.log('DishDetail render() invoked')

  //so we check that whether the property is being loaded
  if (props.isLoading) {
    return (
      <div className='container'>
        <div className='row'>
          <Loading></Loading>
        </div>
      </div>
    )
  }

  else if (props.errMessage) {
    return (
      <div className='container'>
        <div className='row'>
          <h4>{props.errMessage}</h4>
        </div>
      </div>
    )
  }

  else if (props.dish != null) {
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
            <RenderComments comments={props.comments} postComment={props.postComment} dishId={props.dish.id} />
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