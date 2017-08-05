

import { call, put, takeEvery, all } from 'redux-saga/effects'
import axios from 'axios'
// import action from './sagas.action'


function* fetchPost(action) {
  // debugger
  yield put({ type: 'FETCH_POST_START' })
  
  try{
      const Response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts')
      yield put({ type: 'FETCH_POST_SUCCESS', payload: Response.data.slice(0, 5) })
    

    }catch(error) {
      yield put({ type: 'FETCH_POST_FAILED', error })
    }

  }


  function* rootSagas(){
    debugger
    yield all([
                takeEvery('FETCH_POST', fetchPost())
              ])
      // yield takeEvery('FETCH_POST', fetchPost())
      // yield takeEvery('FETCH_POST', fetchPost())
  }
  
//   yield takeEvery('FETCH_POST', action.fetch)
  
// }

export default  fetchPost


// //OPCION 2
// import { call, put } from 'redux-saga/effects'
// import axios from 'axios'


// export default function* rootSagas() {


//     yield put({ type: 'FETCH_POST_START' })
//     try {
        
//       const Response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts')
//       yield put({ type: 'FETCH_POST_SUCCESS', payload: Response.data.slice(0, 5) })
//     }catch(error) {
//       yield put({ type: 'FETCH_POST_FAILED', error })
//     }
   

// }




  // yield takeEvery('FETCH_POST', action.fetch)
  // yield takeEvery('CREATE_POST', action.create)
  // yield takeEvery('UPDATE_POST', action.update)
  // yield takeEvery('DELETE_POST', action.destroy)