import * as ActionTypes from './ActionTypes' //importing all action types
import { baseUrl } from '../shared/baseUrl'; //getting the baseUrl from here


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
    .then(response => {
      if (response.ok) {//if the res is ok
        return response;
      } else {//if err occurs
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {//in case the promise does not load or throws an err
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes))) //after the res.json is loaded we now have this collection of objects in dishes
    .catch(error => dispatch(dishesFailed(error.message)));//dispatching the err
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
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};


export const commentsFailed = (errmess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
});


//this will return an action js object
export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {

  const newComment = { dishId, rating, author, comment };

  newComment.date = new Date().toISOString();

  return fetch(baseUrl + 'comments', {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => { console.log('post comments', error.message); alert('Your comment could not be posted\nError: ' + error.message); });
};

//PROMOTIONS
export const fetchPromos = () => (dispatch) => {

  dispatch(promosLoading());

  return fetch(baseUrl + 'promotions')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
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

//LEADERS

export const addLeaders = (leaders) => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leaders
});

export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING
});

export const fetchLeaders = () => (dispatch) => {

  dispatch(leadersLoading());

  return fetch(baseUrl + 'leaders')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));
};

export const leadersFailed = (errmess) => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: errmess
});

//FEEDBACk
export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) => {

  const newFeedback = { firstname, lastname, telnum, email, agree, contactType, message };

  newFeedback.date = new Date().toISOString();

  return fetch(baseUrl + 'feedback', {
    method: "POST",
    body: JSON.stringify(newFeedback),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        throw error;
      })
    .then(response => response.json()) //returns a promise
    .then(feedback => alert('Thank you for your feedback!\n' + JSON.stringify(feedback))) //we get data using this
    .catch(error => { console.log('post feedback', error.message); alert('Your feedback could not be recorded\nError: ' + error.message); });
};