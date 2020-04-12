//Done as per approach on coursera. We can export this configuration
import { createStore, combineReducers, applyMiddleware } from 'redux'
//splitted into four different reducer function and the combining them back
import { Dishes } from './dishes'
import { Comments } from './comments'
import { Promotions } from './promotions'
import { Leaders } from './leaders'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createForms } from 'react-redux-form'; //this will create a reducer that takes care of the forms
import { InitialFeedback } from './forms'

export const ConfigureStore = () => {
  //enables us to create store
  const store = createStore(
    //combining all the four different reducers into a single reducer
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
      //the form state will now be preserved
      ...createForms({
        feedback: InitialFeedback
      })
    }),
    applyMiddleware(thunk, logger)
  )

  return store
}