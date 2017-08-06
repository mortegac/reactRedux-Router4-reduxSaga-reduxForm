import { takeEvery } from 'redux-saga/effects'
import action from './sagas.action'

export default function* rootSagas() {
  yield takeEvery('FETCH_POST', action.fetch)
  // yield takeEvery('MENU_CHANGE', action.menuAdmin)
  // yield takeEvery('MENU_POST', action.menuPost)


  // yield takeEvery('CREATE_TODO', todos.create)
  // yield takeEvery('UPDATE_TODO', todos.update)
  // yield takeEvery('DELETE_TODO', todos.destroy)
}





// import { takeEvery } from 'redux-saga/effects'
// // import axios from 'axios'
// import action from './sagas.action'
// export default function* rootSagas() {
//   yield takeEvery('FETCH_POST', fetchPost())
// }






// function* fetchPost(action) {
//   // debugger
//   yield put({ type: 'FETCH_POST_START' })
  
//   try{
//       const Response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts')
//       yield put({ type: 'FETCH_POST_SUCCESS', payload: Response.data.slice(0, 5) })
    

//     }catch(error) {
//       yield put({ type: 'FETCH_POST_FAILED', error })
//     }

//   }


  // function* rootSagas(){
  //   debugger
  //   yield all([
  //               takeEvery('FETCH_POST', fetchPost())
  //             ])
  //     // yield takeEvery('FETCH_POST', fetchPost())
  //     // yield takeEvery('FETCH_POST', fetchPost())
  // }
  
//   yield takeEvery('FETCH_POST', action.fetch)
  
// }

// export default  fetchPost


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