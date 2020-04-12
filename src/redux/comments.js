import { COMMENTS } from '../shared/comments'
import * as ActionTypes from './ActionTypes'

export const Comments = (state = COMMENTS, action) => {
  switch (action.type) {

    //on action, only the comment reducer should handle action of addComment hence we assign to this
    case ActionTypes.ADD_COMMENT:
      var comment = action.payload
      comment.id = state.length //as this comment will be added at the end hence its id would be the last number
      comment.date = new Date().toISOString() //generating the current date and saving in ISOString format
      return state.concat(comment) //this is adding the new state to current state

    default:
      return state
  }
}