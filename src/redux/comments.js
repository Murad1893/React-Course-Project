import * as ActionTypes from './ActionTypes'

export const Comments = (state = {
  errMess: null,
  comments: []
}, action) => {
  switch (action.type) {

    //on action, only the comment reducer should handle action of addComment hence we assign to this
    // case ActionTypes.ADD_COMMENT:
    //   var comment = action.payload
    //   comment.id = state.length //as this comment will be added at the end hence its id would be the last number
    //   comment.date = new Date().toISOString() //generating the current date and saving in ISOString format
    //   return state.concat(comment) //this is adding the new state to current state

    case ActionTypes.ADD_COMMENTS: //these are the comments being loaded from the json server
      return { ...state, errMess: null, comments: action.payload };

    case ActionTypes.COMMENTS_FAILED:
      return { ...state, errMess: action.payload };

    case ActionTypes.ADD_COMMENT: //this will be user entering a comment
      var comment = action.payload;
      comment.id = state.comments.length; //as our comments are now being stored in comments.comments like the dishes.dishes hence we will use state.comments
      comment.date = new Date().toISOString();
      return { ...state, comments: state.comments.concat(comment) };

    default:
      return state
  }
}