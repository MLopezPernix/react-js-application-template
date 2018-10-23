import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

import "../../src/styles/vendor/reset.css"
import "../../src/styles/vendor/flexboxgrid.min.css"
import "../../src/styles/overrides"
import "../../src/styles/utilities"

const DefaultStoryView = (props) => (
  <div>
    <Router>
      <div style={props.style}>
        {props.children}
      </div>
    </Router>
  </div>
)

export default DefaultStoryView
