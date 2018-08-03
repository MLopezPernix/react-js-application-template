import React from "react"
import  { Route, Switch } from "react-router-dom"

import HomePage from "./components/pages/HomePage"

const ApplicationRouter = () => (
  <Switch>
    <Route exact path="/" component={HomePage}/>
  </Switch>
)

export default ApplicationRouter
