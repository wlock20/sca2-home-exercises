import React, { Component } from "react"
import Welcome from "../../components/Welcome"

class Form extends Component {
  // TODO: Add constructor and establish state with all the fields you want
  constructor(props) {
    super(props)
    this.state = {}
  }

  // TODO: Create update methods for state after creating the form structure

  render() {
    // TODO: Currently, this only renders the welcome component. Create a form, and various form components and place them here
    return <Welcome name="amigo" />
  }
}

export default Form
