import * as ActionTypes from './ActionTypes'

export const Dishes = (state = {
  //tracking 3 pieces of information over here
  isLoading: true, //the dishes are loading or not
  errMess: null, //errMess if any
  dishes: [] //dishes if any added
}, action) => {
  switch (action.type) {

    case ActionTypes.ADD_DISHES:
      return { ...state, isLoading: false, errMess: null, dishes: action.payload }

    case ActionTypes.DISHES_LOADING:
      //returning an immutable state from here
      return { ...state, isLoading: true, errMess: null, dishes: [] }

    case ActionTypes.DISHES_FAILED:
      //we know that the errMess string is passed in the payload here
      return { ...state, isLoading: false, errMess: action.payload }

    default:
      return state
  }
}