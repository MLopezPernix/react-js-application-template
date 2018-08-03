import React from "react"
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import setupStore from "./redux/setupStore"
import Application from "./Application"
import registerServiceWorker from './helpers/registerServiceWorker';

const store = setupStore()

class RootContainer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    )
  }
}
export default RootContainer

ReactDOM.render(<RootContainer />, document.getElementById('root'));
registerServiceWorker();
