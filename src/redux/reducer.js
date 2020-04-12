import { DISHES } from '../shared/dishes'
import { COMMENTS } from '../shared/comments'
import { LEADERS } from '../shared/leaders'
import { PROMOTIONS } from '../shared/promotions'

//will be same as the state maintained in the maincomponent
export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  promotions: PROMOTIONS,
  leaders: LEADERS
}

//making our reducer function
//this will receive a current state and action in order to change the state and pass it as a new state
//when the reducer is first called we are keeping it equal to initialState
export const Reducer = (state = initialState, action) => {

  //this is a pure function. So we cannot change the state
  return state;

}