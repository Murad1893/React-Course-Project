import React, { Component } from 'react';
import Menu from './MenuComponent' //importing my menu component
import '../App.css';
import Dishdetail from './DishdetailComponent'
//commented because now our component will obtain all from ouyr redux store
// import { DISHES } from '../shared/dishes'
// import { COMMENTS } from '../shared/comments'
// import { LEADERS } from '../shared/leaders'
// import { PROMOTIONS } from '../shared/promotions'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Contact from './ContactComponent'
import DishDetail from './DishdetailComponent';
import About from './AboutComponent'
import { connect } from 'react-redux'


//Main needs to take in the state from the store
const mapStateToProps = state => {
  //will map the state to props to become available
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

//This is a container component handling all the state and passing it onto presentational components in order for them to display
class Main extends Component {

  //AS ALL THE STATE IS AVAILABLE IN THE STORE HENCE WE USE this.props INSTEAD OF THIS.STATE

  constructor(props) {
    super(props);

    // this.state = {//over here we can define variables related to this component
    //   //defining as a javascript object containing a list of dishes
    //   dishes: DISHES,//now we have lifted all the information into the parent component
    //   comments: COMMENTS,
    //   promotions: PROMOTIONS,
    //   leaders: LEADERS
    // };
  }

  onDishSelect(dishId) {
    //you cannot change the state directly hence we need to use this.setState
    this.setState({
      selectedDish: dishId //this will ensure that the selectedDish will be equal to dish on selection
    })
  }

  render() {

    //making a functional component here
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      )
    }

    //the props here would have match, location, history but we only need the match object here
    const DishWithId = ({ match }) => {
      return (
        //we will receive a string here from the params and hence we will convert this into a base 10 integer
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}>
        </DishDetail>
      )
    }

    return (
      <div>
        <Header></Header>
        <Switch> {/**using the switch to switch between routes*/}
          <Route path='/home' component={HomePage} />
          {/**if we want to pass some props a component we must send it using an arrow function */}
          <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}></Menu>} /> {/**here route should match the exact pathname */}
          <Route path='/menu/:dishId' component={DishWithId}></Route>
          {/**when the above routes are not matched the user is redirected to a default page */}
          <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders}></About>}></Route>
          <Route exact path='/contactus' component={Contact}></Route>
          <Redirect to='/home'></Redirect> {/**default redirection to home */}
        </Switch>
        <Footer></Footer>
      </div>
    )
  }
}

//connecting the component to our ReduxStore using the React Router (withRouter) function
export default withRouter(connect(mapStateToProps)(Main));

