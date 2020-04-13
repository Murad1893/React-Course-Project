import React from 'react'
import {
  Card, CardImg, CardImgOverlay,
  CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom'
import { Loading } from './LoadingComponent'
import { baseUrl } from '../shared/baseUrl'

//Functional Component that will render the view
function RenderMenuItem({ dish }) {

  /*this classifies that each media tag will act as a list item*/
  /* <Media tag='li'>
  <Media left middle>
  <Media object src={dish.image} alt={dish.name}></Media>
  </Media>
  <Media body className='ml-5'>
  <Media heading>{dish.name}</Media>
  <p>{dish.description}</p>
  </Media>
  </Media> */
  /*you can also use arrow function here if there is parameter passed to it */
  return (
    < Card >
      {/*for each corresponsing dish the corresponding link would be rendered*/}
      < Link to={`/menu/${dish.id}`
      }>
        {/* instead of using the images configured in our application we are using them from the json server being set up */}
        < CardImg width='100%' src={baseUrl + dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link >
    </Card >
  )
}

//another way to define a functional component

const Menu = (props) => {
  //when we want to refer any value from the state, we can use this.state
  const menu = props.dishes.dishes.map(dish => { //now as this is a functional component we can now use props instead of this.props
    //iterating over the javascript object
    return (
      //key helps react to identify each element in this component uniquely while rendering
      //Whenever we render a list of items then we must assign it a key property to each items <div key={dish.id} className="col-12 mt-5">

      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish}></RenderMenuItem>
      </div>
    )
  });

  console.log('Menu component render is invoked!')

  if (props.dishes.isLoading) {
    return (
      <div className='container'>
        <div className='row'>
          <Loading></Loading>
        </div>
      </div>
    )
  }

  else if (props.dishes.errMessage) {
    return (
      <div className='container'>
        <div className='row'>
          <h4>{props.errMessage}</h4>
        </div>
      </div>
    )
  }

  else {
    return (
      <div className="container" >
        <div className='row'>
          <Breadcrumb>
            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className='col-12'>
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className='row'>
          {/*using javascript code within JSX using the {}*/}
          {menu}
        </div>
      </div>

    )
  }

}

export default Menu
