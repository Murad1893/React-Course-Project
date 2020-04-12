//Done as per approach on coursera. We can export this configuration
import { createStore, combineReducers } from 'redux'
//splitted into four different reducer function and the combining them back
import { Dishes } from './dishes'
import { Comments } from './comments'
import { Promotions } from './promotions'
import { Leaders } from './leaders'

export const ConfigureStore = () => {
  //enables us to create store
  const store = createStore(
    //combining all the four different reducers into a single reducer
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders
    })
  )

  return store
}