import React from "react"
import 'react-dates/initialize'
import { Link } from "react-router-dom"

import { connect } from "react-redux"
import { updateUser, getUsers } from "../../redux/modules/users"
import { bindActionCreators } from "redux"

import "react-dates/lib/css/_datepicker.css"
import "../../styles/pages/homePage.css"


class HomePage extends React.Component {
  state = {
    name: "",
    email: "",
    password: ""
  }

  updatePersonalInformation = (field, value) => {
    this.setState(() => ({
      [field]: value
    }))
  }

  // componentWillMount() {
  //   const { getUsers, usersList } = this.props;
  //   if (!usersList) {
  //     getUsers()
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log('Lista usuarios: ', nextProps.usersList)
  // }

  // updatePersonalInformation = (field, value) => {
  //   const { updateUser } = this.props
  //   updateUser(field, value)
  // }

  render() {
    return (
      <div>
        <h3 className="text--center mx-lil my-mid">React Workshop</h3>
        <div className="w-50 text--center m-auto d-flex flex-direction--column personal-information--form">

          <div className="w-100 d-flex m-lil justify-content--space-around">
            <input onChange={(value) => this.updatePersonalInformation("name", value.target.value)} className="w-100 background--light-gray personal-information--input" placeholder="Name" />
          </div>

          <div className="w-100 d-flex m-lil justify-content--space-around">
            <input type="email" onChange={(value) => this.updatePersonalInformation("email", value.target.value)} className="w-100 background--light-gray personal-information--input" placeholder="Email" />
          </div>

          <div className="w-100 d-flex m-lil justify-content--space-around">
            <input type="password" onChange={(value) => this.updatePersonalInformation("password", value.target.value)} className="w-100 background--light-gray personal-information--input" placeholder="Password" />
          </div>

        </div>
        <Link to={{ pathname: "/mainPage", state: { ...this.state } }} className="button--submit d-flex p-lil w-50 m-auto justify-content-center background--light-green color--white">Submit</Link>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateUser,
    getUsers
  }, dispatch)
}

const mapStateToProps = () => ({
  // currentStep: state.move.currentStep
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

// export default HomePage
