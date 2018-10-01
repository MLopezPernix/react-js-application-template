import React from "react"

import { BrowserRouter as Router } from "react-router-dom"
import ApplicationRouter from "./ApplicationRouter"

import "./styles/vendor/flexboxgrid.min.css"
import "./styles/vendor/reset.css"
import "./styles/overrides"
import "./styles/utilities"

export default class Application extends React.Component {
  render() {
    return (
      <Router>
        <ApplicationRouter />
      </Router>
    )
  }
}
