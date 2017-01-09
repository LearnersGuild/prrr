import React, { Component } from 'react'
import request from '../../../../request'
import moment from 'moment'

export default class AverageClaimTime extends Component {
  constructor( props ) {
    super( props )

    this.state = { loading: true }
  }

  componentDidMount() {
    request( 'GET', '/api/statistics/averageTimeUntilClaimed' )
      .then( result => {
        this.setState( Object.assign( { loading: false }, { avg: result.json }))
      })
  }

  displayAverageTime() {
    if( this.state.loading ) {
      return 'Fetching'
    } else {
      return moment.duration( this.state.avg ).humanize()
    }
  }

  render() {
    const { averageTime } = this.props

    return (
      <div className="statistic green">
        <div className="body">{this.displayAverageTime()}</div>
        <div className="title">Average Claim Time</div>
      </div>
    )
  }
}
