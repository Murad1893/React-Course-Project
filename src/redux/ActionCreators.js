import * as ActionTypes from './ActionTypes' //importing all action types
import { DISHES } from '../shared/dishes'

//this will return an action js object
export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: { //all the 4 paramters will be part of the payload hence sent 
    dishId, rating, author, comment
  }
})

//making THUNK here so returing a function instead of an object
export const fetchDishes = () => (dispatch) => {

  //making more than one dispatches in one action
  dispatch(dishesLoading(true))

  //also adding a delay here, after which the dishes would be added
  setTimeout(() => {
    dispatch(addDishes(DISHES))
  }, 2000)
}

//this will be representing that dishes are being loaded
export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING
})

//this will tell that dishes have been failed
export const dishesFailed = (err) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: err
})

//this will add the dishes
export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes //we see that the dishes is being passed over here
})