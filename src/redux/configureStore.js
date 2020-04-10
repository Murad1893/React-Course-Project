//Done as per approach on coursera. We can export this configuration
import { createStore } from 'redux'
import { Reducer, initialState } from './reducer'

export const ConfigureStore = () => {
  //enables us to create store
  const store = createStore(
    Reducer,
    initialState
  )

  return store
}