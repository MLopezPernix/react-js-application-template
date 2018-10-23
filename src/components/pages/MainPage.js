import React from "react"
import { Link } from "react-router-dom"

import "../../styles/pages/mainPage.css"


class MainPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = props.location.state
  }

  render() {
    const { name, email } = this.state
    return (
      <div>
        <h1 className>Welcome: </h1>

        <div className="w-100 d-flex m-lil justify-content--space-around">
          <label className="w-100 d-flex justify-content-center personal-information--input">Your name: {name}</label>
        </div>
        <div className="w-100 d-flex m-lil justify-content--space-around">
          <label className="w-100 d-flex justify-content-center personal-information--input">Your email: {email}</label>
        </div>

        <Link to="/" className="button--submit d-flex p-lil w-50 m-auto justify-content-center background--light-green color--white">Back</Link>
      </div>
    )
  }
}

export default MainPage
