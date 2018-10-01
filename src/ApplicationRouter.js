import React from "react"
import  { Route, Switch } from "react-router-dom"

import HomePage from "./components/pages/HomePage"
// import MainPage from "./components/pages/MainPage"

const ApplicationRouter = () => (
  <Switch>
    <Route exact path="/" component={HomePage}/>
    {/* <Route exact path="/mainPage" component={MainPage}/> */}
  </Switch>
)

export default ApplicationRouter
