import React from 'react'
import { Provider } from "react-redux"
import configureMockStore from "redux-mock-store"

import DefaultStoryView from "./DefaultStoryView"

const ReduxStoryView = ({ state = {} , children }) => {
  const mockStore = configureMockStore([])
  const store = mockStore(state)

  return (
    <Provider store={store}>
      <DefaultStoryView>
        { children }
      </DefaultStoryView>
    </Provider>
  ) 
}
export default ReduxStoryView
