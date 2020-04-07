import React, { Component } from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';

export class Dishdetail extends Component {

  constructor(props) {
    super(props)
  }

  renderDish(dish) {
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

  renderComments(comments) {
    if (comments != null) {
      return (
        <div>
          <h4>Comments</h4>
          {comments.map((comment) => {
            var comment_date = new Date(comment.date);
            return (
              <ul key={comment.id} className='list-unstyled'>
                <li>{comment.comment}</li>
                <br />
                <li>-- {comment.author}, {comment_date.toLocaleString('default', { month: 'short' })} {comment_date.getDay()}, {comment_date.getFullYear()}</li>
              </ul>
            )
          })}
        </div>
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }

  render() {

    if (this.props.dish != null) {
      return (
        <div className='row'>
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(this.props.dish.comments)}
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
}

export default Dishdetail
