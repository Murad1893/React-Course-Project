import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';

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
function RenderComments({ comments }) {
  if (comments != null) {
    return (
      <div>
        <h4>Comments</h4>
        {comments.map((comment) => {
          var comment_date = new Date(comment.date);
          return (
            //you can also use this in order to parse your date 
            //{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
            <div key={comment.id} className='list-unstyled'>
              <p>{comment.comment}</p>
              <p>-- {comment.author}, {comment_date.toLocaleString('default', { month: 'short' })} {comment_date.getDay()}, {comment_date.getFullYear()}</p>
            </div>
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

const DishDetail = props => {

  console.log('DishDetail render() invoked')

  if (props.dish != null) {
    return (
      <div className='container'>
        <div className='row'>
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish}></RenderDish>
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.dish.comments}></RenderComments>
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