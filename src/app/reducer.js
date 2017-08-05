import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
//Reducer
import post from '../pages/post/reducer'


const rootReducers = combineReducers({
    
    posts: post,
    form: formReducer,
  })


export default rootReducers

