import React, { Component, PropTypes } from 'react'
import moment from 'moment'

export default class DashboardPrrrs extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    prrrs: PropTypes.array.isRequired,
  }

  render(){

    return (
      <div>
        <h1> Dashboard </h1>
      </div>
    )
  }
}
