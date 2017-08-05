
import { call, put } from 'redux-saga/effects'
import axios from 'axios'
// import _ from 'lodash'

// const getId = () => Math.random().toString(36).substr(2)

// export function fetch(userId) {
//   // `axios` function returns promise, you can use any ajax lib, which can
//   // return promise, or wrap in promise ajax call
//   console.log('ENTRE')
//   return axios.get('https://jsonplaceholder.typicode.com/posts');
// };

export default {
//  * fetch({ payload }) {
  * fetch() {
    yield put({ type: 'FETCH_POST_START' })
    try {
        
      const Response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts')
      yield console.log('REsponse Post: ', Response)
      yield put({ type: 'FETCH_POST_SUCCESS', payload: Response.data })
    //Response.data.slice(0, 10)
    }catch(error) {
      yield put({ type: 'FETCH_POST_FAILED', error })
    }

  },




}