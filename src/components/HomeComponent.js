import React from 'react'
import { Card, CardText, CardBody, CardSubtitle, CardImg, CardTitle } from 'reactstrap'
import { Loading } from './LoadingComponent'
import { baseUrl } from '../shared/baseUrl'

import { FadeTransform } from 'react-animation-components';

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
  else if (item != null) {
    return (
      <FadeTransform
        in
        transformProps={{
          exitTransform: 'scale(0.5) translateY(-50%)'
        }}>
        <Card>
          <CardImg src={baseUrl + item.image} alt={item.name} />
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    );
  }
  else return (null)
}

export default function HomeComponent(props) {
  return (
    <div className='container'>
      <div className='row align-items-start'>
        <div className='col-12 col-md md-1'>
          <RenderCard item={props.dish} isLoading={props.dishesLoading} errMessage={props.dishesErrMessage} />
        </div>
        <div className='col-12 col-md md-1'>
          <RenderCard item={props.promotion} isLoading={props.promoLoading} errMessage={props.promoErrMess} />
        </div>
        <div className='col-12 col-md md-1'>
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  )
}
