import * as ActionTypes from './ActionTypes' //importing all action types
import { baseUrl } from '../shared/baseUrl'; //getting the baseUrl from here

//this will return an action js object
export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: { //all the 4 paramters will be part of the payload hence sent 
    dishId, rating, author, comment
  }
})

//DISHES

//making THUNK here so returing a function instead of an object
export const fetchDishes = () => (dispatch) => {

  //making more than one dispatches in one action
  dispatch(dishesLoading(true))

  //also adding a delay here, after which the dishes would be added
  // setTimeout(() => {
  //   dispatch(addDishes(DISHES))
  // }, 2000)

  //the previous was done as a simulation of fetching the dishes.
  //NOW WE WILL USE FETCH API to fetch from the json server and then dispatch the action
  return fetch(baseUrl + 'dishes')
    .then(res => res.json())
    .then(data => dispatch(addDishes(data))) //after the res.json is loaded we now have this collection of objects in dishes
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

//COMMENTS
export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
});

//PROMOTIONS
export const fetchPromos = () => (dispatch) => {

  dispatch(promosLoading());

  return fetch(baseUrl + 'promotions')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess
});

export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos
});