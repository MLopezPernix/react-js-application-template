import React from "react"
import 'react-dates/initialize';
import { SingleDatePicker } from "react-dates";
// import { Link } from "react-router-dom";

import "react-dates/lib/css/_datepicker.css";
import "../../styles/pages/homePage.css"

import moment from "moment";

class HomePage extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    focused: false,
    date: moment()
  }

  updatePersonalInformation = (field, value) => {
    // this.setState(() => ({
    //   [field]: value
    // }))
  }

  render() {
    // const { name, email, date, focused } = this.state
    return (
      <div>
        <h3 className="text--center mx-lil my-mid">React Workshop</h3>
        {/* <div>
          <img className="w-100" src={require("../../assets/images/react-img.jpg")} />
        </div> */}

        <div className="w-50 text--center m-auto d-flex flex-direction--column personal-information--form">

          {/* <div className="w-100 d-flex m-lil justify-content--space-around">
            <input onChange={(value) => this.updatePersonalInformation("name", value.target.value)} className="w-100 background--light-gray personal-information--input" placeholder="Name" />
          </div>

          <div className="w-100 d-flex m-lil justify-content--space-around">
            <input type="email" onChange={(value) => this.updatePersonalInformation("email", value.target.value)} className="w-100 background--light-gray personal-information--input" placeholder="Email" />
          </div>

          <div className="w-100 d-flex m-lil justify-content--space-around">
            <input type="password" onChange={(value) => this.updatePersonalInformation("password", value.target.value)} className="w-100 background--light-gray personal-information--input" placeholder="Password" />
          </div> */}

          {/* <div className="w-100 d-flex m-lil justify-content--space-between color--light-gray aling-items--center">
            <label>Birthday:</label>
            <SingleDatePicker
              date={date}
              placeholder="Birthday"
              numberOfMonths={1}
              hideKeyboardShortcutsPanel={true}
              onDateChange={(date) => this.updatePersonalInformation("date", date)}
              focused={focused}
              readOnly={true}
              noBorder={true}
              onFocusChange={({ focused }) => this.setState({ focused })}
            />
          </div> */}

        </div>
        {/* <Link to={{ pathname: "/mainPage", state: { name: name, email: email } }} className="button--submit d-flex p-lil w-50 m-auto justify-content-center background--light-green color--white">Submit</Link> */}
      {/* <Link to="/mainPage" className="button--submit d-flex p-lil w-50 m-auto justify-content-center background--light-green color--white">Next</Link> */}
      </div>
    )
  }
}

export default HomePage
