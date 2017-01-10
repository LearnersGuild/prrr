import React, { Component, PropTypes } from 'react'
import moment from 'moment'

import Link from '../../atoms/Link'
import StatusBar from '../../atoms/StatusBar'

export default class Timeline extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    prrrs: PropTypes.array.isRequired
  }

  render(){
    const {currentUser, prrrs } = this.props

    const rows = prrrs.map(prrr => {

      const href = `https://github.com/${prrr.owner}/${prrr.repo}/pull/${prrr.number}`

      return <tr key={prrr.id}>
        <td>
          <Link href={href} target="_blank">
            {prrr.owner}
          </Link>
        </td>
        <StatusBar></StatusBar>
      </tr>

    })

    return <table className='timeline'>
      <thead>
        <tr>
          <td>Pull Requests</td>
          <td>Monday</td>
          <td>Tuesday</td>
          <td>Wednesday</td>
          <td>Thursday</td>
          <td>Friday</td>
          <td>Saturday</td>
          <td>Sunday</td>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>

  }
}
