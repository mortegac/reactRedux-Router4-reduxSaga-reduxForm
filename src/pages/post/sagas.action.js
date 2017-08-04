
import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import _ from 'lodash'

// const getId = () => Math.random().toString(36).substr(2)



export default {

  * fetch() {
    yield put({ type: 'FETCH_POST_START' })
    try {
        
      const Response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/todos')
      yield put({ type: 'FETCH_POST_SUCCESS', payload: Response.data.slice(0, 10) })
    
    }catch(error) {
      yield put({ type: 'FETCH_POST_FAILED', error })
    }

  },




}