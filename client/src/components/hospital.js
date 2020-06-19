import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class hospital extends Component {
  constructor() {
    super()
    this.state = {
      hospital_name: '',
      district: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.hospital_name,
      last_name: decoded.district
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Available Hospitals</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Hospital Name</td>
                <td>{this.state.hospital_name}</td>
              </tr>
              <tr>
                <td>District</td>
                <td>{this.state.district}</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default hospital