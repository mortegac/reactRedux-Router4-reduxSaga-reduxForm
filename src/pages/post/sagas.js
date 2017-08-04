import { takeEvery } from 'redux-saga/effects'
import action from './sagas.action'

export default function* rootSagas() {
  yield takeEvery('FETCH_POST', action.fetch)
  yield takeEvery('CREATE_POST', action.create)
  yield takeEvery('UPDATE_POST', action.update)
  yield takeEvery('DELETE_POST', action.destroy)
}
