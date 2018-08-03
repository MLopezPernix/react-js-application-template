import React from "react"

import { BrowserRouter as Router } from "react-router-dom"
import ApplicationRouter from "./ApplicationRouter"

export default class Application extends React.Component {
  render() {
    return (
      <Router>
        <ApplicationRouter />
      </Router>
    )
  }
}
