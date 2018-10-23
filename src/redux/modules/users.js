import { takeEvery, call, put } from "redux-saga/effects"
import { handleActions, createAction } from "redux-actions"
import { getAllUsersRequest } from "../../api/usersRequest"

// Actions
export const NEW_USER = "react-js-application-template/users/NEW_USER"
export const UPDATE_USER = "react-js-application-template/users/UPDATE_USER"
export const GET_USERS = "react-js-application-template/users/GET_USERS"
export const SET_USERS = "react-js-application-template/users/SET_USERS"

// Reducer
export const getInitialState = () => {
  return {
    user: '',
    // name: '',
    // email: '',
    // password: '',
    users: null
  }
}

const reducer = handleActions(
  {
    [SET_USERS]: (state, action) => {
      const { users } = action.payload
      return {
        ...state,
        users
      }
    },
    [UPDATE_USER]: (state, action) => {
    const { field, value } = action.payload
    const { user } = state
    return {
      ...state,
      user: {
        ...user,
        [field]: value
      }
    }
  },
  // [UPDATE_USER]: (state, action) => {
  //   const { field, value } = action.payload
  //   return {
  //     ...state,
  //     [field]: value
  //   }
  // },
  [NEW_USER]: (state, action) => {
    const { user } = action.payload
    return {
      ...state,
      user
    }
  },
},

  getInitialState(),
)

export default reducer

// Action Creators
export const updateUser = (field, value) => {
  return createAction(UPDATE_USER)({
    field,
    value
  })
}

export const newUser = (user) => {
  return createAction(NEW_USER)({
    user
  })
}

export const getUsers = () => {
  return createAction(GET_USERS)({})
}

export const setUsers = users => {
  return createAction(SET_USERS)({
    users: users
  })
}

// Fetch API Sagas
export function* getUsersSaga(action) {
  try {
    const users = yield call(getAllUsersRequest)
    yield put(setUsers(users))
  } catch (error) {
    console.log(error)
  }
}

// Saga watcher
export function* usersSaga() {
  yield [takeEvery(GET_USERS, getUsersSaga)]
}
