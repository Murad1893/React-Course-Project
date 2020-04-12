import * as ActionTypes from './ActionTypes' //importing all action types

//this will return an action js object
export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: { //all the 4 paramters will be part of the payload hence sent 
    dishId, rating, author, comment
  }
})

