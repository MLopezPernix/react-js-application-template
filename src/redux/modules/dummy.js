import { takeEvery } from "redux-saga/effects"
import { handleActions, createAction } from "redux-actions"

// Actions
export const DUMMY_ACTION = "react-js-application-template/dummy/DUMMY_ACTION"

// Reducer
export const getInitialState = () => {
  return {
    dummy: null
  }
}

const reducer = handleActions(
  {
    [DUMMY_ACTION]: (state, action) => {
      const { dummy } = action.payload
      return {
        ...state,
        dummy: dummy,
      }
    },
  },

  getInitialState(),
)

export default reducer

// Action Creators
export const dummyAction = dummy => {
  return createAction(DUMMY_ACTION)({
    dummy,
  })
}

// Fetch API Sagas
export function* createDummySaga(action) {
  // We'll have all the logic to call the api from here
}

// Saga
export function* dummySaga() {
  yield [takeEvery(DUMMY_ACTION, createDummySaga)]
}
