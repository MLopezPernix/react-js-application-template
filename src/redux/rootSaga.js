import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'
import { usersSaga } from "./modules/users"



export default function* rootSaga() {
  yield all([
    usersSaga()
  ])
}
