import React from 'react'
import { Card, CardText, CardBody, CardSubtitle, CardImg, CardTitle } from 'reactstrap'
import { Loading } from './LoadingComponent'

//extracting the item as props
function RenderCard({ item, isLoading, errMessage }) {
  if (isLoading) {
    return (
      <Loading></Loading>
    )
  }
  else if (errMessage) {
    return (
      <h4>{errMessage}</h4>
    )
  }
  else {
    return (
      <Card>
        <CardImg src={item.image} alt={item.name} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default function HomeComponent(props) {
  return (
    <div className='container'>
      <div className='row align-items-start'>
        <div className='col-12 col-md md-1'>
          <RenderCard item={props.dish} isLoading={props.dishesLoading} errMessage={props.dishesErrMessage} />
        </div>
        <div className='col-12 col-md md-1'>
          <RenderCard item={props.promotion} />
        </div>
        <div className='col-12 col-md md-1'>
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  )
}
